import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{a as n,c as r,d as i,r as a}from"./iconBase-55VGzWiC.js";import{t as o}from"./movieDetails-kVHrEdTg.js";import{b as s,c,g as l,l as u,m as d,o as f,u as p,v as m,y as h}from"./index-8RwDOJc0.js";var g=e(i(),1),_=s.section``,v=s.div`
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;

  /* затемнение  */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9) 25%,
        rgba(0, 0, 0, 0.5) 55%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 40%);
  }

  /* КОНТЕНТ */
  .movie-content {
    position: relative;
    z-index: 2;

    display: flex;
    gap: 32px;
    padding: 40px 60px;
    width: 100%;
  }

  /* ЛЕВАЯ ЧАСТЬ */
  .movie-poster {
    max-width: 450px;
    max-height: 350px;
    border-radius: var(--radius-sm);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
  }
`,y=s.div`
  max-width: 750px;

  text-align: left;

  span,
  p {
    color: var(--white);
  }
  .movie__title {
    margin-bottom: 20px;
    color: var(--white);
  }

  .movie__overview {
    color: var(--text-color);
    margin: 16px 0;
    opacity: 0.85;
    color: var(--white);
  }
`,b=t(),x=({movie:e})=>{let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:m,revenue:g,production_countries:x,tagline:S,genres:C}=e,w=`${f}w1280${t}`,T=n?`${f}w500${n}`:h;return(0,b.jsx)(_,{children:(0,b.jsx)(v,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${w})`},children:(0,b.jsx)(l,{children:(0,b.jsxs)(`div`,{className:`movie-content`,children:[(0,b.jsx)(`img`,{src:T,alt:r,className:`movie-poster`,loading:`lazy`}),(0,b.jsxs)(y,{children:[(0,b.jsx)(`h1`,{className:`movie__title`,children:r}),(0,b.jsx)(c,{vote_average:i,vote_count:a,release_date:s}),(0,b.jsx)(`p`,{className:`movie__overview`,children:o}),(0,b.jsx)(p,{genres:C}),(0,b.jsx)(u,{runtime:m,revenue:g,production_countries:x,tagline:S}),(0,b.jsx)(d,{})]})]})})})})},S=()=>{let[e,t]=(0,g.useState)(null),[i,s]=(0,g.useState)(!1),{id:c}=r();return(0,g.useEffect)(()=>{(async()=>{try{s(!0);let e=await o(c);console.log(`🚀 ~ loadMovie ~ data:`,e),t(e)}catch(e){console.error(e)}finally{s(!1)}})()},[c]),e?(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(`div`,{className:`movie-details`,children:[i&&(0,b.jsx)(m,{}),(0,b.jsx)(x,{movie:e}),(0,b.jsxs)(`div`,{className:`tab-content`,children:[(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(a,{to:`cast`,children:`Cast`})}),(0,b.jsx)(`hr`,{className:`divider`}),(0,b.jsx)(`li`,{children:(0,b.jsx)(a,{to:`reviews`,children:`Reviews`})})]}),(0,b.jsx)(n,{})]})]})}):null};export{S as default};