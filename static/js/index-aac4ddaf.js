import{Q as f,a5 as _,o as d,at as h}from"./@vue-a4ee1718.js";import{i as y}from"./element-plus-4c09646d.js";import{c as E,a as v}from"./vue-router-a40a2a94.js";import{c as L}from"./pinia-5b8e6fe6.js";import{Q as O}from"./@element-plus-610de9ec.js";import"./lodash-es-9a8f223b.js";import"./@vueuse-d6e75e66.js";import"./@popperjs-892fd7f5.js";import"./@ctrl-eb0b847c.js";import"./dayjs-f957df0c.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui-36031e6b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const P="modulepreload",g=function(r){return"/fast-page/"+r},p={},s=function(o,n,a){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=g(e),e in p)return;p[e]=!0;const t=e.endsWith(".css"),m=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${m}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":P,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},k=[{path:"/",redirect:"/home/okr",component:()=>s(()=>import("./layout-ec1b4ee4.js"),["static/js/layout-ec1b4ee4.js","static/css/layout-e76bf27f.css","static/js/element-plus-4c09646d.js","static/css/element-plus-6a584f10.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-a4ee1718.js","static/js/@vueuse-d6e75e66.js","static/js/@element-plus-610de9ec.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vue-router-a40a2a94.js","static/js/pinia-5b8e6fe6.js"]),children:[{path:"/home/okr",component:()=>s(()=>import("./index-97523ea4.js"),["static/js/index-97523ea4.js","static/css/index-a1ae58fd.css","static/js/element-plus-4c09646d.js","static/css/element-plus-6a584f10.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-a4ee1718.js","static/js/@vueuse-d6e75e66.js","static/js/@element-plus-610de9ec.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vuedraggable-a716c93d.js","static/js/vue-126c160f.js","static/js/sortablejs-f053cdf0.js","static/js/vue-router-a40a2a94.js","static/js/pinia-5b8e6fe6.js"])},{path:"/home/todolist",component:()=>s(()=>import("./index-f75f1019.js"),["static/js/index-f75f1019.js","static/css/index-3158fdfe.css","static/js/element-plus-4c09646d.js","static/css/element-plus-6a584f10.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-a4ee1718.js","static/js/@vueuse-d6e75e66.js","static/js/@element-plus-610de9ec.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vuedraggable-a716c93d.js","static/js/vue-126c160f.js","static/js/sortablejs-f053cdf0.js","static/js/vue-router-a40a2a94.js","static/js/pinia-5b8e6fe6.js"])},{path:"/home/notepad",component:()=>s(()=>import("./index-8a3d81ca.js"),["static/js/index-8a3d81ca.js","static/js/element-plus-4c09646d.js","static/css/element-plus-6a584f10.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-a4ee1718.js","static/js/@vueuse-d6e75e66.js","static/js/@element-plus-610de9ec.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js"])}]},{path:"/map",component:()=>s(()=>import("./index-0425757a.js"),["static/js/index-0425757a.js","static/css/index-7e5c357b.css","static/css/animate-2d4c25b0.css","static/js/element-plus-4c09646d.js","static/css/element-plus-6a584f10.css","static/js/lodash-es-9a8f223b.js","static/js/@vue-a4ee1718.js","static/js/@vueuse-d6e75e66.js","static/js/@element-plus-610de9ec.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vue-router-a40a2a94.js","static/js/echarts-40c9d18a.js","static/js/zrender-e91d5905.js","static/js/pinia-5b8e6fe6.js","static/js/axios-9ee607d0.js","static/js/form-data-01ab6d6d.js"])},{path:"/:pathMatch(.*)",component:()=>s(()=>import("./404-fc557ce0.js"),["static/js/404-fc557ce0.js","static/js/@vue-a4ee1718.js","static/js/element-plus-4c09646d.js","static/css/element-plus-6a584f10.css","static/js/lodash-es-9a8f223b.js","static/js/@vueuse-d6e75e66.js","static/js/@element-plus-610de9ec.js","static/js/@popperjs-892fd7f5.js","static/js/@ctrl-eb0b847c.js","static/js/dayjs-f957df0c.js","static/js/async-validator-efc2d198.js","static/js/memoize-one-99e54574.js","static/js/escape-html-4bbaf1e1.js","static/js/normalize-wheel-es-da779ce4.js","static/js/@floating-ui-36031e6b.js","static/js/vue-router-a40a2a94.js","static/js/pinia-5b8e6fe6.js"])}],A=E({history:v(),routes:k}),R=(r,o)=>{const n=r.__vccOpts||r;for(const[a,e]of o)n[a]=e;return n},I={};function V(r,o){const n=_("router-view");return d(),f(n)}const D=R(I,[["render",V]]),c=h(D);for(const[r,o]of Object.entries(O))r==="Menu"?c.component("icon-menu",o):c.component(r,o);c.use(y);c.use(L());c.use(A);c.mount("#app");export{R as _,A as r};
