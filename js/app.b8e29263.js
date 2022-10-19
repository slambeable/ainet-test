(function(){"use strict";var e={6921:function(e,t,n){var r=n(9242),a=n(9422),l=(n(4415),n(3942),n(4143)),s=(n(7437),n(3396)),o=n(7139);function i(e,t,n,r,a,i){const u=l.Kf;return(0,s.wg)(),(0,s.j4)(u,{class:"footer-block"},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,o.zw)(`${e.currentYear} — `),1),(0,s._)("strong",null,(0,o.zw)(e.title),1)])),_:1})}var u=(0,s.aZ)({name:"FooterBlock",setup(){const e=(new Date).getFullYear(),t="Element Plus";return{currentYear:e,title:t}}}),c=n(89);const d=(0,c.Z)(u,[["render",i],["__scopeId","data-v-61089f0c"]]);var f=d,p=n(9740),v=(n(2591),n(1229)),b=(n(3163),n(3209)),m=(n(7644),n(9007),n(7919)),g=(n(6962),n(9119));n(7066);const w=["innerHTML"],h=["innerHTML"];function y(e,t,n,r,a,l){const i=g.vs,u=m.$t,c=b.$Y,d=b.eI,f=v.t;return(0,s.wy)(((0,s.wg)(),(0,s.j4)(d,{class:"user-table","element-loading-text":e.UserTableOptionsEnum.elementLoadingText,"element-loading-spinner":e.UserTableOptionsEnum.svg,"element-loading-svg-view-box":e.UserTableOptionsEnum.elementLoadingSvgViewBox,"element-loading-background":e.UserTableOptionsEnum.elementLoadingBackground,data:e.$store.state.users,"max-height":e.UserTableOptionsEnum.tableMaxHeight,style:(0,o.j5)({borderRadius:e.UserTableOptionsEnum.borderRadius})},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{label:e.UserTableOptionsEnum.header,width:e.UserTableOptionsEnum.tableColumnWidth},{default:(0,s.w5)((e=>[(0,s.Wm)(u,{effect:"light",trigger:"click",placement:"top",width:"auto"},{default:(0,s.w5)((()=>[(0,s._)("div",null,(0,o.zw)(e.row.address),1)])),reference:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"user-table__avatar",src:e.row.avatar},null,8,["src"])])),_:2},1024)])),_:1},8,["label","width"]),(0,s.Wm)(c,null,{default:(0,s.w5)((e=>[(0,s._)("div",{class:"table-title",innerHTML:e.row.title},null,8,w),(0,s._)("div",{class:"table-description",innerHTML:e.row.subtitle},null,8,h)])),_:1})])),_:1},8,["element-loading-text","element-loading-spinner","element-loading-svg-view-box","element-loading-background","data","max-height","style"])),[[f,e.isLoading]])}var _;(function(e){e["header"]="List",e["elementLoadingText"]="Loading...",e["elementLoadingSvgViewBox"]="-10, -10, 50, 50",e["elementLoadingBackground"]="var(--el-color-info-light-8)",e["borderRadius"]="var(--el-border-radius-base)",e[e["tableMaxHeight"]=410]="tableMaxHeight",e["tableColumnWidth"]="80",e["svg"]='\n    <path class="path" d="\n      M 30 15\n      L 28 17\n      M 25.61 25.61\n      A 15 15, 0, 0, 1, 15 30\n      A 15 15, 0, 1, 1, 27.99 7.5\n      L 15 15\n    " style="fill: transparent;"/>\n  '})(_||(_={}));var T=_,U=n(4870),O=n(65),k=(0,s.aZ)({name:"UserTable",setup(){const e=(0,O.oR)(),t=(0,U.iH)(!0),n=async e=>{e[0]?t.value=!1:t.value=!0};return(0,s.YP)((()=>e.state.users),n),{isLoading:t,UserTableOptionsEnum:T}}});const x=(0,c.Z)(k,[["render",y],["__scopeId","data-v-341e7f00"]]);var L=x,j=n(8807);n(8193),n(7654),n(7960);function W(e,t,n,r,a,l){const o=j.BT,i=j.LC,u=j.km;return(0,s.wg)(),(0,s.j4)(u,{class:"user-filter",modelValue:e.variant,"onUpdate:modelValue":t[0]||(t[0]=t=>e.variant=t),placeholder:e.placeholder,clearable:"",onClear:e.clearSelection},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.userSelectOptions,(e=>((0,s.wg)(),(0,s.j4)(i,{key:e.label,label:e.label},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.options,(e=>((0,s.wg)(),(0,s.j4)(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","placeholder","onClear"])}const E=[{label:"Filter by country",options:[{label:"russia",value:{value:"russia",type:"country"}},{label:"usa",type:"country",value:{value:"usa",type:"country"}}]},{label:"Filter by score",options:[{label:"> 20",type:"score",value:{value:"moreThanTwenty",type:"score"}},{label:"< 10",type:"score",value:{value:"lessThatTen",type:"score"}}]}];var H=E,Z=(0,s.aZ)({name:"ContentBlock",setup(){const e=(0,O.oR)(),t="Select filter option",n=(0,U.iH)(""),r=async()=>{await e.dispatch("fetchUsers")};return(0,s.YP)((()=>n.value),(async()=>{await e.dispatch("fetchUsers"),e.commit("filterUsers",n.value)})),{userSelectOptions:H,placeholder:t,variant:n,clearSelection:r}}});const M=(0,c.Z)(Z,[["render",W],["__scopeId","data-v-0451f3f9"]]);var B=M,C=n(6374),Y=(n(5088),n(4926));n(802);function F(e,t,r,a,l,o){const i=Y.F8,u=C.Q2,c=B,d=L,f=p.G4;return(0,s.wg)(),(0,s.j4)(u,{wrap:"",class:"content-block"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{direction:"vertical"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{wrap:"",fill:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"content-block__image",alt:"Element plus logo",src:n(6949)},null,8,["src"])])),_:1}),(0,s.Wm)(f,{direction:"vertical"},{default:(0,s.w5)((()=>[(0,s.Wm)(c),(0,s.Wm)(d)])),_:1})])),_:1})])),_:1})}var S=(0,s.aZ)({name:"ContentBlock",components:{UserTable:L,UserFilter:B}});const P=(0,c.Z)(S,[["render",F],["__scopeId","data-v-3a9ccbbf"]]);var R=P;function I(e,t,n,r,a,l){const o=R,i=f;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s.Wm)(i)],64)}var V=(0,s.aZ)({name:"App",components:{ContentBlock:R,FooterBlock:f},setup(){const e=(0,O.oR)();(0,s.bv)((async()=>{await e.dispatch("fetchUsers")}))}});const D=(0,c.Z)(V,[["render",I]]);var $=D,z=n(70),A={getUsers(){return z.Z.get("https://slambeable.github.io/ainet-test/users.json").then((e=>e.data))}},K=(0,O.MT)({state:{users:null},getters:{},mutations:{setUsers(e,t){e.users=t},filterUsers(e,t){if(!e.users)return;const{value:n,type:r}=t;"country"===r?e.users=e.users.filter((e=>{const t=r;return e[t]===n})):"score"===r&&(e.users=e.users.filter((e=>{const t=r;return"moreThanTwenty"===n?e[t]>20:"lessThatTen"===n&&e[t]<10})))},clearUsers(e){e.users=[]}},actions:{fetchUsers({commit:e}){return new Promise((t=>{e("clearUsers"),setTimeout((async()=>{const n=await A.getUsers();e("setUsers",n.users),t()}),1e3)}))}}});const G=(0,r.ri)($);G.use(K).use(a.Z),G.mount("#app")},6949:function(e,t,n){e.exports=n.p+"img/logo.d2a8687c.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,l){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],l=e[c][2];for(var o=!0,i=0;i<r.length;i++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(o=!1,l<s&&(s=l));if(o){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/ainet-test/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,l,s=r[0],o=r[1],i=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(i)var c=i(n)}for(t&&t(r);u<s.length;u++)l=s[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=self["webpackChunkvue_js_interview"]=self["webpackChunkvue_js_interview"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6921)}));r=n.O(r)})();
//# sourceMappingURL=app.b8e29263.js.map