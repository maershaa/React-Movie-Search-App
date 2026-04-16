import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{n}from"./iconBase-DSSCEaGA.js";import{S as r,_ as i,a,c as o,f as s,g as c,i as l,l as u,m as d,o as f,r as p,s as m,v as h,x as g}from"./index-DS9SlvlR.js";var _={method:`GET`,headers:{accept:`application/json`,Authorization:l}},v=async e=>{let t=await fetch(`${f}/movie/${e}?api_key=${p}`,_);if(!t.ok)throw Error(t.statusText);return await t.json()},y=e(n(),1),b=t(),x=h.section``,S=h.div`
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
`,C=h.div`
  max-width: 750px;

  text-align: left;

  .movie__title {
    margin-bottom: 20px;
  }

  .movie__overview {
    color: var(--text-color);
    margin: 16px 0;
    opacity: 0.85;
  }
`,w=({movie:e})=>{let{backdrop_path:t,poster_path:n,original_title:r,vote_average:c,vote_count:l,overview:f,release_date:p,runtime:h,revenue:g,production_countries:_,tagline:v,genres:y}=e,w=`${a}w500/${t}`,T=n?`${a}w300/${n}`:i;return(0,b.jsx)(x,{children:(0,b.jsx)(S,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${w})`},children:(0,b.jsx)(d,{children:(0,b.jsxs)(`div`,{className:`movie-content`,children:[(0,b.jsx)(`img`,{src:T,alt:r,className:`movie-poster`}),(0,b.jsxs)(C,{children:[(0,b.jsx)(`h1`,{className:`movie__title`,children:r}),(0,b.jsx)(m,{vote_average:c,vote_count:l,release_date:p}),(0,b.jsx)(`p`,{className:`movie__overview`,children:f}),(0,b.jsx)(u,{genres:y}),(0,b.jsx)(o,{runtime:h,revenue:g,production_countries:_,tagline:v}),(0,b.jsx)(s,{})]})]})})})})},T=()=>{let[e,t]=(0,y.useState)(null),[n,i]=(0,y.useState)(!1),{id:a}=r();return console.log(`🚀 ~ MovieDetailsPage ~ id:`,a),(0,y.useEffect)(()=>{(async()=>{try{i(!0),t(await v(a))}catch(e){console.error(e)}finally{i(!1)}})()},[a]),e?(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(`div`,{className:`movie-details`,children:[n&&(0,b.jsx)(c,{}),(0,b.jsx)(w,{movie:e}),(0,b.jsxs)(`div`,{className:`tab-content`,children:[(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{}),(0,b.jsx)(`hr`,{className:`divider`}),(0,b.jsx)(`li`,{})]}),(0,b.jsx)(g,{})]})]})}):null};export{T as default};