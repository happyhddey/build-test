(this["webpackJsonppeer-reservation"]=this["webpackJsonppeer-reservation"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),s=n.n(c),o=(n(68),n(69),n(60)),i=n(14),u=n(2),l=n.n(u),d=n(17),j=n(6),b=n(58),p=Object(b.a)({apiKey:"AIzaSyDoYZ6xSDj42gUFqLNwByd-2Xl0LgQkDsQ",authDomain:"reservation-7cc8e.firebaseapp.com",projectId:"reservation-7cc8e",storageBucket:"reservation-7cc8e.appspot.com",messagingSenderId:"517696782099",appId:"1:517696782099:web:6acf834ab351927972a4e6",measurementId:"G-JRV9XZKHTW"}),f=n(28),O=Object(f.d)(p),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(f.c)(Object(f.b)(O,t));case 3:return e.sent.forEach((function(e){n.push(Object(d.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=m,v=(Object(f.d)(p),function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.password,e.next=3,g("Users");case 3:return r=e.sent,c={idFound:!1,rightPassword:!1},r.forEach((function(e){n===e.id&&(c.idFound=!0,a===e.password&&(c.rightPassword=!0))})),c.idFound?c.rightPassword?console.log("Sign In"):console.log("Wrong password"):console.log("\uacc4\uc815 \uc815\ubcf4 \uc5c6\uc74c"),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=v,x=n(15),S=n(9),w=function(e){var t=Object(a.useState)(""),n=Object(x.a)(t,2),r=n[0],c=n[1];return Object(S.jsxs)("div",{className:"getInput",children:[Object(S.jsx)("div",{children:e.name}),Object(S.jsx)("input",{onChange:function(t){var n=t.target.value;c(n),e.propFunction(e.id,n)},value:r})]})},T=["id","name","password","email","phoneNumber"].map((function(e,t){return{id:t,name:e,value:void 0}})),E=function(e,t){T[e].value=t},y=function(){return console.log(T),Object(S.jsxs)("div",{className:"SignUp",children:[Object(S.jsx)("h1",{children:"Student \ud68c\uc6d0\uac00\uc785"}),T.map((function(e){return Object(S.jsx)(w,{propFunction:E,id:e.id,name:e.name},e.id)})),Object(S.jsx)("button",{onClick:function(){for(var e=!0,t=0;t<T.length;t++){var n=T[t].value;if(void 0===n){e=!1;break}if(""===n.replace(/(\s*)/g,"")){e=!1;break}}e?function(){var e={};T.map((function(t){e[t.name]=t.value.replace(/(\s*)/g,"")})),e.userType="student",console.log(e)}():(console.log("\ube48 \uc591\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4"),console.log(T))},children:"submit"})]})},N=["id","name","password","email","phoneNumber","businessNumber"].map((function(e,t){return{id:t,name:e,value:void 0}})),k=function(e,t){N[e].value=t},I=function(e){return console.log(N),Object(S.jsxs)("div",{className:"SignUp",children:[Object(S.jsx)("h1",{children:"Owner \ud68c\uc6d0\uac00\uc785"}),N.map((function(e){return Object(S.jsx)(w,{propFunction:k,id:e.id,name:e.name},e.id)})),Object(S.jsx)("button",{onClick:function(){for(var e=!0,t=0;t<N.length;t++){var n=N[t].value;if(void 0===n){e=!1;break}if(""===n.replace(/(\s*)/g,"")){e=!1;break}}e?function(){var e={};N.map((function(t){e[t.name]=t.value.replace(/(\s*)/g,"")})),e.userType="owner",console.log(e)}():(console.log("\ube48 \uc591\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4"),console.log(N))},children:"submit"})]})},D=["id","password"].map((function(e,t){return{id:t,name:e,value:void 0}})),R=function(e,t){D[e].value=t},A=function(){return Object(S.jsxs)("div",{className:"SignIn",children:[D.map((function(e){return Object(S.jsx)(w,{propFunction:R,id:e.id,name:e.name},e.id)})),Object(S.jsx)("button",{onClick:function(){for(var e=!0,t=0;t<D.length;t++){var n=D[t].value;if(void 0===n){e=!1;break}if(""===n.replace(/(\s*)/g,"")){e=!1;break}}e?function(){var e={};D.map((function(t){e[t.name]=t.value.replace(/(\s*)/g,"")})),console.log(e),h({id:e.id,password:e.password})}():(console.log("\ube48 \uc591\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4"),console.log(D))},children:"\ub85c\uadf8\uc778"})]})},L=(n(71),n(61));n(74);function C(e){return Object(S.jsx)(L.a,{defaultValue:e.title,className:"drop-down-list",data:e.data,onChange:function(t){return e.changeValue(t.value)}})}n(35),n(75);function _(e){var t={"\uc11c\uc6b8\ub300\ud559\uad50":"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uad00\uc545\uad6c \uad00\uc545\ub85c 1","\uc5f0\uc138\ub300\ud559\uad50":"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc11c\ub300\ubb38\uad6c \uc5f0\uc138\ub85c 50","\uac74\uad6d\ub300\ud559\uad50":"\uc11c\uc6b8\uc2dc \uad11\uc9c4\uad6c \ub2a5\ub3d9\ub85c 120","\uace0\ub824\ub300\ud559\uad50":"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc131\ubd81\uad6c \uc548\uc554\ub85c 145"};return Object(S.jsx)(C,{title:"\ud604\uc7ac \uc704\uce58 \uc120\ud0dd (\ud559\uad50 \uae30\uc900)",data:["\uc11c\uc6b8\ub300\ud559\uad50","\uc5f0\uc138\ub300\ud559\uad50","\uac74\uad6d\ub300\ud559\uad50","\uace0\ub824\ub300\ud559\uad50"],changeValue:function(n){e.choose(t[n])}})}n(76);var F=n.p+"static/media/store.7ad99b3e.jpg";function G(e){var t=e.store;return console.log(t),console.log(t.name),Object(S.jsxs)("section",{children:[Object(S.jsx)("img",{src:F}),Object(S.jsxs)("div",{className:"vertical",children:[Object(S.jsx)("div",{className:"name",children:t.name}),Object(S.jsx)("div",{className:"address",children:t.address}),Object(S.jsxs)("div",{className:"time",children:["\uc601\uc5c5 \uc2dc\uac04: ",t.openTime," ~ ",t.closeTime]})]})]})}n(77);function M(e){var t=e.isLoaded,n=e.stores;return console.log(n),Object(S.jsxs)("div",{className:"container",children:[t&&Object(S.jsx)("h1",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4."}),!t&&0===n.length&&Object(S.jsx)("h1",{children:"3km \ub0b4\uc5d0 \ub9e4\uc7a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),!t&&n&&n.map((function(e){return Object(S.jsx)(G,{store:e},e.name)}))]})}var U=n(43);n(102);U.a.initializeApp({apiKey:"AIzaSyDoYZ6xSDj42gUFqLNwByd-2Xl0LgQkDsQ",authDomain:"reservation-7cc8e.firebaseapp.com",projectId:"reservation-7cc8e",storageBucket:"reservation-7cc8e.appspot.com",messagingSenderId:"517696782099",appId:"1:517696782099:web:6acf834ab351927972a4e6",measurementId:"G-JRV9XZKHTW"});var P=U.a.firestore(),z=(U.a,function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("stores")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("stores")));case 2:return t=[],e.next=5,P.collection("Store").get();case 5:return e.sent.forEach((function(e){console.log(e.data()),t.push(Object(d.a)({id:e.id},e.data()))})),localStorage.setItem("stores",JSON.stringify(t)),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),B=(n(78),n(34)),J=n.n(B);function K(e,t){function n(e){return e*(Math.PI/180)}console.log(t),console.log(e);var a=n(t.lat-e.lat),r=n(t.lng-t.lng),c=Math.sin(a/2)*Math.sin(a/2)+Math.cos(n(e.lat))*Math.cos(n(t.lat))*Math.sin(r/2)*Math.sin(r/2),s=6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)));return console.log(s),s}J.a.setApiKey("AIzaSyAICYHO0YSKGy43LCRInmPoAizzniq91Aw"),J.a.setLanguage("en"),J.a.setRegion("es"),J.a.enableDebug();var V=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.fromAddress(t).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;return console.log(n+" "+a),{lat:n,lng:a}})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function q(e){return Q.apply(this,arguments)}function Q(){return Q=Object(j.a)(l.a.mark((function e(t){var n,a,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:[],a=c.length>2&&void 0!==c[2]?c[2]:3,e.next=4,V(t);case 4:return r=e.sent,console.log(n),e.next=8,Promise.all(n.map(function(){var e=Object(j.a)(l.a.mark((function e(t,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t.address);case 2:return r=e.sent,console.log(r),n[a]=Object(d.a)(Object(d.a)({},t),{},{coordinate:r}),e.abrupt("return",Object(d.a)(Object(d.a)({},t),{},{coordinate:r}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",n.filter((function(e){return K(r,e.coordinate)<=a})));case 9:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function X(e){var t=Object(a.useState)([]),n=Object(x.a)(t,2),r=n[0],c=n[1],s=[];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,console.log(t),s=t,c(t);case 6:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=s.length){t.next=5;break}return t.next=3,z();case 3:s=t.sent,console.log(s);case 5:return t.t0=c,t.next=8,q(e.curLocation,s,3);case 8:t.t1=t.sent,(0,t.t0)(t.t1);case 10:case"end":return t.stop()}}),t)}))),[e.curLocation]),Object(S.jsx)(M,{isLoaded:!1,stores:r})}var Y,Z=n(45),H=n(13),W=n(104),$="GET_STORES",ee="GET_STORES_SUCCESS",te="GET_STORES_FAILURE",ne="ADD_STORE",ae="ADD_STORE_SUCCESS",re=(Object(W.a)((Y={},Object(H.a)(Y,$,(function(e){return Object(d.a)(Object(d.a)({},e),{},{loading:Object(d.a)(Object(d.a)({},e.loading),{},{GET_STORES:!0})})})),Object(H.a)(Y,ne,(function(e){return Object(d.a)(Object(d.a)({},e),{},{loading:Object(d.a)(Object(d.a)({},e.loading),{},{ADD_STORE:!0})})})),Object(H.a)(Y,ee,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{loading:Object(d.a)(Object(d.a)({},e.loading),{},{GET_STORES:!1}),stores:t.payload})})),Object(H.a)(Y,te,(function(e){return Object(d.a)(Object(d.a)({},e),{},{loading:Object(d.a)(Object(d.a)({},e.loading),{},{GET_STORES:!1})})})),Object(H.a)(Y,ae,(function(e){return{}})),Y),{loading:{GET_STORES:!1,ADD_STORE:!1},stores:[]}),Object(Z.a)((function(e){var t=e.storeReducer;return{stores:t.stores,isLoaded:t.loading.GET_STORES}}),{getStores:function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:$}),e.prev=1,e.next=4,z();case 4:n=e.sent,console.log(n),t({type:ee,payload:n}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),t({type:te,payload:e.t0,error:!0}),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getStores,n=e.isLoaded,r=e.stores;return Object(a.useEffect)((function(){t()}),[t]),Object(S.jsx)(M,{isLoaded:n,stores:r})})));n(99);function ce(){var e=Object(a.useState)(!1),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(x.a)(c,2),o=s[0],i=s[1];return Object(S.jsxs)("div",{className:"vertical",children:[Object(S.jsx)(_,{choose:function(e){r(!0),i(e)}}),n?Object(S.jsx)(X,{curLocation:o}):Object(S.jsx)(re,{})]})}var se=n(26);n(100);function oe(e){var t=e.store,n=Array.from({length:31},(function(e,t){return t+1+"\uc77c"})),r=parseInt(t.closeTime.slice(0,2)),c=parseInt(t.openTime.slice(0,2)),s=Array.from({length:r-c+1},(function(e,t){return c+t+"\uc2dc"})),o=Object(a.useState)(n),i=Object(x.a)(o,2),u=i[0],l=i[1];return Object(S.jsxs)("div",{className:"vertical",children:[Object(S.jsx)("img",{src:F}),Object(S.jsxs)("div",{className:"store-detail",children:[Object(S.jsxs)("div",{className:"name",children:["\uac00\uac8c \uc774\ub984:  ",t.name]}),Object(S.jsxs)("div",{className:"address margin-bottom",children:["\uc8fc\uc18c: ",t.address]}),Object(S.jsxs)("div",{className:"time margin-bottom",children:["\uc601\uc5c5\uc2dc\uac04: ",t.openTime," ~ ",t.closeTime]}),Object(S.jsxs)("div",{className:"header-count margin-bottom",children:["\uc608\uc57d \uac00\ub2a5\ud55c \uc778\uc6d0\uc218: ",t.headerCount]}),Object(S.jsx)("div",{className:"margin-bottom",children:"\ub0a0\uc9dc \uc120\ud0dd:"}),Object(S.jsxs)("div",{className:"horizontal",children:[Object(S.jsx)(C,{className:"margin-right",title:"\uc6d4 \uc120\ud0dd",data:["11\uc6d4","12\uc6d4"],changeValue:function(e){if(11==e){var t=Object(se.a)(u),n=(new Date).getDate();t=t.filter((function(e){return e>=n})),l(t)}}}),Object(S.jsx)(C,{title:"\ub0a0\uc9dc \uc120\ud0dd",data:u})]}),Object(S.jsx)("div",{className:"margin-bottom",children:"\uc2dc\uac04 \uc120\ud0dd:"}),Object(S.jsx)("div",{className:"horizontal",children:Object(S.jsx)(C,{title:"\uc2dc\uac04 \uc120\ud0dd",data:s})})]})]})}var ie=function(){return Object(a.useEffect)((function(){h({id:"student1",password:"s\u31451"})}),[]),Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(o.a,{basename:"/build-test",children:Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{exact:!0,path:"/",element:Object(S.jsx)(A,{})}),Object(S.jsx)(i.a,{exact:!0,path:"/SignUp/Owner",element:Object(S.jsx)(I,{})}),Object(S.jsx)(i.a,{exact:!0,path:"/SignUp/Student",element:Object(S.jsx)(y,{})}),Object(S.jsx)(i.a,{exact:!0,path:"/StoresPage",element:Object(S.jsx)(ce,{})}),Object(S.jsx)(i.a,{exact:!0,path:"/Reservation",element:Object(S.jsx)(oe,{})})]})})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(ie,{})}),document.getElementById("root")),ue()},68:function(e,t,n){},69:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.36a18f88.chunk.js.map