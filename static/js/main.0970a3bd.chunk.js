(this["webpackJsonpprofile-picture-generator"]=this["webpackJsonpprofile-picture-generator"]||[]).push([[0],{17:function(e,t,r){},19:function(e,t,r){var n={"./ProfileFrame B&G Bars.png":[21,4],"./ProfileFrame Blue Bars.png":[22,5],"./ProfileFrame Green Bars.png":[23,6],"./ProfileFrame Mixed Bars.png":[24,7],"./ProfileFrame Purple.png":[25,8],"./ProfileFrame R&Y Bars.png":[26,9],"./ProfileFrame Red Bars.png":[27,10],"./ProfileFrame White Bars.png":[28,11],"./ProfileFrame Yellow Bars.png":[29,12]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r(a)}))}a.keys=function(){return Object.keys(n)},a.id=19,e.exports=a},20:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r.n(a),o=r(9),s=r.n(o),i=r(8),l=r(2),u=(r(17),r(10)),f=r.n(u),m=r(4),j=r.n(m),d=r(7);var p=function(e){var t=e.onFrameChange,c=Object(a.useState)([]),o=Object(l.a)(c,2),s=o[0],i=o[1],u=Object(a.useState)(null),f=Object(l.a)(u,2),m=f[0],p=f[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(["ProfileFrame Purple","ProfileFrame Yellow Bars","ProfileFrame Red Bars","ProfileFrame Blue Bars","ProfileFrame Green Bars","ProfileFrame White Bars","ProfileFrame Mixed Bars","ProfileFrame R&Y Bars","ProfileFrame B&G Bars"].map(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,r(19)("./".concat(t,".png"));case 3:return e.t1=e.sent,e.abrupt("return",{name:e.t0,src:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){console.log(e),i(e),p(e[0].src.default)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=Object(a.useCallback)((function(e){p(e.target.dataset.src)}),[p]);return Object(a.useEffect)((function(){t(m)}),[t,m]),Object(n.jsxs)("div",{className:"FrameChooser",children:[Object(n.jsx)("h2",{children:"Choose a frame:"}),s.map((function(e){var t=e.src.default,r=m===t;return Object(n.jsx)("img",{alt:e.name,"data-src":t,src:t,className:r?"frame choosen":"frame",onClick:b},t)}))]})},b=r.p+"static/media/HeaderImage.f98423dd.svg",h=r(11),g=1080;var O=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(null),s=Object(l.a)(o,2),u=s[0],m=s[1],j=Object(a.useState)(null),d=Object(l.a)(j,2),O=d[0],F=d[1],P=Object(a.useCallback)((function(e){c(e)}),[c]),v=Object(a.useCallback)((function(e){var t=new FileReader;t.onload=function(e){var t=new Image;t.onload=function(){var e=document.createElement("canvas");e.width=g,e.height=g;var r=e.getContext("2d",{alpha:!1}),n=t.height/t.width*g;r.drawImage(t,0,(g-n)/2,1080,n);var a=e.toDataURL();m(a)},t.src=e.target.result},t.readAsDataURL(e.target.files[0])}),[m]);return Object(a.useEffect)((function(){Object(h.a)([].concat(Object(i.a)(u?[u]:[]),Object(i.a)(r?[r]:[]))).then((function(e){return F(e)}))}),[u,r]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("img",{src:b,className:"HeaderImage",alt:"Volt Logo"}),Object(n.jsx)("h2",{children:"Choose your Photo:"}),Object(n.jsxs)("label",{className:"labelButton",tabIndex:"0",style:{outline:"none"},children:[u?Object(n.jsx)("img",{src:u,alt:"Preview"}):null,Object(n.jsx)("span",{children:"Load Photo"}),Object(n.jsx)("input",{onChange:v,type:"file",accept:"image/*",style:{display:"none"}})]}),Object(n.jsx)(p,{onFrameChange:P}),Object(n.jsx)("h2",{children:"Download your Photo:"}),Object(n.jsx)("img",{src:O,className:"FinishedFrame",alt:"Finished Frame"}),Object(n.jsx)("button",{onClick:function(){return f()(O,"volt-profile-picture.png","image/png")},children:"Download Profile Picture"})]})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,30)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),F()}},[[20,1,2]]]);
//# sourceMappingURL=main.0970a3bd.chunk.js.map