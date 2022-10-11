import{E as N,d as P,f as w,e as G,c as J,n as $}from"./element-plus-cdaf2fa1.js";import{a as T}from"./date-a6f6fcae.js";import{d as R}from"./vuedraggable-699f9566.js";import{J as U,a1 as z,c as m,Y as l,R as c,u as Q,F as W,a5 as X,o as r,W as u,L as Y,a as n,X as S,Q as h,V as I,b8 as j,b7 as q}from"./@vue-def104b1.js";import{_ as H}from"./index-2d0ef585.js";import"./lodash-es-9a8f223b.js";import"./@vueuse-a19e87ed.js";import"./@element-plus-2a19e5ea.js";import"./@popperjs-892fd7f5.js";import"./@ctrl-eb0b847c.js";import"./dayjs-f957df0c.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui-36031e6b.js";import"./vue-29042d9f.js";import"./sortablejs-f053cdf0.js";import"./vue-router-ec931e27.js";const K=p=>(j("data-v-0b2ab1e9"),p=p(),q(),p),M=K(()=>n("h2",{class:"title"},"TODOLIST",-1)),Z={key:0,class:"flex"},tt={class:"number-color"},st={class:"per80"},ot={key:1,class:"flex"},at={class:"number-color"},et={class:"per80"},lt={class:"text"},ct={class:"date"},nt={key:0,class:"self-center"},it={class:"del"},dt=U({__name:"index",setup(p){const _=()=>localStorage.getItem("FASTPAGE-TODOLIST")&&JSON.parse(localStorage.getItem("FASTPAGE-TODOLIST"))||[],v=_().sort((t,s)=>t.idx-s.idx);(()=>{v.forEach((t,s)=>t.idx=s+1),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(v))})();const i=z(v),E=()=>{const t={value:"",originVal:"",status:0,id:new Date().getTime()+"",idx:i.length+1};i.push(t)},y=t=>{t.status=2,t.originVal=t.value,t.date=T(),F(t)},C=(t,s)=>{t.status===0?i.splice(s,1):(t.value=t.originVal,t.status=2)},O=(t,s)=>{i.splice(s,1),D(t)},k=(t,s)=>{t.status=1},F=t=>{const s=_(),o=s.findIndex(a=>t.id===a.id);o>-1?s[o]=t:s.push(t),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))},D=t=>{const s=_(),o=s.findIndex(a=>t.id=a.id);s.splice(o,1),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))},x=t=>{t.status=3,t.date=T();const s=_(),o=s.findIndex(a=>t.id=a.id);s[o].status=3,s[o].date=t.date,localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))},A=()=>{const t=_();i.forEach((o,a)=>o.idx=a+1);const s=i.filter(o=>t.some(a=>o.id===a.id));s.forEach(o=>{o.status===1&&(o.status=2,o.value=o.originVal)}),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))};return(t,s)=>{const o=N,a=P,g=w,b=G,V=X("CloseBold"),B=J,L=$;return r(),m(W,null,[l(g,{class:"todolist",align:"middle"},{default:c(()=>[l(o,{span:3},{default:c(()=>[M]),_:1}),l(o,{span:2},{default:c(()=>[l(a,{type:"primary",onClick:E},{default:c(()=>[u(" \u65B0\u589E\u4E00\u6761 ")]),_:1})]),_:1}),l(o,{class:"f12 tips",span:4},{default:c(()=>[u(" \u53EF\u62D6\u52A8\u5361\u7247\u8FDB\u884C\u6392\u5E8F ")]),_:1})]),_:1}),l(Q(R),{"force-fallback":!0,list:i,animation:1e3,"item-key":"idx",onEnd:A},{item:c(({element:e,index:f})=>[l(g,{class:"mt16"},{default:c(()=>[l(o,{span:20,offset:2},{default:c(()=>[l(L,{shadow:"hover",class:Y(["relative",e.status===3?"complete":""])},{default:c(()=>[e.status===0||e.status===1?(r(),m("div",Z,[n("div",tt,S(f+1)+"\u3001",1),n("div",st,[l(b,{modelValue:e.value,"onUpdate:modelValue":d=>e.value=d,placeholder:"Please input",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),e.Status!==3?(r(),h(a,{key:0,type:"primary",class:"ml20",onClick:d=>y(e)},{default:c(()=>[u(" \u4FDD\u5B58 ")]),_:2},1032,["onClick"])):I("",!0),e.Status!==3?(r(),h(a,{key:1,type:"info",onClick:d=>C(e,f)},{default:c(()=>[u(" \u53D6\u6D88 ")]),_:2},1032,["onClick"])):I("",!0)])):(r(),m("div",ot,[n("div",at,S(f+1)+"\u3001",1),n("div",et,[n("div",lt,S(e.value),1),n("div",ct,"\u6700\u65B0\u4FEE\u6539\u65F6\u95F4\uFF1A"+S(e.date),1)]),e.status!==3?(r(),m("div",nt,[l(a,{type:"primary",class:"ml20",onClick:d=>k(e)},{default:c(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),l(a,{type:"success",onClick:d=>x(e)},{default:c(()=>[u(" \u5B8C\u6210 ")]),_:2},1032,["onClick"])])):I("",!0),n("div",it,[l(B,{onClick:d=>O(e,f)},{default:c(()=>[l(V)]),_:2},1032,["onClick"])])]))]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024)]),_:1},8,["list"])],64)}}});const At=H(dt,[["__scopeId","data-v-0b2ab1e9"]]);export{At as default};
