(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,o){n.exports=o(43)},24:function(n,e,o){},25:function(n,e,o){},43:function(n,e,o){"use strict";o.r(e);var t=o(1),i=o.n(t),c=o(11),a=o.n(c),r=(o(24),o(12)),l=o(13),s=o(16),u=o(14),f=o(17),d=(o(25),o(15)),g=o.n(d);var h=function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("button",{onClick:function(){console.log("button pressed"),g.a.get("/api/user").then(function(n){console.log("axios get called"),console.log(n)}).catch(function(n){console.log(n)})}},"testRoute"))},w=function(n){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,"Healthy People"),i.a.createElement(h,null))}}]),e}(t.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}a.a.render(i.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");p?function(n){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):v(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n):v(n)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.e7e26072.chunk.js.map