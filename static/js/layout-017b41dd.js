import{E as j,a as G,b as H,c as J,d as Q,e as W,f as Y,g as X,h as Z,j as $,k as ee,l as oe,m as te}from"./element-plus-b6159f1d.js";import{J as ae,e as _,a1 as le,Q as x,R as o,a5 as l,o as m,Y as e,L as ne,S as b,T as g,a as f,W as s,c as se,a8 as ce,F as ue,b8 as _e,b7 as pe}from"./@vue-def104b1.js";import{u as re}from"./vue-router-b6d19fbf.js";import{_ as ie}from"./index-01746285.js";import"./lodash-es-9a8f223b.js";import"./@vueuse-a19e87ed.js";import"./@element-plus-2a19e5ea.js";import"./@popperjs-892fd7f5.js";import"./@ctrl-eb0b847c.js";import"./dayjs-f957df0c.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui-36031e6b.js";const de=c=>(_e("data-v-fbfc27a6"),c=c(),pe(),c),me=de(()=>f("h1",{class:"page-name"},"FastPage",-1)),fe=ae({__name:"layout",setup(c){const t=_(!1),p=_(""),v=[{key:"1",value:"Bing",url:"https://cn.bing.com/search?q="},{key:"2",value:"Baidu",url:"https://www.baidu.com/s?wd="},{key:"3",value:"Google",url:"https://www.google.com/search?q="}],r=_(v[0]),C=le(v),h=()=>{window.open(r.value.url+p.value)},B=k=>{k.which===13&&h()},w=()=>{t.value=!t.value},S=re(),E=_("/okr");return E.value=S.path,(k,u)=>{const I=l("Expand"),n=j,V=l("Fold"),i=G,F=H,L=J,T=l("Search"),N=Q,O=W,A=Y,R=X,D=l("Aim"),d=Z,M=l("List"),q=l("Notebook"),z=$,K=ee,P=l("router-view"),U=oe,y=te;return m(),x(y,{class:"container"},{default:o(()=>[e(R,null,{default:o(()=>[e(A,{align:"middle",gutter:12,class:"header"},{default:o(()=>[e(i,{span:3,class:ne(["control-menu",t.value?"":"tc"])},{default:o(()=>[b(f("div",{onClick:w},[e(n,null,{default:o(()=>[e(I)]),_:1})],512),[[g,t.value]]),b(f("div",{onClick:w},[s("\u6298\u53E0\u83DC\u5355"),e(n,null,{default:o(()=>[e(V)]),_:1})],512),[[g,!t.value]])]),_:1},8,["class"]),e(i,{span:3,offset:2},{default:o(()=>[me]),_:1}),e(i,{span:12},{default:o(()=>[e(O,{clearable:"",onKeypress:B,autocomplete:"on",modelValue:p.value,"onUpdate:modelValue":u[1]||(u[1]=a=>p.value=a),placeholder:"Please input"},{prepend:o(()=>[e(L,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=a=>r.value=a),"value-key":"key",size:"large",style:{width:"100px"}},{default:o(()=>[(m(!0),se(ue,null,ce(C,a=>(m(),x(F,{key:a.key,label:a.value,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),append:o(()=>[e(N,{type:"primary",onClick:h},{default:o(()=>[e(n,null,{default:o(()=>[e(T)]),_:1}),s(" \xA0search ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,{class:"content"},{default:o(()=>[e(K,{width:t.value?"70px":"200px"},{default:o(()=>[e(z,{router:"","collapse-transition":!1,"default-active":E.value,collapse:t.value},{default:o(()=>[e(d,{index:"/okr"},{title:o(()=>[s("OKRLIST")]),default:o(()=>[e(n,null,{default:o(()=>[e(D)]),_:1})]),_:1}),e(d,{index:"/todolist"},{title:o(()=>[s(" TODOLIST ")]),default:o(()=>[e(n,null,{default:o(()=>[e(M)]),_:1})]),_:1}),e(d,{index:"/notepad"},{title:o(()=>[s("\u8BB0\u4E8B\u672C/\u4FBF\u7B7E")]),default:o(()=>[e(n,null,{default:o(()=>[e(q)]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])]),_:1},8,["width"]),e(U,null,{default:o(()=>[e(P)]),_:1})]),_:1})]),_:1})}}});const Le=ie(fe,[["__scopeId","data-v-fbfc27a6"]]);export{Le as default};
