(this["webpackJsonpprofile-picture-generator"]=this["webpackJsonpprofile-picture-generator"]||[]).push([[0],{37:function(e,t,n){},41:function(e,t,n){var a={"./ProfileFrame Blue Bars.png":[49,12],"./ProfileFrame Green Bars.png":[50,13],"./ProfileFrame Mixed Bars.png":[51,14],"./ProfileFrame Purple.png":[52,15],"./ProfileFrame Red Bars.png":[53,16],"./ProfileFrame White Bars.png":[54,17],"./ProfileFrame Yellow Bars.png":[55,18]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=41,e.exports=c},42:function(e,t,n){var a={"./DeineWahl.png":[56,19],"./Europa.png":[57,20],"./JetztBistDuDran.png":[58,21],"./Volt.png":[59,22],"./Volt21.png":[60,23],"./VoltEuropa.png":[61,24],"./VoltRLP.png":[62,25],"./VoteVolt.png":[63,26],"./paneurop\xe4isch.png":[64,27],"./pragmatisch.png":[65,28],"./progressiv.png":[66,29]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=42,e.exports=c},47:function(e,t,n){var a={"./de.ftl":[67,3],"./en.ftl":[68,4],"./es.ftl":[69,5],"./fr.ftl":[70,6],"./it.ftl":[71,7],"./nl.ftl":[72,8],"./pl.ftl":[73,9],"./ru.ftl":[74,10]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=47,e.exports=c},48:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(25),s=n.n(o),i=n(7),O=n(17),u=n(2),h=(n(37),n(30)),l=n(27),d=n(4),j=n.n(d),b=n(9);var f=function(e){var t=e.onChange,r=Object(c.useState)([]),o=Object(u.a)(r,2),s=o[0],i=o[1],O=Object(c.useState)(null),h=Object(u.a)(O,2),l=h[0],d=h[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(["ProfileFrame Purple","ProfileFrame Mixed Bars","ProfileFrame Yellow Bars","ProfileFrame Red Bars","ProfileFrame Blue Bars","ProfileFrame Green Bars","ProfileFrame White Bars"].map(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n(41)("./".concat(t,".png"));case 3:return e.t1=e.sent,e.abrupt("return",{name:e.t0,src:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){i(e),d(e[0].src.default)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var f=Object(c.useCallback)((function(e){d(e.target.dataset.src)}),[d]);return Object(c.useEffect)((function(){t(l)}),[t,l]),Object(a.jsx)("div",{className:"FrameChooser",children:s.map((function(e){var t=e.src.default,n=l===t;return Object(a.jsx)("div",{"data-src":t,className:n?"frame choosen":"frame",onClick:f,children:Object(a.jsx)("img",{alt:e.name,src:t})},t)}))})},p=n(16),g=n(10),x=function(e){return Object(a.jsx)(p.b,Object(i.a)(Object(i.a)({},e),{},{elems:Object(i.a)({br:Object(a.jsx)("br",{})},e.elems),children:Object(a.jsx)(r.a.Fragment,{children:e.children})}),e.id)};function v(e){return function(t){var n=r.a.useContext(g.a);return r.a.createElement(e,Object(i.a)({getString:function(e,t,a){return n.getString(e,t,a||" ")}},t))}}var D=v((function(e){var t=e.onChange,r=e.getString,o=Object(c.useState)([]),s=Object(u.a)(o,2),i=s[0],O=s[1],h=Object(c.useState)(null),l=Object(u.a)(h,2),d=l[0],f=l[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(["","VoteVolt","DeineWahl","JetztBistDuDran","VoltEuropa","VoltRLP","Volt21","Volt","paneurop\xe4isch","pragmatisch","progressiv","Europa"].map(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,""!==t){e.next=5;break}e.t1="",e.next=8;break;case 5:return e.next=7,n(42)("./".concat(t,".png"));case 7:e.t1=e.sent;case 8:return e.t2=e.t1,e.abrupt("return",{name:e.t0,src:e.t2});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){O(e),f(e[0].src.default)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=Object(c.useCallback)((function(e){f(e.target.dataset.src)}),[f]);return Object(c.useEffect)((function(){t(d)}),[t,d]),Object(a.jsx)("div",{className:"HashtagChooser",children:i.map((function(e){var t=e.src.default,n=d===t;return Object(a.jsx)("button",{"data-src":t,className:n?"hashtag_button choosen":"hashtag_button",onClick:p,children:""===e.name?r("button_no_hashtag"):"#"+e.name},e.name)}))})})),w=n(28),A=n.n(w),m=n(29),C=n.n(m);function Q(e,t,n){return Math.min(Math.max(t,e),n)}var H=function(e){var t=e.onChange,n=e.backgroundURL,r=e.backgroundRatio,o=e.frameURL,s=e.hashtagURL,i=Object(c.useRef)(null),O=Object(c.useRef)(null),h=Object(c.useState)(!1),l=Object(u.a)(h,2),d=l[0],j=l[1],b=Object(c.useState)(null),f=Object(u.a)(b,2),p=f[0],g=f[1],x=Object(c.useState)(null),v=Object(u.a)(x,2),D=v[0],w=v[1],m=Object(c.useState)(0),H=Object(u.a)(m,2),T=H[0],U=H[1],F=Object(c.useState)(0),N=Object(u.a)(F,2),k=N[0],E=N[1],K=Object(c.useState)(0),B=Object(u.a)(K,2),S=B[0],y=B[1],_=Object(c.useState)(0),P=Object(u.a)(_,2),L=P[0],R=P[1],M=Object(c.useState)(1),I=Object(u.a)(M,2),V=I[0],Y=I[1],z=Object(c.useState)(300),J=Object(u.a)(z,2),X=J[0],G=J[1],W=Object(c.useState)(300),q=Object(u.a)(W,2),Z=q[0],$=q[1],ee=Object(c.useState)(300),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(c.useState)(300),re=Object(u.a)(ce,2),oe=re[0],se=re[1],ie=Object(c.useState)(0),Oe=Object(u.a)(ie,2),ue=Oe[0],he=Oe[1],le=Object(c.useState)(0),de=Object(u.a)(le,2),je=de[0],be=de[1],fe=Object(c.useState)(0),pe=Object(u.a)(fe,2),ge=pe[0],xe=pe[1],ve=Object(c.useState)(0),De=Object(u.a)(ve,2),we=De[0],Ae=De[1];Object(c.useEffect)((function(){t&&t({x:T,y:k,scale:V})}),[t,T,k,V]),Object(c.useEffect)((function(){if(i&&i.current){var e=i.current.offsetWidth,t=i.current.offsetHeight;se(t),ae(e);var n=1,a=1;r<1?n=1/r:r>1&&(a=1*r),G(n),$(a)}}),[r]),Object(c.useEffect)((function(){var e=function(e,t,n,a,c){var r=Math.max(0,e*n-a)/2,o=Math.max(0,t*n-c)/2;return{rangeMaxX:r,rangeMinX:0-r,rangeMaxY:o,rangeMinY:0-o}}(X*ne,Z*oe,V,ne,oe),t=e.rangeMinX,n=e.rangeMinY,a=e.rangeMaxX,c=e.rangeMaxY;he(t),be(n),xe(a),Ae(c)}),[X,Z,ne,oe,V]),Object(c.useEffect)((function(){U(0),E(0),y(0),R(0),Y(1)}),[n]);var me=Object(c.useCallback)((function(e){var t=1*e.target.dataset.x,n=1*e.target.dataset.y,a=Q(t+e.deltaX,ue,ge),c=Q(n+e.deltaY,je,we);e.isFinal?(U(a||0),E(c||0),y(0),R(0)):(y(a-t||0),R(c-n||0))}),[ue,je,ge,we]),Ce=Object(c.useCallback)((function(e,t,n,a){e.preventDefault();var c=Q(1*e.target.dataset.scale+t/200,1,8);Y(c||1);var r=1*e.target.dataset.x,o=1*e.target.dataset.y;U(Q(r,ue,ge)||0),E(Q(o,je,we)||0)}),[ue,je,ge,we]);return Object(c.useEffect)((function(){if(!d&&i&&i.current){var e=i.current;e.addEventListener("mousedown",(function(e){e.preventDefault()}),!1),e.addEventListener("touchstart",(function(e){e.preventDefault()}),!1),e.addEventListener("touchend",(function(e){e.preventDefault()}),!1),e.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),g(new A.a(e,{direction:"DIRECTION_ALL"})),w(C()(e)),j(!0)}}),[i,d]),Object(c.useEffect)((function(){if(p&&D&&d&&i&&i.current)return p.on("pan",me),D.wheel(Ce),function(){p.off("pan",me),D.unwheel()}}),[i,me,Ce,d,p,D]),Object(a.jsxs)("div",{className:"Editor",ref:i,"data-x":T,"data-y":k,"data-scale":V,children:[Object(a.jsx)("img",{src:n,ref:O,alt:"",className:"background",style:{width:100*X+"%",height:100*Z+"%",transform:"translate3d(calc(-50% + ".concat(T+S,"px), calc(-50% + ").concat(k+L,"px), 0)  scale(").concat(V,",").concat(V,")")}}),Object(a.jsx)("img",{src:o,alt:"",className:"foreground"}),Object(a.jsx)("img",{src:s,alt:"",className:"hashtag"})]})},T=n.p+"static/media/VoltLogoPurple.1d7ea949.svg",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4AgMAAACRfoQcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURVIud1Iud1Eudgy0J+8AAAADdFJOU//+/Q3dsqEAAATsSURBVHgB7dAxAQAABAAwQtI/ipMCvi3CgiMV6NChQ4cOHTp06NChQ4cOHTp06NChAx06dOjQoUOHDh06dOjQoUOHDh06dOhAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOtChQ4cOHTp06NChQ4cOHTp06NChQ4cOdOjQoUOHDh06dOjQoUOHDh06dOjQoQMdOnTo0KFDhw4dOnTo0KFDhw4dOnToQIcOHTp06NChQ4cOHTp06NChQ4cOHejQoUOHDh06dOjQoUOHDh06dOjQoUMHOnTo0KFDhw4dOnTo0KFDhw4dOnTo0IEOHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06NChQIcOHTp06NChQ4cOHTp06NChQ4cOHejQoUOHDh06dOjQoUOHDh06dOjQoUMHOnTo0KFDhw4dOnTo0KFDhw4dOnTo0IEOHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06ECHDh06dOjQoUOHDh06dOjQoUOHDh060KFDhw4dOnTo0KFDhw4dOnTo0KFDhw506NChQ4cOHTp06NChQ4cOHTp06NChAx06dOjQoUOHDh06dOjQoUOHDh06dOhAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOtChQ4cOHTp06NChQ4cOHTp06NChQ4cOBTp06NChQ4cOHTp06NChQ4cOHTp06ECHDh06dOjQoUOHDh06dOjQoUOHDh060KFDhw4dOnTo0KFDhw4dOnTo0KFDhw506NChQ4cOHTp06NChQ4cOHTp06NChAx06dOjQoUOHDh06dOjQoUOHDh06dOhAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOtChQ4cOHTp06NChQ4cOHTp06NChQwc6dOjQoUOHDh06dOjQoUOHDh06dOjQgQ4dOnTo0KFDhw4dOnTo0KFDhw4dOnSgQ4cOHTp06NChQ4cOHTp06NChQ4cOHTx06NChQ4cOdOjQoUOHDh06dOjQoUOHDh06dOjQoQMdOnTo0KFDhw4dOnTo0KFDhw4dOnToQIcOHTp06NChQ4cOHTp06NChQ4cOHTrQoUOHDh06dOjQoUOHDh06dOjQoUOHDnTo0KFDhw4dOnTo0KFDhw4dOnTo0KEDHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06NCBDh06dOjQoUOHDh06dOjQoUOHDh06dKBDhw4dOnTo0KFDhw4dOnTo0KFDhw4d6NChQ4cOHTp06NChQ4cOHTp06NChQ4cCHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06NCBDh06dOjQoUOHDh06dOjQoUOHDh06dKBDhw4dOnTo0KFDhw4dOnTo0KFDhw4dxeoB30xd38yzCvgAAAAASUVORK5CYII=",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAALSURBVHgBY2BgAAAAAwABjPg5OgAAAABJRU5ErkJggg==",N=(n(43),n(5)),k=n(21),E=n(20),K=n(31),B={de:"Deutsch",en:"English",es:"Espa\xf1ol",fr:"Fran\xe7ais",it:"Italiano",nl:"Dutch",pl:"Polska",ru:"P\u0443\u0441\u0441\u043a\u0438\u0439"},S=Object.keys(B);function y(e){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(j.a.mark((function e(t){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(47)("./"+t+".ftl");case 2:return a=e.sent,e.next=5,fetch(a.default);case 5:return c=e.sent,e.next=8,c.text();case 8:return r=e.sent,e.abrupt("return",Object(k.a)({},t,new E.b(r)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return L.apply(this,arguments)}function L(){return(L=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(y));case 2:return n=e.sent,a=n.reduce((function(e,t){return Object.assign(e,t)})),e.abrupt("return",j.a.mark((function e(){var n,c,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(N.a)(t),e.prev=1,n.s();case 3:if((c=n.n()).done){e.next=11;break}return r=c.value,(o=new E.a(r)).addResource(a[r]),e.next=9,o;case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){var t=e.userLocales,n=e.children,r=e.onLocaleChange,o=Object(c.useState)(function(){var e=new E.a("");return e.addResource(new E.b("")),new p.c([e])}()),s=Object(u.a)(o,2),i=s[0],O=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(K.a)(t,S,{defaultLocale:"en"}),r&&r(n),e.next=4,P(n);case 4:a=e.sent,O(new p.c(a()));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,r]),i?Object(a.jsx)(p.a,{l10n:i,children:n}):Object(a.jsx)("div",{children:"Loading texts\u2026"})}var M=1080;var I=v((function(e){var t=e.getString,n=Object(c.useState)(null),r=Object(u.a)(n,2),o=r[0],s=r[1],d=Object(c.useState)(null),j=Object(u.a)(d,2),b=j[0],p=j[1],g=Object(c.useState)(null),v=Object(u.a)(g,2),w=v[0],A=v[1],m=Object(c.useState)(1),C=Object(u.a)(m,2),Q=C[0],N=C[1],k=Object(c.useState)(null),E=Object(u.a)(k,2),K=E[0],B=E[1],S=Object(c.useState)(0),y=Object(u.a)(S,2),_=y[0],P=y[1],L=Object(c.useState)(0),R=Object(u.a)(L,2),I=R[0],V=R[1],Y=Object(c.useState)({x:0,y:0,scale:1}),z=Object(u.a)(Y,2),J=z[0],X=z[1],G=Object(c.useCallback)((function(e){s(e)}),[s]),W=Object(c.useCallback)((function(e){p(e)}),[p]),q=Object(c.useCallback)((function(e){var t=e.x,n=e.y,a=e.scale;X({x:t,y:n,scale:a})}),[]),Z=Object(c.useCallback)((function(e){if(e){var t=new FileReader;t.onload=function(t){var n=new Image;n.onload=function(){var a,c;n.width<n.height?(c=n.height/n.width*M,a=M):(c=M,a=n.width/n.height*M),function(e,t){var n=new FileReader;n.onload=function(e){var n=new DataView(e.target.result);if(65496!==n.getUint16(0,!1))return t(-2);for(var a=n.byteLength,c=2;c<a;){var r=n.getUint16(c,!1);if(c+=2,65505===r){if(1165519206!==n.getUint32(c+=2,!1))return t(-1);var o=18761===n.getUint16(c+=6,!1);c+=n.getUint32(c+4,o);var s=n.getUint16(c,o);c+=2;for(var i=0;i<s;i++)if(274===n.getUint16(c+12*i,o))return t(n.getUint16(c+12*i+8,o))}else{if(65280!==(65280&r))break;c+=n.getUint16(c,!1)}}return t(-1)},n.readAsArrayBuffer(e.slice(0,65536))}(e,(function(e){var n=1;switch(e){case 2:case 3:case 4:n=c/a;break;case 5:case 6:case 7:case 8:n=a/c;break;default:n=c/a}P(a),V(c),A(t.target.result),B(e),N(n)}))},n.src=t.target.result},t.readAsDataURL(e)}}),[]),$=Object(c.useCallback)((function(e){Z(e.target.files[0])}),[Z]),ee=Object(c.useCallback)((function(e){Z(e[0])}),[Z]),te=Object(c.useCallback)((function(){var e=new Image;e.onload=function(){var t=document.createElement("canvas");t.width=M,t.height=M;var n=t.getContext("2d",{alpha:!0});switch(K){case 2:n.translate(t.width,0),n.scale(-1,1);break;case 3:n.translate(t.width,t.height),n.rotate(Math.PI);break;case 4:n.translate(0,t.height),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-t.height);break;case 7:n.rotate(.5*Math.PI),n.translate(t.width,-t.height),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-t.width,0)}var a=_*J.scale,c=I*J.scale;n.drawImage(e,3.5*J.x+.5*(M-a),3.5*J.y+.5*(M-c),a,c);var r=t.toDataURL();Object(l.a)([U].concat(Object(O.a)(r?[r]:[]),Object(O.a)(o?[o]:[]),Object(O.a)(b?[b]:[]))).then((function(e){!function(e,t){var n=document.createElement("a");document.body.appendChild(n),n.download=e,n.href=t,n.click(),n.remove()}("volt-profile-picture.png",e)}))},e.src=w}),[w,J.x,J.y,J.scale,K,o,b,I,_]),ne=Object(h.a)({onDrop:ee,accept:"image/*",maxFiles:1,noKeyboard:!0}),ae=ne.isDragActive,ce=ne.getRootProps;return Object(a.jsxs)("div",Object(i.a)(Object(i.a)({className:"App"},ce()),{},{children:[Object(a.jsx)("img",{src:T,className:"HeaderImage",alt:t("alt_volt_logo")}),Object(a.jsx)("h1",{children:Object(a.jsx)(x,{id:"title_profile_generator"})}),Object(a.jsx)("div",{className:ae?"droparea active":"droparea",children:Object(a.jsx)(x,{id:"title_drop_photo_here"})}),Object(a.jsx)("h2",{children:Object(a.jsx)(x,{id:"title_choose_photo"})}),Object(a.jsx)("p",{children:Object(a.jsx)(x,{id:"text_choose_photo_info"})}),Object(a.jsxs)("label",{className:"labelButton",tabIndex:"0",style:{outline:"none"},children:[w?Object(a.jsx)("img",{src:w,alt:"Preview"}):null,Object(a.jsx)("span",{children:t(w?"button_change_photo":"button_load_photo")}),Object(a.jsx)("input",{onChange:$,type:"file",accept:"image/*",style:{display:"none"}})]}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:Object(a.jsx)(x,{id:"title_choose_frame"})}),Object(a.jsx)(f,{onChange:G}),Object(a.jsx)("h2",{children:Object(a.jsx)(x,{id:"title_choose_hashtag"})}),Object(a.jsx)(D,{onChange:W})]}),w&&o&&W?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:Object(a.jsx)(x,{id:"title_reposition_photo"})}),Object(a.jsx)(H,{backgroundURL:w||F,backgroundRatio:Q,frameURL:o,hashtagURL:b||F,onChange:q}),Object(a.jsx)("button",{onClick:te,children:Object(a.jsx)(x,{id:"button_download"})})]}):null,Object(a.jsxs)("footer",{children:[Object(a.jsx)("a",{href:"https://www.voltdeutschland.org/impressum",children:Object(a.jsx)(x,{id:"link_imprint"})}),"\xa0 \u2022 \xa0",Object(a.jsx)("a",{href:"https://www.voltdeutschland.org/datenschutz",children:Object(a.jsx)(x,{id:"link_privacy_policy"})}),"\xa0 \u2022 \xa0",Object(a.jsx)("a",{href:"https://github.com/voltbonn/profile-picture-generator",children:Object(a.jsx)(x,{id:"link_source_code"})})]})]}))}));var V=v((function(){var e=Object(c.useState)(navigator.languages),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(null),s=Object(u.a)(o,2),i=s[0],O=s[1],h=Object(c.useCallback)((function(e){r([e.target.dataset.locale])}),[r]),l=Object(c.useCallback)((function(e){O(e.length>0?e[0]:"")}),[O]);return Object(a.jsx)(R,{userLocales:n,onLocaleChange:l,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{}),Object(a.jsx)("div",{className:"locale_chooser",children:Object.entries(B).map((function(e){var t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)("button",{className:n===i?"choosen":"","data-locale":n,onClick:h,children:c},n)}))})]})},"AppLocalizationProvider")})),Y=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),Y()}},[[48,1,2]]]);
//# sourceMappingURL=main.879aee49.chunk.js.map