import{a as J,d as M,g as $,e as R,E as U,o as Y}from"./element-plus-4c09646d.js";import{d as z}from"./vuedraggable-a716c93d.js";import{J as H,a1 as Q,e as W,c as y,Y as c,R as n,u as X,F as Z,a5 as j,o as f,W as m,L as q,a as r,X as I,Q as C,V as E,b8 as K,b7 as tt}from"./@vue-a4ee1718.js";import{_ as st}from"./index-aac4ddaf.js";import"./lodash-es-9a8f223b.js";import"./@vueuse-d6e75e66.js";import"./@element-plus-610de9ec.js";import"./@popperjs-892fd7f5.js";import"./@ctrl-eb0b847c.js";import"./dayjs-f957df0c.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui-36031e6b.js";import"./vue-126c160f.js";import"./sortablejs-f053cdf0.js";import"./vue-router-a40a2a94.js";import"./pinia-5b8e6fe6.js";const S=a=>{let d;return a<10?d="0"+a:d=a+"",d},et=()=>{const a=new Date,d=a.getFullYear()+"",u=S(a.getMonth()),g=S(a.getDate()),i=S(a.getHours()),v=S(a.getMinutes()),T=S(a.getSeconds());return{yyyy:d,MM:u,dd:g,hh:i,mm:v,ss:T}},F=()=>{const{yyyy:a,MM:d,dd:u,hh:g,mm:i,ss:v}=et();return a+"-"+d+"-"+u+" "+g+":"+i+":"+v},at=a=>(K("data-v-ad7cab1e"),a=a(),tt(),a),ot=at(()=>r("h3",{class:"title"},"TODOLIST",-1)),lt={key:0,class:"flex"},ct={class:"number-color"},nt={class:"per80"},dt={key:1,class:"flex"},it={class:"number-color"},rt={class:"per80"},ut={class:"text"},_t={class:"date"},pt={key:0,class:"self-center"},ft={class:"del"},mt=H({__name:"index",setup(a){const d=()=>localStorage.getItem("FASTPAGE-TODOLIST")&&JSON.parse(localStorage.getItem("FASTPAGE-TODOLIST"))||[],u=d().sort((t,s)=>t.idx-s.idx);(()=>{u.forEach((t,s)=>t.idx=s+1),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(u))})();const i=Q(u),v=()=>{const t={value:"",originVal:"",status:0,id:new Date().getTime()+"",idx:i.length+1};i.push(t)},T=t=>{t.status=2,t.originVal=t.value,t.date=F(),x(t)},O=(t,s)=>{t.status===0?i.splice(s,1):(t.value=t.originVal,t.status=2)},D=(t,s)=>{_.value||(i.splice(s,1),A(t))},b=(t,s)=>{t.status=1},x=t=>{const s=d(),e=s.findIndex(o=>t.id===o.id);e>-1?s[e]=t:s.push(t),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))},A=t=>{const s=d(),e=s.findIndex(o=>t.id=o.id);s.splice(e,1),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))},V=t=>{t.status=3,t.date=F();const s=d(),e=s.findIndex(o=>t.id=o.id);s[e].status=3,s[e].date=t.date,localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s))},B=()=>{const t=d();i.forEach((e,o)=>e.idx=o+1);const s=i.filter(e=>t.some(o=>e.id===o.id));s.forEach(e=>{e.status===1&&(e.status=2,e.value=e.originVal)}),localStorage.setItem("FASTPAGE-TODOLIST",JSON.stringify(s)),_.value=!1},_=W(!1),L=()=>{_.value=!0};return(t,s)=>{const e=J,o=M,k=$,N=R,w=j("CloseBold"),P=U,G=Y;return f(),y(Z,null,[c(k,{class:"todolist",align:"middle"},{default:n(()=>[c(e,{span:3},{default:n(()=>[ot]),_:1}),c(e,{span:2},{default:n(()=>[c(o,{type:"primary",onClick:v},{default:n(()=>[m(" \u65B0\u589E\u4E00\u6761 ")]),_:1})]),_:1}),c(e,{class:"f12 tips",span:4},{default:n(()=>[m(" \u53EF\u62D6\u52A8\u5361\u7247\u8FDB\u884C\u6392\u5E8F ")]),_:1})]),_:1}),c(X(z),{"force-fallback":!0,list:i,animation:1e3,"item-key":"idx",onEnd:B,onStart:L},{item:n(({element:l,index:h})=>[c(k,{class:"mt16"},{default:n(()=>[c(e,{span:20,offset:2},{default:n(()=>[c(G,{shadow:"hover",class:q(["relative",l.status===3?"complete":""])},{default:n(()=>[l.status===0||l.status===1?(f(),y("div",lt,[r("div",ct,I(h+1)+"\u3001",1),r("div",nt,[c(N,{modelValue:l.value,"onUpdate:modelValue":p=>l.value=p,placeholder:"Please input",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),l.Status!==3?(f(),C(o,{key:0,disabled:_.value,type:"primary",class:"ml20",onClick:p=>T(l)},{default:n(()=>[m(" \u4FDD\u5B58 ")]),_:2},1032,["disabled","onClick"])):E("",!0),l.Status!==3?(f(),C(o,{key:1,disabled:_.value,type:"info",onClick:p=>O(l,h)},{default:n(()=>[m(" \u53D6\u6D88 ")]),_:2},1032,["disabled","onClick"])):E("",!0)])):(f(),y("div",dt,[r("div",it,I(h+1)+"\u3001",1),r("div",rt,[r("div",ut,I(l.value),1),r("div",_t,"\u6700\u65B0\u4FEE\u6539\u65F6\u95F4\uFF1A"+I(l.date),1)]),l.status!==3?(f(),y("div",pt,[c(o,{disabled:_.value,type:"primary",class:"ml20",onClick:p=>b(l)},{default:n(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["disabled","onClick"]),c(o,{disabled:_.value,type:"success",onClick:p=>V(l)},{default:n(()=>[m(" \u5B8C\u6210 ")]),_:2},1032,["disabled","onClick"])])):E("",!0),r("div",ft,[c(P,{onClick:p=>D(l,h)},{default:n(()=>[c(w)]),_:2},1032,["onClick"])])]))]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024)]),_:1},8,["list"])],64)}}});const Nt=st(mt,[["__scopeId","data-v-ad7cab1e"]]);export{Nt as default};
