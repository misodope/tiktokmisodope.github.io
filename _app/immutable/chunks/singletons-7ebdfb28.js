import{B as d,s as w}from"./index-b3b6b5aa.js";import{a as E}from"./paths-b4419565.js";const c=[];function p(e,t=d){let n;const o=new Set;function s(a){if(w(e,a)&&(e=a,n)){const u=!c.length;for(const i of o)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function r(a){s(a(e))}function l(a,u=d){const i=[a,u];return o.add(i),o.size===1&&(n=t(s)||d),a(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:l}}let h="";function I(e){h=e}const y="sveltekit:scroll",A="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function T(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function U(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=m(e)}}function L(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},s=!n||R(n,t)||o.rel_external||o.target||o.download;return{url:n,has:o,external:s}}function O(e){let t=null,n=null,o=null,s=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),o===null&&(o=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),s===null&&(s=f(r,"reload")),r=m(r);return{preload_code:_[n??"off"],preload_data:_[o??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function g(e){const t=p(e);let n=!0;function o(){n=!0,t.update(l=>l)}function s(l){n=!1,t.set(l)}function r(l){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&l(a=u)})}return{notify:o,set:s,subscribe:r}}function v(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);const s=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const l=(await s.json()).version!==h;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:o}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function V(e){e.client}const N={url:g({}),page:g({}),navigating:p(null),updated:v()};export{A as I,b as P,y as S,L as a,O as b,T as c,V as d,I as e,U as f,S as g,R as i,N as s};
