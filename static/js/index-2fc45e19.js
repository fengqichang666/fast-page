import{d as k,a as y,f as C,n as N,e as P,o as T}from"./element-plus-b6159f1d.js";import{J as w,e as i,c as p,Y as t,R as e,F as _,a8 as F,o as c,W as d,Q as O,a as n,X as f}from"./@vue-def104b1.js";import"./lodash-es-9a8f223b.js";import"./@vueuse-a19e87ed.js";import"./@element-plus-2a19e5ea.js";import"./@popperjs-892fd7f5.js";import"./@ctrl-eb0b847c.js";import"./dayjs-f957df0c.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui-36031e6b.js";const b={class:"flex"},I={class:"dialog-footer"},K=w({__name:"index",setup(G){const a=i(!1),s=i(""),g=()=>{a.value=!0},r=(()=>localStorage.getItem("FASTPAGE-NOTEPAD")&&JSON.parse(localStorage.getItem("FASTPAGE-NOTEPAD"))||[])(),v=i(r),E=()=>{r.push(s.value),localStorage.setItem("FASTPAGE-NOTEPAD",JSON.stringify(r)),a.value=!1,s.value=""};return(D,o)=>{const u=k,B=y,V=C,x=N,A=P,S=T;return c(),p(_,null,[t(V,null,{default:e(()=>[t(B,{class:"tc"},{default:e(()=>[t(u,{size:"large",type:"primary",onClick:g},{default:e(()=>[d("\u65B0\u589E")]),_:1})]),_:1})]),_:1}),(c(!0),p(_,null,F(v.value,(l,m)=>(c(),O(x,{class:"box-card mt20",shadow:"never",key:m},{default:e(()=>[n("div",b,[n("div",null,f(m+1)+"\u3001",1),n("div",null,f(l),1)])]),_:2},1024))),128)),t(S,{"close-on-click-modal":!1,modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value=l),title:"\u8BB0\u4E8B\u672C",size:"middle",draggable:""},{footer:e(()=>[n("span",I,[t(u,{onClick:o[1]||(o[1]=l=>a.value=!1)},{default:e(()=>[d("\u53D6\u6D88")]),_:1}),t(u,{type:"primary",onClick:E},{default:e(()=>[d("\u4FDD\u5B58")]),_:1})])]),default:e(()=>[t(A,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value=l),rows:4,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])]),_:1},8,["modelValue"])],64)}}});export{K as default};
