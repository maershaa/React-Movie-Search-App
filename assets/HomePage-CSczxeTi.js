import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{n}from"./iconBase-9lgntgEJ.js";import{a as r,i,n as a,r as o,t as s}from"./index-C5F4mGlJ.js";var c=r.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .movie-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 20px;
  }
`,l=e(n(),1),u=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,d=`https://api.themoviedb.org/3`,f=`https://image.tmdb.org/t/p/w300/`,p=`c23a5d8272617f6f7021ba4c498464ff`,m={method:`GET`,headers:{accept:`application/json`,Authorization:u}},h=async()=>{let e=await fetch(`${d}/trending/movie/week?api_key=${p}`,m);if(!e.ok)throw Error(e.statusText);return e.json()},g=t(),_=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>(h().then(e=>{console.log(e);let n=e.results;t(n)}).catch(e=>console.error(e)),()=>{}),[]),(0,g.jsxs)(c,{children:[(0,g.jsxs)(`div`,{className:`hero`,children:[(0,g.jsx)(`h2`,{className:`section-title`,children:`Trending Movies`}),(0,g.jsx)(o,{})]}),(0,g.jsxs)(`section`,{className:`movies-section`,children:[(0,g.jsxs)(`ul`,{className:`movie-list`,children:[e.map(({id:e,title:t,poster_path:n,vote_average:r,release_date:a})=>(0,g.jsx)(s,{title:t,poster:n?`${f}${n}`:i,rating:r.toFixed(1),release_year:a.substring(0,4)},e)),(0,g.jsx)(s,{})]}),(0,g.jsx)(a,{})]})]})};export{_ as default};