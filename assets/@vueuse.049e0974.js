import{s as H,w as J,r as B,b as v,d as b,u as U,g as G,e as q,f as L,h as K,n as X,i as z}from"./@vue.acb2f17b.js";var Y=Object.defineProperty,Z=Object.defineProperties,k=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&N(e,n,t[n]);if(F)for(var n of F(t))te.call(t,n)&&N(e,n,t[n]);return e},re=(e,t)=>Z(e,k(t));function Ie(e,t){var n;const r=H();return J(()=>{r.value=e()},re(ne({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),B(r)}var A;const S=typeof window<"u",oe=e=>typeof e<"u",Se=e=>typeof e=="boolean",ie=e=>typeof e=="function",Te=e=>typeof e=="number",se=e=>typeof e=="string",P=()=>{},ue=S&&((A=window==null?void 0:window.navigator)==null?void 0:A.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function g(e){return typeof e=="function"?e():U(e)}function M(e,t){function n(...r){return new Promise((i,u)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(u)})}return n}function ae(e,t={}){let n,r,i=P;const u=s=>{clearTimeout(s),i(),i=P};return s=>{const l=g(e),d=g(t.maxWait);return n&&u(n),l<=0||d!==void 0&&d<=0?(r&&(u(r),r=null),Promise.resolve(s())):new Promise((p,m)=>{i=t.rejectOnCancel?m:p,d&&!r&&(r=setTimeout(()=>{n&&u(n),r=null,p(s())},d)),n=setTimeout(()=>{r&&u(r),r=null,p(s())},l)})}}function le(e,t=!0,n=!0,r=!1){let i=0,u,a=!0,s=P,l;const d=()=>{u&&(clearTimeout(u),u=void 0,s(),s=P)};return m=>{const o=g(e),c=Date.now()-i,f=()=>l=m();return d(),o<=0?(i=Date.now(),f()):(c>o&&(n||!a)?(i=Date.now(),f()):t&&(l=new Promise((y,O)=>{s=r?O:y,u=setTimeout(()=>{i=Date.now(),a=!0,y(f()),d()},Math.max(0,o-c))})),!n&&!u&&(u=setTimeout(()=>a=!0,o)),a=!1,l)}}function ce(e){return e}function j(e){return G()?(q(e),!0):!1}function fe(e,t=200,n={}){return M(ae(t,n),e)}function $e(e,t=200,n={}){const r=v(e.value),i=fe(()=>{r.value=e.value},t,n);return b(e,()=>i()),r}function xe(e,t=200,n=!1,r=!0,i=!1){return M(le(t,n,r,i),e)}function C(e,t=!0){L()?K(e):t?e():X(e)}function je(e,t,n={}){const{immediate:r=!0}=n,i=v(!1);let u=null;function a(){u&&(clearTimeout(u),u=null)}function s(){i.value=!1,a()}function l(...d){a(),i.value=!0,u=setTimeout(()=>{i.value=!1,u=null,e(...d)},g(t))}return r&&(i.value=!0,S&&l()),j(s),{isPending:B(i),start:l,stop:s}}function _(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const E=S?window:void 0,de=S?window.document:void 0;function h(...e){let t,n,r,i;if(se(e[0])||Array.isArray(e[0])?([n,r,i]=e,t=E):[t,n,r,i]=e,!t)return P;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],a=()=>{u.forEach(p=>p()),u.length=0},s=(p,m,o,c)=>(p.addEventListener(m,o,c),()=>p.removeEventListener(m,o,c)),l=b(()=>[_(t),g(i)],([p,m])=>{a(),p&&u.push(...n.flatMap(o=>r.map(c=>s(p,o,c,m))))},{immediate:!0,flush:"post"}),d=()=>{l(),a()};return j(d),d}let D=!1;function Ce(e,t,n={}){const{window:r=E,ignore:i=[],capture:u=!0,detectIframe:a=!1}=n;if(!r)return;ue&&!D&&(D=!0,Array.from(r.document.body.children).forEach(o=>o.addEventListener("click",P)));let s=!0;const l=o=>i.some(c=>{if(typeof c=="string")return Array.from(r.document.querySelectorAll(c)).some(f=>f===o.target||o.composedPath().includes(f));{const f=_(c);return f&&(o.target===f||o.composedPath().includes(f))}}),p=[h(r,"click",o=>{const c=_(e);if(!(!c||c===o.target||o.composedPath().includes(c))){if(o.detail===0&&(s=!l(o)),!s){s=!0;return}t(o)}},{passive:!0,capture:u}),h(r,"pointerdown",o=>{const c=_(e);c&&(s=!o.composedPath().includes(c)&&!l(o))},{passive:!0}),a&&h(r,"blur",o=>{var c;const f=_(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(f!=null&&f.contains(r.document.activeElement))&&t(o)})].filter(Boolean);return()=>p.forEach(o=>o())}function pe(e,t=!1){const n=v(),r=()=>n.value=Boolean(e());return r(),C(r,t),n}function ve(e){return JSON.parse(JSON.stringify(e))}const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__";$[x]=$[x]||{};$[x];function Fe(e,t,{window:n=E,initialValue:r=""}={}){const i=v(r),u=z(()=>{var a;return _(t)||((a=n==null?void 0:n.document)==null?void 0:a.documentElement)});return b([u,()=>g(e)],([a,s])=>{var l;if(a&&n){const d=(l=n.getComputedStyle(a).getPropertyValue(s))==null?void 0:l.trim();i.value=d||r}},{immediate:!0}),b(i,a=>{var s;(s=u.value)!=null&&s.style&&u.value.style.setProperty(g(e),a)}),i}function Ne({document:e=de}={}){if(!e)return v("visible");const t=v(e.visibilityState);return h(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var R=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,ye=(e,t)=>{var n={};for(var r in e)me.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&R)for(var r of R(e))t.indexOf(r)<0&&Oe.call(e,r)&&(n[r]=e[r]);return n};function he(e,t,n={}){const r=n,{window:i=E}=r,u=ye(r,["window"]);let a;const s=pe(()=>i&&"ResizeObserver"in i),l=()=>{a&&(a.disconnect(),a=void 0)},d=b(()=>_(e),m=>{l(),s.value&&i&&m&&(a=new ResizeObserver(t),a.observe(m,u))},{immediate:!0,flush:"post"}),p=()=>{l(),d()};return j(p),{isSupported:s,stop:p}}function Ae(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:i=!0,immediate:u=!0}=t,a=v(0),s=v(0),l=v(0),d=v(0),p=v(0),m=v(0),o=v(0),c=v(0);function f(){const y=_(e);if(!y){n&&(a.value=0,s.value=0,l.value=0,d.value=0,p.value=0,m.value=0,o.value=0,c.value=0);return}const O=y.getBoundingClientRect();a.value=O.height,s.value=O.bottom,l.value=O.left,d.value=O.right,p.value=O.top,m.value=O.width,o.value=O.x,c.value=O.y}return he(e,f),b(()=>_(e),y=>!y&&f()),i&&h("scroll",f,{capture:!0,passive:!0}),r&&h("resize",f,{passive:!0}),C(()=>{u&&f()}),{height:a,bottom:s,left:l,right:d,top:p,width:m,x:o,y:c,update:f}}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));var _e=Object.defineProperty,V=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,Q=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))be.call(t,n)&&Q(e,n,t[n]);if(V)for(var n of V(t))ge.call(t,n)&&Q(e,n,t[n]);return e};const Pe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};we({linear:ce},Pe);function De(e,t,n,r={}){var i,u,a;const{clone:s=!1,passive:l=!1,eventName:d,deep:p=!1,defaultValue:m}=r,o=L(),c=n||(o==null?void 0:o.emit)||((i=o==null?void 0:o.$emit)==null?void 0:i.bind(o))||((a=(u=o==null?void 0:o.proxy)==null?void 0:u.$emit)==null?void 0:a.bind(o==null?void 0:o.proxy));let f=d;t||(t="modelValue"),f=d||f||`update:${t.toString()}`;const y=w=>s?ie(s)?s(w):ve(w):w,O=()=>oe(e[t])?y(e[t]):m;if(l){const w=O(),T=v(w);return b(()=>e[t],I=>T.value=y(I)),b(T,I=>{(I!==e[t]||p)&&c(f,I)},{deep:p}),T}else return z({get(){return O()},set(w){c(f,w)}})}function Re({window:e=E}={}){if(!e)return v(!1);const t=v(e.document.hasFocus());return h(e,"blur",()=>{t.value=!1}),h(e,"focus",()=>{t.value=!0}),t}function We(e={}){const{window:t=E,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:u=!0}=e,a=v(n),s=v(r),l=()=>{t&&(u?(a.value=t.innerWidth,s.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return l(),C(l),h("resize",l,{passive:!0}),i&&h("orientationchange",l,{passive:!0}),{width:a,height:s}}export{Te as a,Se as b,We as c,Ae as d,h as e,he as f,xe as g,Fe as h,S as i,je as j,Ne as k,Re as l,Ie as m,De as n,Ce as o,$e as r,j as t,_ as u};
