(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,n){e.exports={handleHome:function(){window.location="/"},handleLeaderboard:function(){window.location="/leaderboard"}}},36:function(e,n,t){},37:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),s=t.n(a),o=t(27),i=t.n(o),r=(t(36),t(37),t(29)),l=t(2),d=t(14),j=t.n(d),u=t(28),b=t(8),h=t(10),x=t.n(h),O=t(15),m=t.n(O);var v=function(){var e=Object(a.useState)({}),n=Object(b.a)(e,2),t=n[0],s=n[1],o=Object(a.useState)({}),i=Object(b.a)(o,2),r=i[0],l=i[1],d=Object(a.useState)(""),h=Object(b.a)(d,2),O=h[0],v=h[1],f=Object(a.useState)(""),w=Object(b.a)(f,2),p=w[0],g=w[1],k=Object(a.useState)(!1),N=Object(b.a)(k,2),y=N[0],C=N[1],B=Object(a.useState)(!1),S=Object(b.a)(B,2),L=S[0],_=S[1],I=Object(a.useState)(!1),E=Object(b.a)(I,2),M=E[0],T=E[1];Object(a.useEffect)((function(){F()}),[]);var A=function(e){C(!0),_(!1);var n,c,a=e.target.value;n=0==a?t:r,c=0==a?r:t;var o={};o.w_id=n._id,o.w_name=n.name,o.l_id=c._id,o.l_name=c.name,m()({method:"post",url:window.location.origin+"/api/vote",data:o}).then((function(e){v(e.data),_(!0),s({}),l({})})).catch((function(e){console.log(e)}))},F=function(){C(!1),fetch(window.location.origin+"/api/").then(function(){var e=Object(u.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).then((function(e){e&&(s(e[0]),l(e[1]))}))},H=function(){M?document.body.style.overflowY="scroll":document.body.style.overflow="hidden",T(!M)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"fold",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"navContainer",children:[Object(c.jsx)("button",{className:"neuNav",onClick:x.a.handleHome,children:"home"}),Object(c.jsx)("button",{className:"neuNav",onClick:x.a.handleLeaderboard,children:"leaderboard"})]})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"buttonContainer",children:[Object(c.jsx)("div",{className:y?"neuModal fadeIn":"neuModal fadeOut",children:L?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:O}),Object(c.jsx)("button",{className:"neuButtonSecondary",onClick:F,children:"next"})]}):Object(c.jsx)("div",{className:"loaderContainer",children:Object(c.jsx)("div",{className:"loader"})})}),Object(c.jsx)("button",{className:y?"neuButton fadeOut":"neuButton fadeIn",value:"0",onClick:A,children:t.name}),Object(c.jsx)("button",{className:y?"neuButton fadeOut":"neuButton fadeIn",value:"1",onClick:A,children:r.name})]}),Object(c.jsx)("a",{href:"#newThing",className:"neuLink",children:Object(c.jsx)("svg",{height:"30",viewBox:"0 0 21 21",width:"30",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{fill:"none","fill-rule":"evenodd",stroke:"#2a2e3b","stroke-linecap":"round","stroke-linejoin":"round",transform:"translate(6 4)",children:[Object(c.jsx)("path",{d:"m7.328 6.67.001 5.658-5.658-.001",transform:"matrix(-.70710678 .70710678 .70710678 .70710678 .965201 -.399799)"}),Object(c.jsx)("path",{d:"m4.5.5v13"})]})})}),Object(c.jsx)("a",{className:"neuLink help",onClick:H,children:Object(c.jsx)("svg",{height:"30",viewBox:"0 0 21 21",width:"30",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(2 2)",children:[Object(c.jsx)("circle",{cx:"8.5",cy:"8.5",r:"8",stroke:"#2a2e3b","stroke-linecap":"round","stroke-linejoin":"round"}),Object(c.jsx)("path",{d:"m8.5 9.5v-1l1.41421356-1.41421356c.37507274-.37507276.58578644-.88378059.58578644-1.41421356v-.17157288c0-.61286606-.3462631-1.17313156-.89442719-1.4472136l-.21114562-.1055728c-.56305498-.2815275-1.2257994-.2815275-1.78885438 0l-.10557281.0527864c-.61286606.30643303-1 .9328289-1 1.61803399v.88196601",stroke:"#2a2e3b","stroke-linecap":"round","stroke-linejoin":"round"}),Object(c.jsx)("circle",{cx:"8.5",cy:"12.5",fill:"#2a2e3b",r:"1"})]})})})]})]}),Object(c.jsxs)("div",{className:"formContainer",children:[Object(c.jsx)("h2",{children:"add new thing"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m()({method:"post",url:window.location.origin+"/api/new",data:{name:p}}).then((function(e){console.log(e),g("")})).catch((function(e){console.log(e)}))},children:[Object(c.jsx)("a",{name:"newThing"}),Object(c.jsx)("label",{for:"name",children:"name"}),Object(c.jsx)("input",{name:"name",type:"text",placeholder:"test",className:"neuInput",required:!0,onChange:function(e){g(e.target.value)},value:p}),Object(c.jsx)("button",{className:"neuSubmit",children:"submit"})]}),Object(c.jsx)("a",{className:"neuLinkBlu",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 21 21",children:Object(c.jsxs)("g",{fill:"none","fill-rule":"evenodd",stroke:"#2A2E3B","stroke-linecap":"round","stroke-linejoin":"round",transform:"translate(6 3)",children:[Object(c.jsx)("polyline",{points:"7.324 1.661 7.324 7.318 1.647 7.339",transform:"scale(1 -1) rotate(45 15.35 0)"}),Object(c.jsx)("line",{x1:"4.5",x2:"4.5",y1:".5",y2:"13.5"})]})})})]}),M&&Object(c.jsx)("div",{className:"backdrop",children:Object(c.jsxs)("div",{className:"neuModal",children:[Object(c.jsx)("div",{children:"Vote on which thing you think is the worst. Add your own things into the mix and let it be voted on."}),Object(c.jsx)("button",{className:"neuButtonSecondary",onClick:H,children:"next"})]})})]})};var f=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"fold",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"navContainer",children:[Object(c.jsx)("button",{className:"neuNav",onClick:x.a.handleHome,children:"home"}),Object(c.jsx)("button",{className:"neuNav",onClick:x.a.handleLeaderboard,children:"leaderboard"})]})}),Object(c.jsx)("div",{className:"content",children:"work in progress"})]})})};var w=function(){return Object(c.jsx)(r.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{})}),Object(c.jsx)(l.a,{path:"/leaderboard",children:Object(c.jsx)(f,{})})]})})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.5eaf8ac7.chunk.js.map