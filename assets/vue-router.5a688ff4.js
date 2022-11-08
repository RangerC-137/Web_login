import{s as Xe,z as G,u as F,i as $,$ as Te,n as Ze,I as je,ae as Be,y as ce,b as Je,d as et}from"./@vue.d8b45234.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const L=typeof window<"u";function tt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const C=Object.assign;function ae(e,t){const n={};for(const r in t){const c=t[r];n[r]=N(c)?c.map(e):e(c)}return n}const W=()=>{},N=Array.isArray;function ie(e,t,n="/"){let r,c={},u="",m="";const g=t.indexOf("#");let l=t.indexOf("?");return g<l&&g>=0&&(l=-1),l>-1&&(r=t.slice(0,l),u=t.slice(l+1,g>-1?g:t.length),c=e(u)),g>-1&&(r=r||t.slice(0,g),m=t.slice(g,t.length)),r=ot(r!=null?r:t,n),{fullPath:r+(u&&"?")+u+m,path:r,query:c,hash:m}}function nt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function rt(e,t,n){const r=t.matched.length-1,c=n.matched.length-1;return r>-1&&r===c&&K(t.matched[r],n.matched[c])&&ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function K(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!st(e[n],t[n]))return!1;return!0}function st(e,t){return N(e)?Ee(e,t):N(t)?Ee(t,e):e===t}function Ee(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ot(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let c=n.length-1,u,m;for(u=0;u<r.length;u++)if(m=r[u],m!==".")if(m==="..")c>1&&c--;else break;return n.slice(0,c).join("/")+"/"+r.slice(u-(u===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Pe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Pe||(Pe={}));function ct(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const at=()=>({left:window.pageXOffset,top:window.pageYOffset});function it(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),c=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!c)return;t=ct(c,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function be(e,t){return(history.state?history.state.position-t:-1)+e}const ue=new Map;function lt(e,t){ue.set(e,t)}function ut(e){const t=ue.get(e);return ue.delete(e),t}function ft(e){return typeof e=="string"||e&&typeof e=="object"}function qe(e){return typeof e=="string"||typeof e=="symbol"}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ge=Symbol("");var ke;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ke||(ke={}));function V(e,t){return C(new Error,{type:e,[Ge]:!0},t)}function T(e,t){return e instanceof Error&&Ge in e&&(t==null||!!(e.type&t))}const Ce="[^/]+?",ht={sensitive:!1,strict:!1,start:!0,end:!0},dt=/[.+*?^${}()[\]/\\]/g;function pt(e,t){const n=C({},ht,t),r=[];let c=n.start?"^":"";const u=[];for(const i of e){const o=i.length?[]:[90];n.strict&&!i.length&&(c+="/");for(let a=0;a<i.length;a++){const h=i[a];let y=40+(n.sensitive?.25:0);if(h.type===0)a||(c+="/"),c+=h.value.replace(dt,"\\$&"),y+=40;else if(h.type===1){const{value:b,repeatable:_,optional:A,regexp:E}=h;u.push({name:b,repeatable:_,optional:A});const P=E||Ce;if(P!==Ce){y+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${b}" (${P}): `+M.message)}}let O=_?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(O=A&&i.length<2?`(?:/${O})`:"/"+O),A&&(O+="?"),c+=O,y+=20,A&&(y+=-8),_&&(y+=-20),P===".*"&&(y+=-50)}o.push(y)}r.push(o)}if(n.strict&&n.end){const i=r.length-1;r[i][r[i].length-1]+=.7000000000000001}n.strict||(c+="/?"),n.end?c+="$":n.strict&&(c+="(?:/|$)");const m=new RegExp(c,n.sensitive?"":"i");function g(i){const o=i.match(m),a={};if(!o)return null;for(let h=1;h<o.length;h++){const y=o[h]||"",b=u[h-1];a[b.name]=y&&b.repeatable?y.split("/"):y}return a}function l(i){let o="",a=!1;for(const h of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const y of h)if(y.type===0)o+=y.value;else if(y.type===1){const{value:b,repeatable:_,optional:A}=y,E=b in i?i[b]:"";if(N(E)&&!_)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const P=N(E)?E.join("/"):E;if(!P)if(A)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${b}"`);o+=P}}return o||"/"}return{re:m,score:r,keys:u,parse:g,stringify:l}}function mt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function gt(e,t){let n=0;const r=e.score,c=t.score;for(;n<r.length&&n<c.length;){const u=mt(r[n],c[n]);if(u)return u;n++}if(Math.abs(c.length-r.length)===1){if(Se(r))return 1;if(Se(c))return-1}return c.length-r.length}function Se(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const yt={type:0,value:""},vt=/[a-zA-Z0-9_]/;function Rt(e){if(!e)return[[]];if(e==="/")return[[yt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${i}": ${y}`)}let n=0,r=n;const c=[];let u;function m(){u&&c.push(u),u=[]}let g=0,l,i="",o="";function a(){!i||(n===0?u.push({type:0,value:i}):n===1||n===2||n===3?(u.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:i,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),i="")}function h(){i+=l}for(;g<e.length;){if(l=e[g++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(i&&a(),m()):l===":"?(a(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:vt.test(l)?h():(a(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&g--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:n=3:o+=l;break;case 3:a(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&g--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${i}"`),a(),m(),c}function Et(e,t,n){const r=pt(Rt(e.path),n),c=C(r,{record:e,parent:t,children:[],alias:[]});return t&&!c.record.aliasOf==!t.record.aliasOf&&t.children.push(c),c}function Pt(e,t){const n=[],r=new Map;t=_e({strict:!1,end:!0,sensitive:!1},t);function c(o){return r.get(o)}function u(o,a,h){const y=!h,b=bt(o);b.aliasOf=h&&h.record;const _=_e(t,o),A=[b];if("alias"in o){const O=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of O)A.push(C({},b,{components:h?h.record.components:b.components,path:M,aliasOf:h?h.record:b}))}let E,P;for(const O of A){const{path:M}=O;if(a&&M[0]!=="/"){const z=a.record.path,I=z[z.length-1]==="/"?"":"/";O.path=a.record.path+(M&&I+M)}if(E=Et(O,a,_),h?h.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),y&&o.name&&!Ae(E)&&m(o.name)),b.children){const z=b.children;for(let I=0;I<z.length;I++)u(z[I],E,h&&h.children[I])}h=h||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return P?()=>{m(P)}:W}function m(o){if(qe(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(m),a.alias.forEach(m))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(m),o.alias.forEach(m))}}function g(){return n}function l(o){let a=0;for(;a<n.length&&gt(o,n[a])>=0&&(o.record.path!==n[a].record.path||!Ke(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!Ae(o)&&r.set(o.record.name,o)}function i(o,a){let h,y={},b,_;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw V(1,{location:o});_=h.record.name,y=C(we(a.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),o.params&&we(o.params,h.keys.map(P=>P.name))),b=h.stringify(y)}else if("path"in o)b=o.path,h=n.find(P=>P.re.test(b)),h&&(y=h.parse(b),_=h.record.name);else{if(h=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!h)throw V(1,{location:o,currentLocation:a});_=h.record.name,y=C({},a.params,o.params),b=h.stringify(y)}const A=[];let E=h;for(;E;)A.unshift(E.record),E=E.parent;return{name:_,path:b,params:y,matched:A,meta:Ct(A)}}return e.forEach(o=>u(o)),{addRoute:u,resolve:i,removeRoute:m,getRoutes:g,getRecordMatcher:c}}function we(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function bt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:kt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function kt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ae(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ct(e){return e.reduce((t,n)=>C(t,n.meta),{})}function _e(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ke(e,t){return t.children.some(n=>n===e||Ke(e,n))}const Ve=/#/g,St=/&/g,wt=/\//g,At=/=/g,_t=/\?/g,De=/\+/g,Ot=/%5B/g,xt=/%5D/g,Ue=/%5E/g,Mt=/%60/g,He=/%7B/g,$t=/%7C/g,Le=/%7D/g,Nt=/%20/g;function de(e){return encodeURI(""+e).replace($t,"|").replace(Ot,"[").replace(xt,"]")}function It(e){return de(e).replace(He,"{").replace(Le,"}").replace(Ue,"^")}function fe(e){return de(e).replace(De,"%2B").replace(Nt,"+").replace(Ve,"%23").replace(St,"%26").replace(Mt,"`").replace(He,"{").replace(Le,"}").replace(Ue,"^")}function Tt(e){return fe(e).replace(At,"%3D")}function jt(e){return de(e).replace(Ve,"%23").replace(_t,"%3F")}function Bt(e){return e==null?"":jt(e).replace(wt,"%2F")}function Z(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let c=0;c<r.length;++c){const u=r[c].replace(De," "),m=u.indexOf("="),g=Z(m<0?u:u.slice(0,m)),l=m<0?null:Z(u.slice(m+1));if(g in t){let i=t[g];N(i)||(i=t[g]=[i]),i.push(l)}else t[g]=l}return t}function Oe(e){let t="";for(let n in e){const r=e[n];if(n=Tt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(u=>u&&fe(u)):[r&&fe(r)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+n,u!=null&&(t+="="+u))})}return t}function qt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(c=>c==null?null:""+c):r==null?r:""+r)}return t}const Gt=Symbol(""),xe=Symbol(""),J=Symbol(""),Qe=Symbol(""),he=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const c=e.indexOf(r);c>-1&&e.splice(c,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function B(e,t,n,r,c){const u=r&&(r.enterCallbacks[c]=r.enterCallbacks[c]||[]);return()=>new Promise((m,g)=>{const l=a=>{a===!1?g(V(4,{from:n,to:t})):a instanceof Error?g(a):ft(a)?g(V(2,{from:t,to:a})):(u&&r.enterCallbacks[c]===u&&typeof a=="function"&&u.push(a),m())},i=e.call(r&&r.instances[c],t,n,l);let o=Promise.resolve(i);e.length<3&&(o=o.then(l)),o.catch(a=>g(a))})}function le(e,t,n,r){const c=[];for(const u of e)for(const m in u.components){let g=u.components[m];if(!(t!=="beforeRouteEnter"&&!u.instances[m]))if(Kt(g)){const i=(g.__vccOpts||g)[t];i&&c.push(B(i,n,r,u,m))}else{let l=g();c.push(()=>l.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${u.path}"`));const o=tt(i)?i.default:i;u.components[m]=o;const h=(o.__vccOpts||o)[t];return h&&B(h,n,r,u,m)()}))}}return c}function Kt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Me(e){const t=G(J),n=G(Qe),r=$(()=>t.resolve(F(e.to))),c=$(()=>{const{matched:l}=r.value,{length:i}=l,o=l[i-1],a=n.matched;if(!o||!a.length)return-1;const h=a.findIndex(K.bind(null,o));if(h>-1)return h;const y=$e(l[i-2]);return i>1&&$e(o)===y&&a[a.length-1].path!==y?a.findIndex(K.bind(null,l[i-2])):h}),u=$(()=>c.value>-1&&Ht(n.params,r.value.params)),m=$(()=>c.value>-1&&c.value===n.matched.length-1&&ze(n.params,r.value.params));function g(l={}){return Ut(l)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(W):Promise.resolve()}return{route:r,href:$(()=>r.value.href),isActive:u,isExactActive:m,navigate:g}}const Vt=je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Me,setup(e,{slots:t}){const n=Te(Me(e)),{options:r}=G(J),c=$(()=>({[Ne(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ne(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const u=t.default&&t.default(n);return e.custom?u:Be("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:c.value},u)}}}),Dt=Vt;function Ut(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ht(e,t){for(const n in t){const r=t[n],c=e[n];if(typeof r=="string"){if(r!==c)return!1}else if(!N(c)||c.length!==r.length||r.some((u,m)=>u!==c[m]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ne=(e,t,n)=>e!=null?e:t!=null?t:n,Lt=je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=G(he),c=$(()=>e.route||r.value),u=G(xe,0),m=$(()=>{let i=F(u);const{matched:o}=c.value;let a;for(;(a=o[i])&&!a.components;)i++;return i}),g=$(()=>c.value.matched[m.value]);ce(xe,$(()=>m.value+1)),ce(Gt,g),ce(he,c);const l=Je();return et(()=>[l.value,g.value,e.name],([i,o,a],[h,y,b])=>{o&&(o.instances[a]=i,y&&y!==o&&i&&i===h&&(o.leaveGuards.size||(o.leaveGuards=y.leaveGuards),o.updateGuards.size||(o.updateGuards=y.updateGuards))),i&&o&&(!y||!K(o,y)||!h)&&(o.enterCallbacks[a]||[]).forEach(_=>_(i))},{flush:"post"}),()=>{const i=c.value,o=e.name,a=g.value,h=a&&a.components[o];if(!h)return Ie(n.default,{Component:h,route:i});const y=a.props[o],b=y?y===!0?i.params:typeof y=="function"?y(i):y:null,A=Be(h,C({},b,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[o]=null)},ref:l}));return Ie(n.default,{Component:A,route:i})||A}}});function Ie(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qt=Lt;function Yt(e){const t=Pt(e.routes,e),n=e.parseQuery||zt,r=e.stringifyQuery||Oe,c=e.history,u=Q(),m=Q(),g=Q(),l=Xe(j);let i=j;L&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=ae.bind(null,s=>""+s),a=ae.bind(null,Bt),h=ae.bind(null,Z);function y(s,d){let f,p;return qe(s)?(f=t.getRecordMatcher(s),p=d):p=s,t.addRoute(p,f)}function b(s){const d=t.getRecordMatcher(s);d&&t.removeRoute(d)}function _(){return t.getRoutes().map(s=>s.record)}function A(s){return!!t.getRecordMatcher(s)}function E(s,d){if(d=C({},d||l.value),typeof s=="string"){const v=ie(n,s,d.path),w=t.resolve({path:v.path},d),H=c.createHref(v.fullPath);return C(v,w,{params:h(w.params),hash:Z(v.hash),redirectedFrom:void 0,href:H})}let f;if("path"in s)f=C({},s,{path:ie(n,s.path,d.path).path});else{const v=C({},s.params);for(const w in v)v[w]==null&&delete v[w];f=C({},s,{params:a(s.params)}),d.params=a(d.params)}const p=t.resolve(f,d),k=s.hash||"";p.params=o(h(p.params));const S=nt(r,C({},s,{hash:It(k),path:p.path})),R=c.createHref(S);return C({fullPath:S,hash:k,query:r===Oe?qt(s.query):s.query||{}},p,{redirectedFrom:void 0,href:R})}function P(s){return typeof s=="string"?ie(n,s,l.value.path):C({},s)}function O(s,d){if(i!==s)return V(8,{from:d,to:s})}function M(s){return D(s)}function z(s){return M(C(P(s),{replace:!0}))}function I(s){const d=s.matched[s.matched.length-1];if(d&&d.redirect){const{redirect:f}=d;let p=typeof f=="function"?f(s):f;return typeof p=="string"&&(p=p.includes("?")||p.includes("#")?p=P(p):{path:p},p.params={}),C({query:s.query,hash:s.hash,params:"path"in p?{}:s.params},p)}}function D(s,d){const f=i=E(s),p=l.value,k=s.state,S=s.force,R=s.replace===!0,v=I(f);if(v)return D(C(P(v),{state:typeof v=="object"?C({},k,v.state):k,force:S,replace:R}),d||f);const w=f;w.redirectedFrom=d;let H;return!S&&rt(r,p,f)&&(H=V(16,{to:w,from:p}),ve(p,p,!0,!1)),(H?Promise.resolve(H):pe(w,p)).catch(x=>T(x)?T(x,2)?x:ne(x):te(x,w,p)).then(x=>{if(x){if(T(x,2))return D(C({replace:R},P(x.to),{state:typeof x.to=="object"?C({},k,x.to.state):k,force:S}),d||w)}else x=ge(w,p,!0,R,k);return me(w,p,x),x})}function Fe(s,d){const f=O(s,d);return f?Promise.reject(f):Promise.resolve()}function pe(s,d){let f;const[p,k,S]=Ft(s,d);f=le(p.reverse(),"beforeRouteLeave",s,d);for(const v of p)v.leaveGuards.forEach(w=>{f.push(B(w,s,d))});const R=Fe.bind(null,s,d);return f.push(R),q(f).then(()=>{f=[];for(const v of u.list())f.push(B(v,s,d));return f.push(R),q(f)}).then(()=>{f=le(k,"beforeRouteUpdate",s,d);for(const v of k)v.updateGuards.forEach(w=>{f.push(B(w,s,d))});return f.push(R),q(f)}).then(()=>{f=[];for(const v of s.matched)if(v.beforeEnter&&!d.matched.includes(v))if(N(v.beforeEnter))for(const w of v.beforeEnter)f.push(B(w,s,d));else f.push(B(v.beforeEnter,s,d));return f.push(R),q(f)}).then(()=>(s.matched.forEach(v=>v.enterCallbacks={}),f=le(S,"beforeRouteEnter",s,d),f.push(R),q(f))).then(()=>{f=[];for(const v of m.list())f.push(B(v,s,d));return f.push(R),q(f)}).catch(v=>T(v,8)?v:Promise.reject(v))}function me(s,d,f){for(const p of g.list())p(s,d,f)}function ge(s,d,f,p,k){const S=O(s,d);if(S)return S;const R=d===j,v=L?history.state:{};f&&(p||R?c.replace(s.fullPath,C({scroll:R&&v&&v.scroll},k)):c.push(s.fullPath,k)),l.value=s,ve(s,d,f,R),ne()}let U;function We(){U||(U=c.listen((s,d,f)=>{if(!Re.listening)return;const p=E(s),k=I(p);if(k){D(C(k,{replace:!0}),p).catch(W);return}i=p;const S=l.value;L&&lt(be(S.fullPath,f.delta),at()),pe(p,S).catch(R=>T(R,12)?R:T(R,2)?(D(R.to,p).then(v=>{T(v,20)&&!f.delta&&f.type===X.pop&&c.go(-1,!1)}).catch(W),Promise.reject()):(f.delta&&c.go(-f.delta,!1),te(R,p,S))).then(R=>{R=R||ge(p,S,!1),R&&(f.delta&&!T(R,8)?c.go(-f.delta,!1):f.type===X.pop&&T(R,20)&&c.go(-1,!1)),me(p,S,R)}).catch(W)}))}let ee=Q(),ye=Q(),Y;function te(s,d,f){ne(s);const p=ye.list();return p.length?p.forEach(k=>k(s,d,f)):console.error(s),Promise.reject(s)}function Ye(){return Y&&l.value!==j?Promise.resolve():new Promise((s,d)=>{ee.add([s,d])})}function ne(s){return Y||(Y=!s,We(),ee.list().forEach(([d,f])=>s?f(s):d()),ee.reset()),s}function ve(s,d,f,p){const{scrollBehavior:k}=e;if(!L||!k)return Promise.resolve();const S=!f&&ut(be(s.fullPath,0))||(p||!f)&&history.state&&history.state.scroll||null;return Ze().then(()=>k(s,d,S)).then(R=>R&&it(R)).catch(R=>te(R,s,d))}const re=s=>c.go(s);let se;const oe=new Set,Re={currentRoute:l,listening:!0,addRoute:y,removeRoute:b,hasRoute:A,getRoutes:_,resolve:E,options:e,push:M,replace:z,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:u.add,beforeResolve:m.add,afterEach:g.add,onError:ye.add,isReady:Ye,install(s){const d=this;s.component("RouterLink",Dt),s.component("RouterView",Qt),s.config.globalProperties.$router=d,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>F(l)}),L&&!se&&l.value===j&&(se=!0,M(c.location).catch(k=>{}));const f={};for(const k in j)f[k]=$(()=>l.value[k]);s.provide(J,d),s.provide(Qe,Te(f)),s.provide(he,l);const p=s.unmount;oe.add(s),s.unmount=function(){oe.delete(s),oe.size<1&&(i=j,U&&U(),U=null,l.value=j,se=!1,Y=!1),p()}}};return Re}function q(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Ft(e,t){const n=[],r=[],c=[],u=Math.max(t.matched.length,e.matched.length);for(let m=0;m<u;m++){const g=t.matched[m];g&&(e.matched.find(i=>K(i,g))?r.push(g):n.push(g));const l=e.matched[m];l&&(t.matched.find(i=>K(i,l))||c.push(l))}return[n,r,c]}function Xt(){return G(J)}export{Yt as c,Xt as u};
