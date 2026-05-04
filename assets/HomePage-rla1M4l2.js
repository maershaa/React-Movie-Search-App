import{g as e,n as t,p as n}from"./iconBase-02BbQUN6.js";import{b as r,c as i,d as a,f as o,m as s}from"./CastList-DbvTEhy4.js";import{a as c,d as l,g as u,n as d,p as f,u as p}from"./index-BBsNdUrF.js";var m=u.div`
  .movies_page__hero {
    display: flex;
    align-items: center;
    justify-content: left;
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
`,h=e(n(),1),g=t(),_=()=>{let[e,t]=(0,h.useState)([]),[n,u]=(0,h.useState)(null),[_,v]=(0,h.useState)(!1),[y,b]=(0,h.useState)(!1),[x,S]=(0,h.useState)(``),{currentPage:C,targetRef:w}=a(y,n),{selectedMovie:T,isModalOpen:E,openModal:D,closeModal:O}=o(),k=async e=>{try{e===1?v(!0):b(!0),S(``);let n=await r(e),i=n.results;t(e=>[...e,...i.filter(t=>!e.some(e=>e.id===t.id))]),u(n.total_pages)}catch{S(`Failed to load trending movies`)}finally{v(!1),b(!1)}};return(0,h.useEffect)(()=>{k(C)},[C]),(0,g.jsxs)(m,{children:[(0,g.jsxs)(l,{children:[`Trending Movies`,` `]}),(0,g.jsxs)(`section`,{className:`movies-section`,children:[e.length===0&&_?(0,g.jsx)(c,{count:24}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{mediaArray:e,openModal:D}),y&&(0,g.jsx)(c,{count:6})]}),x&&(0,g.jsx)(d,{message:x,onRetry:()=>k(C)}),(0,g.jsx)(`div`,{ref:w}),n!==null&&C>=n&&(0,g.jsx)(p,{text:`No more movies to load`})]}),E&&(0,g.jsx)(f,{closeModal:O,children:(0,g.jsx)(i,{movie:T,closeModal:O})})]})};export{_ as default};