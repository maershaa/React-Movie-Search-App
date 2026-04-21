import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{d as n}from"./iconBase-55VGzWiC.js";import{i as r,l as i,o as a}from"./ReviewList-CoRuawnl.js";import{a as o,n as s,r as c,s as l,u}from"./index-CJapfQ-C.js";import{t as d}from"./useInfiniteScroll-CPmbQv5u.js";var f=u.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: left;

    margin-bottom: 50px;
    margin-left: 20px;
  }

  .end-message {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 30px 0;
    color: #999;
    font-size: 2rem;
  }

  .end-message::before,
  .end-message::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e0e0e0;
    margin: 0 12px;
  }
`,p=e(n(),1),m=t(),h=()=>{let[e,t]=(0,p.useState)([]),[n,u]=(0,p.useState)(!1),[h,g]=(0,p.useState)(``),[_,v]=(0,p.useState)(null),[y,b]=(0,p.useState)(!1),[x,S]=(0,p.useState)(null),C=e=>{S(e),b(!0)},w=()=>{b(!1),S(null)},T=async e=>{try{u(!0),g(``);let n=await i(e),r=n.results;t(e=>[...e,...r.filter(t=>!e.some(e=>e.id===t.id))]),v(n.total_pages)}catch{g(`Failed to load trending movies`)}finally{u(!1)}},{currentPage:E,targetRef:D}=d(n,_);return(0,p.useEffect)(()=>{T(E)},[E]),(0,m.jsxs)(f,{children:[(0,m.jsx)(`div`,{className:`hero`,children:(0,m.jsxs)(o,{children:[`Trending Movies`,` `]})}),(0,m.jsxs)(`section`,{className:`movies-section`,children:[n&&(0,m.jsx)(c,{}),h&&(0,m.jsx)(s,{message:h,onRetry:()=>T(E)}),(0,m.jsx)(a,{moviesArr:e,openModal:C}),(0,m.jsx)(`div`,{ref:D}),_!==null&&E>=_&&(0,m.jsx)(`div`,{className:`end-message`,children:(0,m.jsx)(`span`,{children:`No more movies to load.`})})]}),y&&(0,m.jsx)(l,{closeModal:w,children:(0,m.jsx)(r,{movie:x,closeModal:w})})]})};export{h as default};