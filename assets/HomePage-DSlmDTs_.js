import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{n}from"./iconBase-DSSCEaGA.js";import{a as r,d as i,i as a,o,r as s,s as c,t as l,u}from"./index-Hr4Tn7pm.js";var d={method:`GET`,headers:{accept:`application/json`,Authorization:a}},f=async(e=1)=>{let t=`api_key=${s}&page=${e}`,n=await fetch(`${r}/trending/movie/week?${t}`,d);if(!n.ok)throw Error(n.statusText);return n.json()},p=i.div`
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
`,m=e(n()),h=function(e,t){var n=(0,m.useState)(null),r=n[0],i=n[1];return(0,m.useEffect)(function(){if(e.current&&typeof IntersectionObserver==`function`){var n=new IntersectionObserver(function(e){i(e[0])},t);return n.observe(e.current),function(){i(null),n.disconnect()}}return function(){}},[e.current,t.threshold,t.root,t.rootMargin]),r},g=t(),_=()=>{let[e,t]=(0,m.useState)([]),[n,r]=(0,m.useState)(1),[i,a]=(0,m.useState)(!1),[s,d]=(0,m.useState)(null),[_,v]=(0,m.useState)(!1),[y,b]=(0,m.useState)(null),x=e=>{b(e),v(!0)},S=()=>{v(!1),b(null)},C=(0,m.useRef)(null),w=h(C,{root:null,rootMargin:`200px`,threshold:0});return(0,m.useEffect)(()=>{w?.isIntersecting&&!i&&(s===null||n<s)&&r(e=>e+1)},[w,i,n,s]),(0,m.useEffect)(()=>{(async()=>{try{a(!0);let e=await f(n);t(t=>[...t,...e.results]),d(e.total_pages)}catch(e){console.error(e)}finally{a(!1)}})()},[n]),(0,g.jsxs)(p,{children:[(0,g.jsx)(`div`,{className:`hero`,children:(0,g.jsx)(`h2`,{className:`section-title`,children:`Trending Movies`})}),(0,g.jsxs)(`section`,{className:`movies-section`,children:[(0,g.jsx)(o,{moviesArr:e,openModal:x}),i&&(0,g.jsx)(u,{}),(0,g.jsx)(`div`,{ref:C}),n>=s&&(0,g.jsx)(`div`,{className:`end-message`,children:(0,g.jsx)(`span`,{children:`THE END`})})]}),_&&(0,g.jsx)(c,{closeModal:S,children:(0,g.jsx)(l,{movie:y,closeModal:S})})]})};export{_ as default};