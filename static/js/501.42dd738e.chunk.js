"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[501],{9501:function(n,e,t){t.r(e),t.d(e,{default:function(){return Cn}});var a=t(9434),r=t(7689),i=t(1554),o=t(1999),s=t(8141),d=t(2716),c=t(501),l=t(4554),u=t(4942),p=t(3366),m=t(7462),v=t(2791),h=t(8182),x=t(4419),f=t(4036),Z=t(890),b=t(3840),g=t(2930),j=t(6934),y=t(5878),w=t(1217);function z(n){return(0,w.Z)("MuiInputAdornment",n)}var P,k,S,C,M=(0,y.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),W=t(1402),A=t(184),I=["children","className","component","disablePointerEvents","disableTypography","position","variant"],E=(0,j.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,f.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,m.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,u.Z)({},"&.".concat(M.positionStart,"&:not(.").concat(M.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),L=v.forwardRef((function(n,e){var t=(0,W.Z)({props:n,name:"MuiInputAdornment"}),a=t.children,r=t.className,i=t.component,o=void 0===i?"div":i,s=t.disablePointerEvents,d=void 0!==s&&s,c=t.disableTypography,l=void 0!==c&&c,u=t.position,j=t.variant,y=(0,p.Z)(t,I),w=(0,g.Z)()||{},k=j;j&&w.variant,w&&!k&&(k=w.variant);var S=(0,m.Z)({},t,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:d,position:u,variant:k}),C=function(n){var e=n.classes,t=n.disablePointerEvents,a=n.hiddenLabel,r=n.position,i=n.size,o=n.variant,s={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,f.Z)(r)),o,a&&"hiddenLabel",i&&"size".concat((0,f.Z)(i))]};return(0,x.Z)(s,z,e)}(S);return(0,A.jsx)(b.Z.Provider,{value:null,children:(0,A.jsx)(E,(0,m.Z)({as:o,ownerState:S,className:(0,h.Z)(C.root,r),ref:e},y,{children:"string"!==typeof a||l?(0,A.jsxs)(v.Fragment,{children:["start"===u?P||(P=(0,A.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,A.jsx)(Z.Z,{color:"text.secondary",children:a})}))})})),N=t(168),G=t(3736),R=t(1286),H=(0,j.ZP)(G.Z)(k||(k=(0,N.Z)(["\n  margin-top: 16px;\n  width: 100%;\n  border-radius: 5%;\n  background-color: rgba(232, 173, 255, 0.2);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1),\n             4px 4px 16px rgba(0,0,0,0.3);\n\n  &:hover {\n    background-color: rgba(230, 230, 230, 0.5);\n  }\n"]))),T=(0,j.ZP)(R.Z)(S||(S=(0,N.Z)(["\n  margin-top: 16px;\n  background-color: rgba(232, 173, 255, 0.2);\n"]))),V=function(){var n=(0,a.I0)(),e=(0,a.v9)(o.DI);return(0,A.jsxs)(l.Z,{sx:{width:"250px"},children:[(0,A.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target,r=t.target.elements,o=r.name,s=r.number,d=e.find((function(n){var e;return null!==(e=n.name===o.value)&&void 0!==e?e:n.number===s.value}));if(d)return alert("".concat(d.name," alredy have"));n((0,i.uK)({name:o.value,number:s.value})),a.reset()},children:[(0,A.jsx)(T,{required:!0,name:"name",label:"Name",fullWidth:!0,variant:"outlined",color:"secondary",size:"small",InputProps:{startAdornment:(0,A.jsx)(L,{position:"start",children:(0,A.jsx)(c.Z,{color:"primary"})}),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},children:"Name"}),(0,A.jsx)(T,{type:"tel",required:!0,name:"number",label:"Number",fullWidth:!0,variant:"outlined",color:"secondary",size:"small",InputProps:{startAdornment:(0,A.jsx)(L,{position:"start",children:(0,A.jsx)(d.Z,{color:"primary"})}),type:"tel",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},children:"Number"}),(0,A.jsx)(H,{size:"medium",type:"submit",children:(0,A.jsx)(s.Z,{})})]}),(0,A.jsx)(r.j3,{})]})},_=t(5447),D=t(1421),q=(0,j.ZP)(R.Z)(C||(C=(0,N.Z)(["\n  background-color: rgba(232, 173, 255, 0.3)\n"])));var B,F,O,J,$,K,Y,Q,U,X,nn,en,tn=function(){var n=(0,a.I0)(),e=(0,a.v9)(o.aT);return(0,A.jsx)(l.Z,{sx:{width:"250px"},children:(0,A.jsx)(q,{type:"text",name:"search",margin:"normal",fullWidth:!0,size:"small",label:"Seacr Contact",color:"secondary",value:e,onChange:function(e){var t=e.target.value;n((0,_.xO)(t))},InputProps:{startAdornment:(0,A.jsx)(L,{position:"start",children:(0,A.jsx)(D.Z,{color:"primary"})})}})})},an=t(644),rn=t(9332),on=t(4918),sn=t(7247),dn=t(7474),cn=t(4729),ln=(0,j.ZP)(cn.Z)(B||(B=(0,N.Z)(["\n  border-radius: 10px;\n  padding: 10px 20px;\n  min-width: 100px;\n  max-width: 250px;\n  align-items: center;\n  box-shadow: inset 0 4px 4px rgba(0,0,0,0.1),\n             4px 4px 16px rgba(0,0,0,0.3);\n\n"]))),un=(0,j.ZP)(Z.Z)(F||(F=(0,N.Z)(["\n  display: flex; \n  align-items: center;\n"]))),pn=(0,j.ZP)(G.Z)(O||(O=(0,N.Z)(["\n  padding: 0;\n  margin-left: 85px;\n"]))),mn=(0,j.ZP)(G.Z)(J||(J=(0,N.Z)(["\n  padding: 0;\n  margin-left: 0;\n"]))),vn=(0,j.ZP)(l.Z)($||($=(0,N.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),hn=(0,j.ZP)(l.Z)(K||(K=(0,N.Z)(["\n  padding: 0;\n"]))),xn=function(){var n=(0,a.I0)(),e=(0,a.v9)(o.DI),t=(0,a.v9)(o.vZ);(0,v.useEffect)((function(){n((0,i.yF)())}),[n,t]);var r=e.map((function(t){var a=t.id,r=t.name,o=t.number;return(0,A.jsxs)(ln,{component:"li",flexGrow:2,container:!0,rowSpacing:-5,spacing:4,children:[(0,A.jsxs)(vn,{children:[(0,A.jsx)(mn,{type:"button",onClick:function(){return function(e){return n((0,i.zY)(e))}(a)},children:(0,A.jsx)(sn.Z,{})}),(0,A.jsx)(pn,{type:"button",onClick:function(){return function(t){var a=e.find((function(n){return n.id===t}));n((0,an.m)(a))}(a)},children:(0,A.jsx)(dn.Z,{})})]}),(0,A.jsxs)(un,{variant:"subtitle1",sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(rn.Z,{color:"primary"}),r]}),(0,A.jsxs)(un,{variant:"subtitle1",sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(on.Z,{color:"primary"}),o]})]},a)}));return(0,A.jsxs)(hn,{component:"ul",children:[e.length<1&&(0,A.jsx)(un,{variant:"h6",sx:{ml:5},children:"Haven't any contact..."})," ",r]})},fn=t(4164),Zn=t(3329),bn=t(225),gn=bn.Z.div(Y||(Y=(0,N.Z)(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.1);\n    top: 0;\n    left: 0;\n"]))),jn=bn.Z.form(Q||(Q=(0,N.Z)([" \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px;\n    border: 2px solid rgb(181, 170, 242);\n    border-radius: 10px;\n    background-image: url(../../images/dark_background_white_note_pen.jpg);\n    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),\n             0.3em 0.3em 1em rgba(0,0,0,0.3);\n"]))),yn=bn.Z.div(U||(U=(0,N.Z)(["\n    margin-top: 5px;\n    width: 200px;\n\n    &:first-of-type{\n        margin-top: 0;\n    }\n"]))),wn=bn.Z.input(X||(X=(0,N.Z)(["\n    width: 200px;\n    height: 25px;\n    border-radius: 8px;\n    border-color: whitesmoke;\n"]))),zn=function(){var n=document.getElementById("popup-root"),e=(0,a.I0)(),t=(0,a.v9)(o.vZ);(0,v.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}));var r=function(){e((0,an.m)(null))},s=function(n){"Escape"===n.code&&r()};return(0,fn.createPortal)((0,A.jsx)(gn,{onClick:function(n){n.currentTarget===n.target&&r()},children:(0,A.jsxs)(jn,{onSubmit:function(n){n.preventDefault();var a=n.target;e((0,i._n)(t.id),{name:t.name,number:t.number}),r(),a.reset()},children:[(0,A.jsx)(yn,{children:(0,A.jsxs)("label",{children:[(0,A.jsx)(Z.Z,{variant:"overline",children:"Name"}),(0,A.jsx)(wn,{type:"text",name:"name",onChange:function(n){return e((0,an.m)({id:t.id,name:n.target.value,number:t.number}))},value:t.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),(0,A.jsx)(yn,{children:(0,A.jsxs)("label",{children:[(0,A.jsx)(Z.Z,{variant:"overline",children:"Number"}),(0,A.jsx)(wn,{type:"tel",name:"number",onChange:function(n){return e((0,an.m)({id:t.id,name:t.name,number:n.target.value}))},value:t.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),(0,A.jsx)(G.Z,{type:"submit",size:"small",color:"primary",startIcon:(0,A.jsx)(Zn.Z,{}),variant:"contained",sx:{mt:2},children:"Save Contact"})]})}),n)},Pn=t(9164),kn=(0,j.ZP)(Pn.Z)(nn||(nn=(0,N.Z)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n"]))),Sn=(0,j.ZP)(cn.Z)(en||(en=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n"]))),Cn=function(){var n=(0,a.v9)(o.h3),e=(0,a.v9)(o.vZ),t=(0,a.v9)(o.y0).loading;return(0,A.jsxs)(kn,{sx:{flexGrow:1},children:[(0,A.jsx)(V,{}),(0,A.jsxs)(Sn,{children:[(0,A.jsx)(tn,{}),(0,A.jsx)(xn,{})]}),e?null:t&&(0,A.jsx)(Z.Z,{variant:"h6",sx:{ml:5},children:"...Loading"}),e?(0,A.jsx)(zn,{}):n]})}},9332:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");e.Z=o},8141:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");e.Z=o},7247:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o},7474:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=o},501:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.Z=o},1421:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)([(0,i.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,i.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");e.Z=o},2716:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");e.Z=o},4918:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"}),"PhoneInTalk");e.Z=o},3329:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),o=(0,r.default)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");e.Z=o},9164:function(n,e,t){t.d(e,{Z:function(){return z}});var a=t(4942),r=t(3366),i=t(7462),o=t(2791),s=t(8182),d=t(7312),c=t(1217),l=t(4419),u=t(7078),p=t(3457),m=t(5080),v=t(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),f=(0,p.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["maxWidth".concat((0,d.Z)(String(t.maxWidth)))],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),Z=function(n){return(0,u.Z)({props:n,name:"MuiContainer",defaultTheme:x})},b=function(n,e){var t=n.classes,a=n.fixed,r=n.disableGutters,i=n.maxWidth,o={root:["root",i&&"maxWidth".concat((0,d.Z)(String(i))),a&&"fixed",r&&"disableGutters"]};return(0,l.Z)(o,(function(n){return(0,c.Z)(e,n)}),t)};var g=t(4036),j=t(6934),y=t(1402),w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.createStyledComponent,t=void 0===e?f:e,d=n.useThemeProps,c=void 0===d?Z:d,l=n.componentName,u=void 0===l?"MuiContainer":l,p=t((function(n){var e=n.theme,t=n.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,a.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(n){var e=n.theme;return n.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(n,t){var a=t,r=e.breakpoints.values[a];return 0!==r&&(n[e.breakpoints.up(a)]={maxWidth:"".concat(r).concat(e.breakpoints.unit)}),n}),{})}),(function(n){var e=n.theme,t=n.ownerState;return(0,i.Z)({},"xs"===t.maxWidth&&(0,a.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,a.Z)({},e.breakpoints.up(t.maxWidth),{maxWidth:"".concat(e.breakpoints.values[t.maxWidth]).concat(e.breakpoints.unit)}))})),m=o.forwardRef((function(n,e){var t=c(n),a=t.className,o=t.component,d=void 0===o?"div":o,l=t.disableGutters,m=void 0!==l&&l,x=t.fixed,f=void 0!==x&&x,Z=t.maxWidth,g=void 0===Z?"lg":Z,j=(0,r.Z)(t,h),y=(0,i.Z)({},t,{component:d,disableGutters:m,fixed:f,maxWidth:g}),w=b(y,u);return(0,v.jsx)(p,(0,i.Z)({as:d,ownerState:y,className:(0,s.Z)(w.root,a),ref:e},j))}));return m}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["maxWidth".concat((0,g.Z)(String(t.maxWidth)))],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),useThemeProps:function(n){return(0,y.Z)({props:n,name:"MuiContainer"})}}),z=w}}]);
//# sourceMappingURL=501.42dd738e.chunk.js.map