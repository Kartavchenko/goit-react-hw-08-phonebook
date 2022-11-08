"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[952],{7952:function(n,r,e){e.d(r,{Z:function(){return z}});var i=e(885),a=e(2982),o=e(4695),t=e(916),c=e(2791),u=e(8182),l=e(4419),s=e(1217),d=e(3457),p=e(7078),f=e(886),v=e(8519),g=e(5080),m=function(n,r,e){var i=n.keys[0];if(Array.isArray(r))r.forEach((function(r,i){e((function(r,e){i<=n.keys.length-1&&(0===i?Object.assign(r,e):r[n.up(n.keys[i])]=e)}),r)}));else if(r&&"object"===typeof r){(Object.keys(r).length>n.keys.length?n.keys:Object.keys(r)).forEach((function(a){if(-1!==n.keys.indexOf(a)){var o=r[a];void 0!==o&&e((function(r,e){i===a?Object.assign(r,e):r[n.up(a)]=e}),o)}}))}else"number"!==typeof r&&"string"!==typeof r||e((function(n,r){Object.assign(n,r)}),r)},w=function(n){var r=n.theme,e=n.ownerState,i={};return m(r.breakpoints,e.gridSize,(function(n,r){var a={};!0===r&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===r&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof r&&(a={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(r," / var(--Grid-columns)").concat(e.nested&&e.container?" + var(--Grid-columnSpacing)":"",")")}),n(i,a)})),i},S=function(n){var r=n.theme,e=n.ownerState,i={};return m(r.breakpoints,e.gridOffset,(function(n,r){var e={};"auto"===r&&(e={marginLeft:"auto"}),"number"===typeof r&&(e={marginLeft:0===r?"0px":"calc(100% * ".concat(r," / var(--Grid-columns))")}),n(i,e)})),i},b=function(n){var r=n.theme,e=n.ownerState;if(!e.container)return{};var i={"--Grid-columns":12};return m(r.breakpoints,e.columns,(function(n,r){n(i,{"--Grid-columns":r})})),i},h=function(n){var r=n.theme,e=n.ownerState;if(!e.container)return{};var i={};return m(r.breakpoints,e.rowSpacing,(function(n,e){var a;n(i,{"--Grid-rowSpacing":"string"===typeof e?e:null==(a=r.spacing)?void 0:a.call(r,e)})})),i},x=function(n){var r=n.theme,e=n.ownerState;if(!e.container)return{};var i={};return m(r.breakpoints,e.columnSpacing,(function(n,e){var a;n(i,{"--Grid-columnSpacing":"string"===typeof e?e:null==(a=r.spacing)?void 0:a.call(r,e)})})),i},G=function(n){var r=n.theme,e=n.ownerState;if(!e.container)return{};var i={};return m(r.breakpoints,e.direction,(function(n,r){n(i,{flexDirection:r})})),i},y=function(n){var r=n.ownerState;return(0,o.Z)({minWidth:0,boxSizing:"border-box"},r.container?(0,o.Z)({display:"flex",flexWrap:"wrap"},r.wrap&&"wrap"!==r.wrap&&{flexWrap:r.wrap},{margin:"calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2)"},r.disableEqualOverflow&&{margin:"calc(var(--Grid-rowSpacing) * -1) 0px 0px calc(var(--Grid-columnSpacing) * -1)"},r.nested?(0,o.Z)({padding:"calc(var(--Grid-nested-rowSpacing) / 2) calc(var(--Grid-nested-columnSpacing) / 2)"},(r.disableEqualOverflow||r.parentDisableEqualOverflow)&&{padding:"calc(var(--Grid-nested-rowSpacing)) 0px 0px calc(var(--Grid-nested-columnSpacing))"}):{"--Grid-nested-rowSpacing":"var(--Grid-rowSpacing)","--Grid-nested-columnSpacing":"var(--Grid-columnSpacing)"}):(0,o.Z)({padding:"calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2)"},r.disableEqualOverflow&&{padding:"calc(var(--Grid-rowSpacing)) 0px 0px calc(var(--Grid-columnSpacing))"}))},k=function(n){var r=[];return Object.entries(n).forEach((function(n){var e=(0,i.Z)(n,2),a=e[0],o=e[1];!1!==o&&void 0!==o&&r.push("grid-".concat(a,"-").concat(String(o)))})),r},Z=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function e(n){return void 0!==n&&("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n&&n>0)}if(e(n))return["spacing-".concat(r,"-").concat(String(n))];if("object"===typeof n&&!Array.isArray(n)){var a=[];return Object.entries(n).forEach((function(n){var r=(0,i.Z)(n,2),o=r[0],t=r[1];e(t)&&a.push("spacing-".concat(o,"-").concat(String(t)))})),a}return[]},O=function(n){return void 0===n?[]:"object"===typeof n?Object.entries(n).map((function(n){var r=(0,i.Z)(n,2),e=r[0],a=r[1];return"direction-".concat(e,"-").concat(a)})):["direction-xs-".concat(String(n))]},j=e(184),E=["className","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow"],q=(0,g.Z)(),N=(0,d.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){return r.root}});function C(n){return(0,p.Z)({props:n,name:"MuiGrid",defaultTheme:q})}var M=e(277),P=e(5513),W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.createStyledComponent,e=void 0===r?N:r,d=n.useThemeProps,p=void 0===d?C:d,g=n.componentName,m=void 0===g?"MuiGrid":g,q=c.createContext(!1),M=c.createContext(void 0),P=function(n,r){var e=n.container,i=n.direction,o=n.spacing,t=n.wrap,c=n.gridSize,u={root:["root",e&&"container","wrap"!==t&&"wrap-xs-".concat(String(t))].concat((0,a.Z)(O(i)),(0,a.Z)(k(c)),(0,a.Z)(e?Z(o,r.breakpoints.keys[0]):[]))};return(0,l.Z)(u,(function(n){return(0,s.Z)(m,n)}),{})},W=e(b,x,h,w,G,y,S),z=c.forwardRef((function(n,r){var e,a,l,s,d,g,m,w,S=(0,f.Z)(),b=p(n),h=(0,v.Z)(b),x=c.useContext(q),G=c.useContext(M),y=h.className,k=h.columns,Z=void 0===k?12:k,O=h.container,N=void 0!==O&&O,C=h.component,z=void 0===C?"div":C,A=h.direction,R=void 0===A?"row":A,_=h.wrap,B=void 0===_?"wrap":_,D=h.spacing,T=void 0===D?0:D,L=h.rowSpacing,F=void 0===L?T:L,H=h.columnSpacing,I=void 0===H?T:H,J=h.disableEqualOverflow,K=(0,t.Z)(h,E),Q=J;x&&void 0!==J&&(Q=n.disableEqualOverflow);var U={},V={},X={};Object.entries(K).forEach((function(n){var r=(0,i.Z)(n,2),e=r[0],a=r[1];void 0!==S.breakpoints.values[e]?U[e]=a:void 0!==S.breakpoints.values[e.replace("Offset","")]?V[e.replace("Offset","")]=a:X[e]=a}));var Y=null!=(e=n.columns)?e:x?void 0:Z,$=null!=(a=n.spacing)?a:x?void 0:T,nn=null!=(l=null!=(s=n.rowSpacing)?s:n.spacing)?l:x?void 0:F,rn=null!=(d=null!=(g=n.columnSpacing)?g:n.spacing)?d:x?void 0:I,en=(0,o.Z)({},h,{nested:x,columns:Y,container:N,direction:R,wrap:B,spacing:$,rowSpacing:nn,columnSpacing:rn,gridSize:U,gridOffset:V,disableEqualOverflow:null!=(m=null!=(w=Q)?w:G)&&m,parentDisableEqualOverflow:G}),an=P(en,S),on=(0,j.jsx)(W,(0,o.Z)({ref:r,as:z,ownerState:en,className:(0,u.Z)(an.root,y)},X));return x||(on=(0,j.jsx)(q.Provider,{value:!0,children:on})),void 0!==Q&&Q!==(null!=G&&G)&&(on=(0,j.jsx)(M.Provider,{value:Q,children:on})),on}));return z}({createStyledComponent:(0,M.ZP)("div",{name:"MuiGrid2",overridesResolver:function(n,r){return r.root}}),componentName:"MuiGrid2",useThemeProps:function(n){return(0,P.Z)({props:n,name:"MuiGrid2"})}}),z=W}}]);
//# sourceMappingURL=952.ff1b00d0.chunk.js.map