(this["webpackJsonppeer-reservation"]=this["webpackJsonppeer-reservation"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(26),o=n.n(c),s=(n(67),n(68),n(60)),i=n(13),u=n(0),d=n.n(u),l=n(16),j=n(5),b=n(56),p=Object(b.a)({apiKey:"AIzaSyDoYZ6xSDj42gUFqLNwByd-2Xl0LgQkDsQ",authDomain:"reservation-7cc8e.firebaseapp.com",projectId:"reservation-7cc8e",storageBucket:"reservation-7cc8e.appspot.com",messagingSenderId:"517696782099",appId:"1:517696782099:web:6acf834ab351927972a4e6",measurementId:"G-JRV9XZKHTW"}),O=n(27),f=Object(O.d)(p),g=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(O.c)(Object(O.b)(f,t));case 3:return e.sent.forEach((function(e){n.push(Object(l.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=g,v=(Object(O.d)(p),function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.password,e.next=3,m("Users");case 3:return r=e.sent,c={idFound:!1,rightPassword:!1},r.forEach((function(e){n===e.id&&(c.idFound=!0,a===e.password&&(c.rightPassword=!0))})),c.idFound?c.rightPassword?console.log("Sign In"):console.log("Wrong password"):console.log("\uacc4\uc815 \uc815\ubcf4 \uc5c6\uc74c"),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=v,S=n(14),x=n(8),w=function(e){var t=Object(a.useState)(""),n=Object(S.a)(t,2),r=n[0],c=n[1];return Object(x.jsxs)("div",{className:"getInput",children:[Object(x.jsx)("div",{children:e.name}),Object(x.jsx)("input",{onChange:function(t){var n=t.target.value;c(n),e.propFunction(e.id,n)},value:r})]})},E=["id","name","password","email","phoneNumber"].map((function(e,t){return{id:t,name:e,value:void 0}})),T=function(e,t){E[e].value=t},y=function(){return console.log(E),Object(x.jsxs)("div",{className:"SignUp",children:[Object(x.jsx)("h1",{children:"Student \ud68c\uc6d0\uac00\uc785"}),E.map((function(e){return Object(x.jsx)(w,{propFunction:T,id:e.id,name:e.name},e.id)})),Object(x.jsx)("button",{onClick:function(){for(var e=!0,t=0;t<E.length;t++){var n=E[t].value;if(void 0===n){e=!1;break}if(""===n.replace(/(\s*)/g,"")){e=!1;break}}e?function(){var e={};E.map((function(t){e[t.name]=t.value.replace(/(\s*)/g,"")})),e.userType="student",console.log(e)}():(console.log("\ube48 \uc591\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4"),console.log(E))},children:"submit"})]})},k=["id","name","password","email","phoneNumber","businessNumber"].map((function(e,t){return{id:t,name:e,value:void 0}})),I=function(e,t){k[e].value=t},R=function(e){return console.log(k),Object(x.jsxs)("div",{className:"SignUp",children:[Object(x.jsx)("h1",{children:"Owner \ud68c\uc6d0\uac00\uc785"}),k.map((function(e){return Object(x.jsx)(w,{propFunction:I,id:e.id,name:e.name},e.id)})),Object(x.jsx)("button",{onClick:function(){for(var e=!0,t=0;t<k.length;t++){var n=k[t].value;if(void 0===n){e=!1;break}if(""===n.replace(/(\s*)/g,"")){e=!1;break}}e?function(){var e={};k.map((function(t){e[t.name]=t.value.replace(/(\s*)/g,"")})),e.userType="owner",console.log(e)}():(console.log("\ube48 \uc591\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4"),console.log(k))},children:"submit"})]})},D=["id","password"].map((function(e,t){return{id:t,name:e,value:void 0}})),N=function(e,t){D[e].value=t},_=function(){return Object(x.jsxs)("div",{className:"SignIn",children:[D.map((function(e){return Object(x.jsx)(w,{propFunction:N,id:e.id,name:e.name},e.id)})),Object(x.jsx)("button",{onClick:function(){for(var e=!0,t=0;t<D.length;t++){var n=D[t].value;if(void 0===n){e=!1;break}if(""===n.replace(/(\s*)/g,"")){e=!1;break}}e?function(){var e={};D.map((function(t){e[t.name]=t.value.replace(/(\s*)/g,"")})),console.log(e),h({id:e.id,password:e.password})}():(console.log("\ube48 \uc591\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4"),console.log(D))},children:"\ub85c\uadf8\uc778"})]})};n(70),n(71);n(100),n(74);n(75);var A=n.p+"static/media/store.7ad99b3e.jpg";function F(e){var t=e.store;return console.log(t),console.log(t.name),Object(x.jsxs)("section",{children:[Object(x.jsx)("img",{src:A,alt:"\uc774\ubbf8\uc9c0 \uc5c6\uc74c"}),Object(x.jsxs)("div",{className:"vertical",children:[Object(x.jsx)("div",{className:"name",children:t.name}),Object(x.jsx)("div",{className:"address",children:t.address}),Object(x.jsxs)("div",{className:"time",children:["\uc601\uc5c5 \uc2dc\uac04: ",t.openTime," ~ ",t.closeTime]})]})]})}n(76);function L(e){var t=e.isLoaded,n=e.stores;return console.log(n),Object(x.jsxs)("div",{className:"container",children:[t&&Object(x.jsx)("h1",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4."}),!t&&0===n.length&&Object(x.jsx)("h1",{children:"3km \ub0b4\uc5d0 \ub9e4\uc7a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),!t&&n&&n.map((function(e){return Object(x.jsx)(F,{store:e},e.name)}))]})}var C=n(42);n(102);C.a.initializeApp({apiKey:"AIzaSyDoYZ6xSDj42gUFqLNwByd-2Xl0LgQkDsQ",authDomain:"reservation-7cc8e.firebaseapp.com",projectId:"reservation-7cc8e",storageBucket:"reservation-7cc8e.appspot.com",messagingSenderId:"517696782099",appId:"1:517696782099:web:6acf834ab351927972a4e6",measurementId:"G-JRV9XZKHTW"});var G=C.a.firestore(),U=(C.a,function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("stores")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("stores")));case 2:return t=[],e.next=5,G.collection("Store").get();case 5:return e.sent.forEach((function(e){console.log(e.data()),t.push(Object(l.a)({id:e.id},e.data()))})),localStorage.setItem("stores",JSON.stringify(t)),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),z=(n(77),n(32)),B=n.n(z);B.a.setApiKey("AIzaSyAICYHO0YSKGy43LCRInmPoAizzniq91Aw"),B.a.setLanguage("en"),B.a.setRegion("es"),B.a.enableDebug();var J,K=n(33),P=n(12),Q=n(104),X="GET_STORES",Y="GET_STORES_SUCCESS",Z="GET_STORES_FAILURE",q="ADD_STORE",H="ADD_STORE_SUCCESS",W=Object(Q.a)((J={},Object(P.a)(J,X,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:Object(l.a)(Object(l.a)({},e.loading),{},{GET_STORES:!0})})})),Object(P.a)(J,q,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:Object(l.a)(Object(l.a)({},e.loading),{},{ADD_STORE:!0})})})),Object(P.a)(J,Y,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{loading:Object(l.a)(Object(l.a)({},e.loading),{},{GET_STORES:!1}),stores:t.payload})})),Object(P.a)(J,Z,(function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:Object(l.a)(Object(l.a)({},e.loading),{},{GET_STORES:!1})})})),Object(P.a)(J,H,(function(e){return{}})),J),{loading:{GET_STORES:!1,ADD_STORE:!1},stores:[]});Object(K.b)((function(e){var t=e.storeReducer;return{stores:t.stores,isLoaded:t.loading.GET_STORES}}),{getStores:function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:X}),e.prev=1,e.next=4,U();case 4:n=e.sent,console.log(n),t({type:Y,payload:n}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),t({type:Z,payload:e.t0,error:!0}),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getStores,n=e.isLoaded,r=e.stores;return Object(a.useEffect)((function(){t()}),[t]),Object(x.jsx)(L,{isLoaded:n,stores:r})})),n(98);n(24),n(99);var V=n(58),M=n(59),$=n(37),ee=Object($.b)({storeReducer:W});var te=function(){Object(a.useEffect)((function(){h({id:"student1",password:"s\u31451"})}),[]);var e=Object(V.createLogger)(),t=Object($.c)(ee,Object($.a)(e,M.a));return Object(x.jsx)(K.a,{store:t,children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(s.a,{basename:"/build-test",children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",element:Object(x.jsx)(_,{})}),Object(x.jsx)(i.a,{exact:!0,path:"/SignUp/Owner",element:Object(x.jsx)(R,{})}),Object(x.jsx)(i.a,{exact:!0,path:"/SignUp/Student",element:Object(x.jsx)(y,{})})]})})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(te,{})}),document.getElementById("root")),ne()},67:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.c5b04bbc.chunk.js.map