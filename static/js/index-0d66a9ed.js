import{Q as f,a5 as d,o as _,at as h}from"./@vue-def104b1.js";import{i as y}from"./element-plus-cdaf2fa1.js";import{c as E,a as v}from"./vue-router-3e3275fe.js";import{Q as L}from"./@element-plus-2a19e5ea.js";import"./lodash-es-9a8f223b.js";import"./@vueuse-a19e87ed.js";import"./@popperjs-892fd7f5.js";import"./@ctrl-eb0b847c.js";import"./dayjs-f957df0c.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui-36031e6b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="modulepreload",O=function(r){return"/fast-page/"+r},p={},l=function(o,n,s){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=O(e),e in p)return;p[e]=!0;const t=e.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":g,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((u,m)=>{i.addEventListener("load",u),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},P=[{path:"/",redirect:"/todolist",component:()=>l(()=>import("./layout-cc133cc6.js"),["static/js/layout-cc133cc6.js","static/css/layout-451d18a9.css","static/js/element-plus-cdaf2fa1.js","static/css/element-plus-82eab019.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-def104b1.js","static/js/@vueuse-a19e87ed.js","static/js/@element-plus-2a19e5ea.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vue-router-3e3275fe.js"]),children:[{path:"/todolist",component:()=>l(()=>import("./index-623f2c66.js"),["static/js/index-623f2c66.js","static/css/index-76c69cf7.css","static/js/element-plus-cdaf2fa1.js","static/css/element-plus-82eab019.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-def104b1.js","static/js/@vueuse-a19e87ed.js","static/js/@element-plus-2a19e5ea.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vuedraggable-699f9566.js","static/js/vue-29042d9f.js","static/js/sortablejs-f053cdf0.js","static/js/vue-router-3e3275fe.js"])},{path:"/okr",component:()=>l(()=>import("./index-af349271.js"),["static/js/index-af349271.js","static/js/@vue-def104b1.js"])},{path:"/notepad",component:()=>l(()=>import("./index-9a99c768.js"),["static/js/index-9a99c768.js","static/js/@vue-def104b1.js","static/js/element-plus-cdaf2fa1.js","static/css/element-plus-82eab019.css","static/js/lodash-es-9a8f223b.js","static/js/@vueuse-a19e87ed.js","static/js/@element-plus-2a19e5ea.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vue-router-3e3275fe.js"])}]},{path:"/:pathMatch(.*)",component:()=>l(()=>import("./404-9b462a84.js"),["static/js/404-9b462a84.js","static/js/@vue-def104b1.js","static/js/element-plus-cdaf2fa1.js","static/css/element-plus-82eab019.css","static/js/lodash-es-9a8f223b.js","static/js/@vueuse-a19e87ed.js","static/js/@element-plus-2a19e5ea.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vue-router-3e3275fe.js"])}],k=E({history:v(),routes:P}),A=(r,o)=>{const n=r.__vccOpts||r;for(const[s,e]of o)n[s]=e;return n},R={};function I(r,o){const n=d("router-view");return _(),f(n)}const V=A(R,[["render",I]]),a=h(V);for(const[r,o]of Object.entries(L))r==="Menu"?a.component("icon-menu",o):a.component(r,o);a.use(y);a.use(k);a.mount("#app");export{A as _};
