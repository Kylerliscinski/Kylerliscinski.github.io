import{_ as f,s as d,E as v,m as g,z as m,c as l,a,u as n,G as p,F as h,r as x,l as r,o as c,n as y,t as w}from"./index-9HGwWvQo.js";const E={class:"vertical-nav black-gradient d-flex justify-content-start flex-column pt-4"},b={class:"col-12 logo-container d-flex justify-content-start pb-2 ps-4 ms-3"},k={class:"nav-list"},L=["link-text","onClick"],B={__name:"NavbarVertical",setup(C){let u=d(v.id),s=d(null);const _=g(()=>m.find(o=>o.id===s.value));async function i(o){try{let e=document.getElementById(o);if(!e)throw new Error(`Element with ref ${o} not found.`);s.value=o;let t=e.getBoundingClientRect().top+window.scrollY-50;window.scrollTo({top:t,behavior:"smooth"}),r.log("Scrolled to HTMLElement:",e),r.log(`ScrollId: '${e.id}' matches NavLinkId: '${_.value.id}'`)}catch(e){r.error(e.message)}}return(o,e)=>(c(),l("nav",E,[a("div",b,[a("img",{onClick:e[0]||(e[0]=t=>i(n(u))),title:"SVG logo ",alt:"SVG logo/brand",src:p,class:"my-logo",height:"65"})]),a("ul",k,[(c(!0),l(h,null,x(n(m),t=>(c(),l("li",{key:t==null?void 0:t.id,class:y([{active:t.id===n(s)},"nav-item"])},[a("a",{"link-text":t.name,class:"d-flex align-items-center nav-link",onClick:I=>i(t.id)},w(t.name),9,L)],2))),128))])]))}},V=f(B,[["__scopeId","data-v-1c6528a7"]]);export{V as default};