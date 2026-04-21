import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{d as n}from"./iconBase-55VGzWiC.js";import{i as r,l as i,o as a}from"./ReviewList-DuTMJaQo.js";import{a as o,c as s,d as c,n as l,o as u,r as d}from"./index-R3q5SUnf.js";import{n as f,t as p}from"./hooks-oJ07CH-w.js";var m=c.div`
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
`,h=e(n(),1),g=t(),_=()=>{let[e,t]=(0,h.useState)([]),[n,c]=(0,h.useState)(null),[_,v]=(0,h.useState)(!1),[y,b]=(0,h.useState)(``),x=async e=>{try{v(!0),b(``);let n=await i(e),r=n.results;t(e=>[...e,...r.filter(t=>!e.some(e=>e.id===t.id))]),c(n.total_pages)}catch{b(`Failed to load trending movies`)}finally{v(!1)}},{currentPage:S,targetRef:C}=p(_,n),{selectedMovie:w,isModalOpen:T,openModal:E,closeModal:D}=f();return(0,h.useEffect)(()=>{x(S)},[S]),(0,g.jsxs)(m,{children:[(0,g.jsxs)(u,{children:[`Trending Movies`,` `]}),(0,g.jsxs)(`section`,{className:`movies-section`,children:[_&&(0,g.jsx)(d,{}),y&&(0,g.jsx)(l,{message:y,onRetry:()=>x(S)}),(0,g.jsx)(a,{moviesArr:e,openModal:E}),(0,g.jsx)(`div`,{ref:C}),n!==null&&S>=n&&(0,g.jsx)(o,{text:`No more movies to load`})]}),T&&(0,g.jsx)(s,{closeModal:D,children:(0,g.jsx)(r,{movie:w,closeModal:D})})]})};export{_ as default};