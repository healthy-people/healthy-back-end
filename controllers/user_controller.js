let hashpass = require('hashpass');
let uuidv1 = require('uuid/v1');
let users = require('../models/user_ORM_functions');

let user = {
    create: function(request, response){
        console.log(request.body);
        if (!request.body.email.includes('@') || !request.body.email.includes('.')){
            response.status(400).json({'error': 'email is not valid'});
        } else if (request.body.password !== request.body.password_confirm){
            response.status(400).json({'error': 'passwords do not match'});
        } else {
            let hashedPassword = hashpass(request.body.password);
            let userRequest = {
                //this need to be email or email_address
                email: request.body.email,
                password: hashedPassword.hash,
                salt: hashedPassword.salt,
                username: request.body.username
            };
            console.log(userRequest);
            users.insertNew(userRequest, function(error, result){
                if (error){
                    console.log(error);
                    if (error.sqlMessage.includes('Duplicate')){
                        response.status(400).json({'error': 'email already exists in system'});
                    }else{
                        response.status(500).json({'error': 'oops we did something bad'});
                    }
                }else{
                    response.json({
                        id: result.insertId,
                        email: userRequest.email,
                        username: userRequest.username
                    });
                }
            });
        }
    },
    login: function(request, response){
        console.log('login hit');
        users.selectByUsername(request.body.username, function(error, result){
            if (error){
                console.log(error);
                response.status(500).json({'error': 'oops we did something bad'});
            } else if(!result.length) {
                response.status(404).json({'error': 'user not found'});
            } else {
                user = result[0];
                loginAttempt = hashpass(request.body.password, user.salt);
                if (loginAttempt.hash === user.password){
                    let uuid = uuidv1();
                    users.updateSession(user.email, uuid, function(error, result) {
                        delete user.password;
                        delete user.salt;
                        delete user.session;
                        response.header('x-session-token', uuid).json(user);
                    });
                }else{
                    response.status(401).json({'error': 'improper login credentials'});
                }
            }
        });
    },
    logout: function(request, response){
        users.removeSession(request.headers['x-session-token'], function(error, result){
            response.json({'message': 'user logged out successfully'});
        });
    },
    getUserBySession: function(request, response){
        users.getUserBySession(request.headers['x-session-token'], function(error, result){
            response.json(result[0]);
        });
    },
    getUserByID: function(request, response){
        users.getUserByID(request.params.id, function(error, result){
            if (result.length){
                response.json(result[0]);
            } else {
                response.status(404).json({'error': 'user not found'});
            }
        });
    }
};

module.exports = user;