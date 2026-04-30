import{g as e,n as t,p as n}from"./iconBase-02BbQUN6.js";import{l as r,m as i,o as a}from"./CastList-6jCu4_BJ.js";import{f as o,h as s,i as c,l,n as u,u as d}from"./index-BCMsx9Ae.js";import{n as f,t as p}from"./hooks-DA6Bu6R8.js";var m=s.div`
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
`,h=e(n(),1),g=t(),_=()=>{let[e,t]=(0,h.useState)([]),[n,s]=(0,h.useState)(null),[_,v]=(0,h.useState)(!1),[y,b]=(0,h.useState)(!1),[x,S]=(0,h.useState)(``),{currentPage:C,targetRef:w}=p(y,n),{selectedMovie:T,isModalOpen:E,openModal:D,closeModal:O}=f(),k=async e=>{try{e===1?v(!0):b(!0),S(``);let n=await i(e),r=n.results;t(e=>[...e,...r.filter(t=>!e.some(e=>e.id===t.id))]),s(n.total_pages)}catch{S(`Failed to load trending movies`)}finally{v(!1),b(!1)}};return(0,h.useEffect)(()=>{k(C)},[C]),(0,g.jsxs)(m,{children:[(0,g.jsxs)(d,{children:[`Trending Movies`,` `]}),(0,g.jsxs)(`section`,{className:`movies-section`,children:[e.length===0&&_?(0,g.jsx)(c,{count:24}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{mediaArray:e,openModal:D}),y&&(0,g.jsx)(c,{count:6})]}),x&&(0,g.jsx)(u,{message:x,onRetry:()=>k(C)}),(0,g.jsx)(`div`,{ref:w}),n!==null&&C>=n&&(0,g.jsx)(l,{text:`No more movies to load`})]}),E&&(0,g.jsx)(o,{closeModal:O,children:(0,g.jsx)(a,{movie:T,closeModal:O})})]})};export{_ as default};