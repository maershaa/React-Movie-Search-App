import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{n}from"./iconBase-DSSCEaGA.js";import{a as r,i,n as a,o,r as s,s as c,u as l}from"./index-BThrc2y7.js";var u=l.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: left;

    margin-bottom: 50px;
  }
`,d={method:`GET`,headers:{accept:`application/json`,Authorization:r}},f=async()=>{let e=await fetch(`${o}/trending/movie/week?api_key=${i}`,d);if(!e.ok)throw Error(e.statusText);return e.json()},p=e(n(),1),m=t(),h=()=>{let[e,t]=(0,p.useState)([]),[n,r]=(0,p.useState)(``),i=e=>r(e),o=(0,p.useMemo)(()=>{let t=n.trim().toLowerCase();return e.filter(e=>{let n=e.title.toLowerCase(),r=e.original_title.toLowerCase();return n.includes(t)||r.includes(t)})},[n,e]);return(0,p.useEffect)(()=>(f().then(e=>{let n=e.results;t(n)}).catch(e=>console.error(e)),()=>{}),[]),(0,m.jsxs)(u,{children:[(0,m.jsxs)(`div`,{className:`hero`,children:[(0,m.jsx)(`h2`,{className:`section-title`,children:`Trending Movies`}),(0,m.jsx)(a,{onSearchChange:i,placeholder:`Filter movies by name`,value:n})]}),(0,m.jsxs)(`section`,{className:`movies-section`,children:[e&&(0,m.jsx)(s,{moviesArr:o}),(0,m.jsx)(c,{})]})]})};export{h as default};