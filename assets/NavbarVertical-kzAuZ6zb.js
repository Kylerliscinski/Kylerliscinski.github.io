import{_ as f,s as d,E as v,m as g,z as m,c as l,a,u as n,G as p,F as h,r as b,l as r,o as c,n as x,t as y}from"./index-qDi8LNx2.js";const w={class:"vertical-nav black-gradient d-flex justify-content-start flex-column pt-4"},E={class:"col-12 logo-container d-flex justify-content-start pb-2 ps-4 ms-3"},k={class:"nav-list"},L=["link-text","onClick"],B={__name:"NavbarVertical",setup(C){let u=d(v.id),s=d(null);const _=g(()=>m.find(o=>o.id===s.value));async function i(o){try{let e=document.getElementById(o);if(!e)throw new Error(`Element with ref ${o} not found.`);s.value=o;let t=e.getBoundingClientRect().top+window.scrollY-50;window.scrollTo({top:t,behavior:"smooth"}),r.log("Scrolled to HTMLElement:",e),r.log(`ScrollId: '${e.id}' matches NavLinkId: '${_.value.id}'`)}catch(e){r.error(e.message)}}return(o,e)=>(c(),l("nav",w,[a("div",E,[a("img",{onClick:e[0]||(e[0]=t=>i(n(u))),title:"SVG logo ",alt:"SVG logo/brand",src:p,class:"my-logo",height:"65"})]),a("ul",k,[(c(!0),l(h,null,b(n(m),t=>(c(),l("li",{key:t==null?void 0:t.id,class:x([{active:t.id===n(s)},"nav-item"])},[a("a",{"link-text":t.name,class:"d-flex align-items-center nav-link",onClick:I=>i(t.id)},y(t.name),9,L)],2))),128))])]))}},V=f(B,[["__scopeId","data-v-ba2bd5bd"]]);export{V as default};