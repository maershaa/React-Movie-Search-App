import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{n}from"./iconBase-DSSCEaGA.js";import{d as r,g as i,i as a,o,r as s,t as c,u as l,v as u}from"./index-DS9SlvlR.js";var d={method:`GET`,headers:{accept:`application/json`,Authorization:a}},f=async(e=1)=>{let t=`api_key=${s}&page=${e}`,n=await fetch(`${o}/trending/movie/week?${t}`,d);if(!n.ok)throw Error(n.statusText);return n.json()},p=u.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: left;

    margin-bottom: 50px;
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
`,m=e(n()),h=function(e,t){var n=(0,m.useState)(null),r=n[0],i=n[1];return(0,m.useEffect)(function(){if(e.current&&typeof IntersectionObserver==`function`){var n=new IntersectionObserver(function(e){i(e[0])},t);return n.observe(e.current),function(){i(null),n.disconnect()}}return function(){}},[e.current,t.threshold,t.root,t.rootMargin]),r},g=t(),_=()=>{let[e,t]=(0,m.useState)([]),[n,a]=(0,m.useState)(1),[o,s]=(0,m.useState)(!1),[u,d]=(0,m.useState)(null),[_,v]=(0,m.useState)(!1),[y,b]=(0,m.useState)(null),x=e=>{b(e),v(!0)},S=()=>{v(!1),b(null)},C=(0,m.useRef)(null),w=h(C,{root:null,rootMargin:`200px`,threshold:0});return(0,m.useEffect)(()=>{w?.isIntersecting&&!o&&(u===null||n<u)&&a(e=>e+1)},[w,o,n,u]),(0,m.useEffect)(()=>{(async()=>{try{s(!0);let e=await f(n);t(t=>[...t,...e.results]),d(e.total_pages)}catch(e){console.error(e)}finally{s(!1)}})()},[n]),(0,g.jsxs)(p,{children:[(0,g.jsx)(`div`,{className:`hero`,children:(0,g.jsx)(`h2`,{className:`section-title`,children:`Trending Movies`})}),(0,g.jsxs)(`section`,{className:`movies-section`,children:[(0,g.jsx)(l,{moviesArr:e,openModal:x}),o&&(0,g.jsx)(i,{}),(0,g.jsx)(`div`,{ref:C}),n>=u&&(0,g.jsx)(`div`,{className:`end-message`,children:(0,g.jsx)(`span`,{children:`THE END`})})]}),_&&(0,g.jsx)(r,{closeModal:S,children:(0,g.jsx)(c,{movie:y,closeModal:S})})]})};export{_ as default};