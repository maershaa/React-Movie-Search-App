import{a as e,g as t,h as n,i as r,l as i,n as a,o,p as s,t as c,u as l}from"./iconBase-02BbQUN6.js";import{a as u,c as d,d as f,f as p,h as m,m as h,n as g,o as _,p as v,s as y,t as b}from"./index-BCMsx9Ae.js";var x=`/React-Movie-Search-App/assets/no-poster-DPZEAbfg.png`,ee=`/React-Movie-Search-App/assets/no-backdrop-E_I-G8xw.png`,S=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,C=`https://api.themoviedb.org/3`,w=`https://image.tmdb.org/t/p/`,T=`c23a5d8272617f6f7021ba4c498464ff`,E=(e,t=500)=>e?`${w}w${t}${e}`:x,D=(e,t=1280)=>e?`${w}w${t}${e}`:ee,O=(e,t=185)=>e?`${w}w${t}${e}`:null,k={method:`GET`,headers:{accept:`application/json`,Authorization:S}},A=async(e=1)=>{let t=`api_key=${T}&page=${e}`,n=await fetch(`${C}/trending/movie/week?${t}`,k);if(!n.ok)throw console.error(`Failed to fetch trending movies`),Error(n.statusText);return n.json()},j=async(e=1)=>{let t=await fetch(`${C}/movie/top_rated?api_key=${T}&language=en-US&page=${e}`,k);if(!t.ok)throw console.error(`Failed to fetch top rated movies`),Error(t.statusText);return t.json()},M=async e=>{let t=await fetch(`${C}/movie/${e}?api_key=${T}`,k);if(!t.ok)throw console.error(`Failed to fetch movie details`),Error(t.statusText);return t.json()},te=async(e,t=1)=>{let n=await fetch(`${C}/search/movie?api_key=${T}&query=${e}&page=${t}&primary_release_year=2025&language=en-US`,k);if(!n.ok)throw Error(n.statusText);return n.json()},ne=async e=>{let t=await fetch(`${C}/movie/${e}/reviews?api_key=${T}`,k);if(!t.ok)throw Error(t.statusText);return t.json()},re=async e=>{let t=await fetch(`${C}/movie/${e}/credits?api_key=${T}`);if(!t.ok)throw Error(t.statusText);return t.json()},ie=async()=>{let e=await fetch(`${C}/genre/movie/list?api_key=${T}`);if(!e.ok)throw console.error(`Failed to fetch genres`),Error(e.statusText);return e.json()},ae=async()=>{let e=await fetch(`${C}/genre/tv/list?api_key=${T}`);if(!e.ok)throw Error(e.statusText);return e.json()},N={method:`GET`,headers:{accept:`application/json`,Authorization:S}},oe=async(e=1)=>{let t=await fetch(`${C}/tv/popular?api_key=${T}&page=${e}`,N);if(!t.ok)throw Error(t.statusText);return t.json()},se=async e=>{let t=await fetch(`${C}/tv/${e}?api_key=${T}`,N);if(!t.ok)throw Error(t.statusText);return t.json()},P=async e=>{let t=await fetch(`${C}/tv/${e}/reviews?api_key=${T}`);if(!t.ok)throw Error(t.statusText);return t.json()},F=async e=>{let t=await fetch(`${C}/tv/${e}/credits?api_key=${T}`);if(!t.ok)throw Error(t.statusText);return t.json()},I=m.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;

  gap: 16px;
  margin: 20px auto 50px auto;

  padding: 10px 0;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 20px;
  }
`,L=m.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 20px;
`,R=a(),z=({mediaArray:e,openModal:t})=>(0,R.jsx)(L,{children:e.map(e=>(0,R.jsx)(V,{movie:e,openModal:t},e.id))}),B=m.li`
  width: 300px;

  padding: 10px;
  overflow: hidden;

  cursor: pointer;

  background-color: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: var(--transition);

  /* Чтобы свечение не обрезалось, если родитель имеет overflow: hidden */
  position: relative;

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);

    transform: translateY(-4px);
  }

  .movie-card__poster-wrapper {
    /* width: 130px;
    height: 180px; */
  }

  img {
    max-width: 280px;
    max-height: 350px;

    border-radius: var(--radius-xs);
  }

  .movie-card__content {
    padding: 15px 25px 10px 25px;
  }

  .movie-card__title {
    white-space: nowrap;
    overflow: hidden; /* Скрыть текст, который не помещается */
    text-overflow: ellipsis; /* Добавить троеточие ... */

    margin-bottom: 10px;
  }
  .movie-card__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,V=({movie:e,openModal:t})=>{let{title:n,original_name:r,poster_path:i,vote_average:a,release_date:o,first_air_date:s}=e;return(0,R.jsxs)(B,{className:`movie-card`,onClick:()=>t(e),children:[(0,R.jsx)(`div`,{className:`movie-card__poster-wrapper`,children:(0,R.jsx)(`img`,{src:E(i,500),alt:n||r,className:`movie-card__poster`,loading:`lazy`,onError:e=>{e.target.src=x}})}),(0,R.jsxs)(`div`,{className:`movie-card__content`,children:[(0,R.jsx)(`h4`,{className:`movie-card__title`,children:n||r}),(0,R.jsxs)(`div`,{className:`movie-card__meta`,children:[(0,R.jsx)(J,{rating:a}),(0,R.jsx)(Q,{date:o||s})]})]})]})},H=m.ul`
  display: flex;
  gap: 8px;
  list-style: none;

  li {
    padding: 4px 8px;
    background: var(--accent);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xs);
    color: var(--text-secondary);
  }
`,U=({genres:e})=>(0,R.jsx)(H,{children:e.map(e=>(0,R.jsx)(`li`,{className:`genre-tag`,children:(0,R.jsxs)(`span`,{children:[` `,e.name]})},e.id))}),W=({countries:e})=>e?.length?(0,R.jsxs)(`p`,{children:[(0,R.jsx)(`span`,{className:`details__label`,children:`Countries: `}),e.map((t,n)=>(0,R.jsxs)(`span`,{className:`details__value`,children:[t.iso_3166_1,n<e.length-1?`, `:``]},t.iso_3166_1))]}):null,G=m.div`
  width: 100%;
  margin-top: 32px;
`,K=m.ul`
  display: flex;
  align-items: center;
  /* gap: 40px; */

  padding-bottom: 2px;
  margin-bottom: 28px;

  border-bottom: 1px solid var(--border-color);
`,q=m.li`
  a {
    position: relative;
    display: inline-block;

    padding: 14px 120px 14px 5px;

    font-size: 1.4rem;
    font-weight: 500;

    color: var(--text-secondary);
    text-decoration: none;

    transition: var(--transition);
  }

  a:hover {
    color: var(--text-color);
  }

  a.active {
    color: var(--primary-color);
  }

  a.active::after {
    content: '';
    position: absolute;

    left: 0;
    bottom: -3px;

    width: 100%;
    height: 3px;

    border-radius: 20px;
    background: var(--primary-color);
  }
`,ce=()=>(0,R.jsxs)(G,{children:[(0,R.jsxs)(K,{children:[(0,R.jsx)(q,{children:(0,R.jsx)(e,{to:`cast`,className:({isActive:e})=>e?`active`:``,children:`Cast`})}),(0,R.jsx)(q,{children:(0,R.jsx)(e,{to:`reviews`,className:({isActive:e})=>e?`active`:``,children:`Reviews`})})]}),(0,R.jsx)(o,{})]}),le=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .star-icon {
    color: var(--primary-color);
  }

  span {
    color: var(--text-color);

    font-weight: 700;
    font-size: 1.2rem;
  }
`,J=({rating:e})=>(0,R.jsxs)(le,{children:[(0,R.jsx)(d,{className:`star-icon`}),(0,R.jsx)(`span`,{children:e.toFixed(1)})]}),ue=m.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`,Y=m.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,X=({vote_average:e,vote_count:t,release_date:n})=>(0,R.jsxs)(ue,{children:[(0,R.jsx)(J,{rating:e}),(0,R.jsx)(Y,{}),(0,R.jsx)(Me,{count:t}),(0,R.jsx)(Y,{}),(0,R.jsx)(Q,{date:n})]});function de(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z`},child:[]}]})(e)}var fe=m.div`
  margin: 0 auto 25px auto;
  max-width: 50vw;

  position: relative;

  &:focus-within {
    //focus-within - способ "поднять" состояние фокуса с input на родителя
    border-color: var(--primary-color);
    border-radius: var(--radius-lg);
    box-shadow: var(--focus-ring);
  }

  input {
    width: 100%;
    padding: 10px 44px 10px 14px; /* справа место под кнопку */
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    background-color: var(--input-bg);
    color: var(--text-color);
    font-family: var(--font-main);

    box-shadow: var(--shadow);
    outline: none;
    transition: var(--transition);
  }

  input::placeholder {
    color: var(--text-secondary);
  }

  input:focus {
    border-radius: var(--radius-lg);
    border-color: var(--primary-color);
    box-shadow: var(--focus-ring);
  }

  .search-icon {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);

    width: 34px;
    height: 34px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--primary-color);
    color: var(--white);

    border-radius: 50%;
    cursor: pointer;

    transition: var(--transition);
  }

  .search-icon:hover {
    background-color: var(--accent-color);
    transform: translateY(-50%) scale(1.05);
  }
`,Z=t(s(),1),pe=({placeholder:e=``,updateQueryString:t})=>{let[n,r]=(0,Z.useState)(``),i=e=>{e.key===`Enter`&&o(n)},a=()=>{r(``)},o=e=>{e&&(t(e),a())};return(0,R.jsxs)(fe,{children:[(0,R.jsx)(`input`,{type:`text`,className:`search-input`,value:n,onChange:e=>r(e.target.value),placeholder:e,onKeyDown:i}),(0,R.jsx)(`button`,{type:`button`,onClick:()=>o(n),children:(0,R.jsx)(de,{className:`search-icon`})})]})},me=m.div`
  max-width: 1000px;
  margin: 0 auto;

  color: var(--text-color);

  border-radius: 12px;
  font-family: system-ui, sans-serif;

  article {
    display: flex;
    flex-direction: column;
  }

  .modal__header {
    position: relative;

    width: 100%;
    height: 56.25vw;
    max-height: 500px;

    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;

    overflow: hidden;
  }

  .modal__title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 2;

    font-size: 2rem;
    font-weight: 700;

    color: #fff;
  }

  .modal__header::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, transparent 60%),
      linear-gradient(to right, rgba(0, 0, 0, 0.8) 20%, transparent 60%);
  }

  .modal__content {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    padding: 20px;
  }

  .modal__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 10px;
  }

  .modal__year,
  .modal__age,
  .modal__mediaType {
    padding: 4px 8px;
    background: var(--accent);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xs);
    color: var(--text-secondary);
  }

  .modal__overview {
    margin: 20px 0 20px 0;
    text-align: left;
  }

  .modal__info-btn {
    background: var(--accent);
    color: var(--primary-color);

    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);

    font-weight: 600;

    cursor: pointer;

    transition: var(--transition);

    &:hover {
      background: var(--primary-color);
      color: var(--white);
      border: 1px solid var(--primary-color);
    }
  }
`,he=({movie:e,closeModal:t})=>{let[n,a]=(0,Z.useState)([]),o=i();(0,Z.useEffect)(()=>{ie().then(e=>a(e.genres)).catch(e=>console.error(e))},[]);let{original_title:s,adult:c,release_date:l,genre_ids:u,media_type:d=`movie`,overview:f,backdrop_path:p}=e,m=(0,Z.useMemo)(()=>n.filter(e=>u?.includes(e.id)),[n,u]);return e?(0,R.jsx)(me,{children:(0,R.jsxs)(`article`,{children:[(0,R.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${D(p,1280)})`},children:[(0,R.jsx)(v,{closeModal:t}),(0,R.jsx)(`h2`,{className:`modal__title`,children:s})]}),(0,R.jsxs)(`section`,{className:`modal__content`,children:[(0,R.jsxs)(`div`,{className:`modal__info`,children:[(0,R.jsx)(`span`,{className:`modal__year`,children:l?.substring(0,4)}),c&&(0,R.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,R.jsx)(`span`,{className:`modal__mediaType`,children:d}),(0,R.jsx)(U,{genres:m})]}),(0,R.jsx)(`p`,{className:`modal__overview`,children:f}),(0,R.jsx)(r,{to:`/movies/${e.id}`,state:{from:o.pathname+o.search},className:`modal__info-btn`,children:`More Info`})]})]})}):null},ge=m.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  padding: 20px;
`,_e=m.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  gap: 20px;

  margin-top: 20px;
`,ve=m.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 140px;
  width: 100%;

  margin-bottom: 10px;

  .review__user-name {
    color: var(--text-color);
    font-weight: 700;
  }

  .review__date {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
`,ye=m.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  .review__ratingStars_wrapper {
    padding: 0 20px;
  }

  p {
    padding: 10px;
    text-align: justify;

    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;

    font-style: italic;
  }
`,be=({review:e,reviewDateText:t,closeModal:n})=>{let{author_details:{username:r,avatar_path:i,rating:a},content:o,created_at:s}=e,c=O(i,185);return(0,R.jsxs)(ge,{children:[(0,R.jsx)(v,{closeModal:n}),(0,R.jsxs)(_e,{children:[(0,R.jsx)(f,{src:c,name:r,variant:`circle`}),(0,R.jsxs)(ve,{children:[(0,R.jsxs)(`p`,{className:`review__user-name`,children:[`@`,r]}),(0,R.jsx)(`p`,{className:`review__date`,children:t})]})]}),(0,R.jsxs)(ye,{children:[(0,R.jsx)(`div`,{className:`review__ratingStars_wrapper`,children:(0,R.jsx)(y,{rating:a,created_at:s})}),(0,R.jsx)(`p`,{className:`review__text`,children:o})]})]})},xe=m.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  border: 1px solid var(--border-color); /* Тонкая рамка для четкости */
  border-radius: var(--radius-sm);
  background-color: var(--card-secondary-color);
  box-shadow: var(--shadow);

  max-width: 500px;
  max-height: 250px;

  overflow: auto;
  margin: 0 auto;
  padding: 20px;

  transition: var(--transition);

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);
    cursor: pointer;
  }
`,Se=m.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,Ce=m.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;

  .review__user-name {
    color: var(--text-color);
    font-weight: 700;
  }

  .review__date {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
`,we=m.div`
  .review__text {
    padding: 10px;
    text-align: justify;

    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* сколько строк показывать */
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 2;
    word-break: break-word;
  }
`,Te=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,[o,s]=(0,Z.useState)(!1),[c,l]=(0,Z.useState)(null),u=new Date-new Date(a),d=Math.floor(u/(1e3*60)),m=Math.floor(u/(1e3*60*60)),h=Math.floor(u/(1e3*60*60*24)),g;g=d<60?`${d} minutes ago`:m<24?`${m} hours ago`:`${h} days ago`;let _=e=>{l(e),s(!0)},v=()=>{s(!1),l(null)};return(0,R.jsxs)(xe,{onClick:()=>_(e),children:[(0,R.jsxs)(Se,{children:[(0,R.jsx)(f,{src:O(n,185),name:t,variant:`circle`}),(0,R.jsxs)(Ce,{children:[(0,R.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,R.jsx)(`p`,{className:`review__date`,children:g})]})]}),(0,R.jsx)(y,{rating:r,created_at:a}),(0,R.jsx)(we,{children:(0,R.jsx)(`p`,{className:`review__text`,children:i})}),o&&(0,R.jsx)(p,{closeModal:v,children:(0,R.jsx)(be,{review:c,reviewDateText:g,closeModal:v})})]})},Ee=m.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  margin: 16px 0;

  .details__label {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1rem;
  }

  .details__value {
    font-size: 1rem;
  }

  .tagline {
    font-style: italic;
    font-size: 1rem;

    /* левая граница для цитаты */
    border-left: 3px solid var(--accent-color);
    padding-left: 15px;
  }
`,De=({runtime:e,revenue:t,production_countries:n,tagline:r})=>(0,R.jsxs)(Ee,{children:[(0,R.jsx)(Ae,{runtime:e}),(0,R.jsx)(ke,{revenue:t}),(0,R.jsx)(W,{countries:n}),(0,R.jsx)(`p`,{className:`tagline`,children:r})]}),Oe=m.p`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.2rem;
`,Q=({date:e})=>e?(0,R.jsx)(Oe,{children:e.substring(0,4)}):null,ke=({revenue:e})=>{if(!e)return null;let t=e.toLocaleString(`ru-RU`);return(0,R.jsxs)(`p`,{children:[(0,R.jsx)(`span`,{className:`details__label`,children:`Revenue: `}),(0,R.jsxs)(`span`,{className:`details__value`,children:[`$`,t]})]})},Ae=({runtime:e})=>{if(!e)return null;let t=Math.floor(e/60),n=e%60;return(0,R.jsxs)(`p`,{children:[(0,R.jsx)(`span`,{className:`details__label`,children:`Runtime: `}),(0,R.jsxs)(`span`,{className:`details__value`,children:[t>0&&`${t}h `,n,`m`]})]})},je=m.span`
  color: var(--text-color);
  font-size: 1rem;
`,Me=({count:e})=>{let t=e??0;return(0,R.jsxs)(je,{children:[t>=1e3?`${(t/1e3).toFixed(1).replace(`.0`,``)}K+`:t,` Review`,t===1?``:`s`]})},Ne=m.section``,Pe=m.div`
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
`,Fe=m.div`
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
`,Ie=({movie:e})=>{if(!e)return null;let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:c,revenue:l,production_countries:u,tagline:d,genres:f}=e,p=E(t,1280),m=D(n,500);return(0,R.jsx)(Ne,{children:(0,R.jsx)(Pe,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${p})`},children:(0,R.jsx)(b,{children:(0,R.jsxs)(`div`,{className:`movie-content`,children:[(0,R.jsx)(`img`,{src:m,alt:r,className:`movie-poster`,loading:`lazy`}),(0,R.jsxs)(Fe,{children:[(0,R.jsx)(`h1`,{className:`movie__title`,children:r}),(0,R.jsx)(X,{vote_average:i,vote_count:a,release_date:s}),(0,R.jsx)(`p`,{className:`movie__overview`,children:o}),(0,R.jsx)(U,{genres:f}),(0,R.jsx)(De,{runtime:c,revenue:l,production_countries:u,tagline:d}),(0,R.jsx)(h,{fallback:`movies`})]})]})})})})},Le=m.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,Re=m.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin: 20px auto 50px auto;
`,ze=n({default:()=>Be}),Be=()=>{let{id:e}=l(),[t,n]=(0,Z.useState)([]),[r,a]=(0,Z.useState)(!1),[o,s]=(0,Z.useState)(null),c=i(),d=(0,Z.useCallback)(async e=>{try{a(!0),s(``),c.pathname.includes(`movies`)?n((await ne(e)).results):c.pathname.includes(`series`)&&n((await P(e)).results)}catch{s(`Failed to load reviews`)}finally{a(!1)}},[c.pathname]);return(0,Z.useEffect)(()=>{e&&d(e)},[e,d]),r?(0,R.jsx)(u,{count:t.length}):o?(0,R.jsx)(g,{message:o,onRetry:()=>d(e)}):t.length===0?(0,R.jsx)(He,{}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(Le,{children:[`User Reviews `,(0,R.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,R.jsx)(Re,{children:t.map(e=>(0,R.jsx)(Te,{review:e},e.id))})]})},Ve=m.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 8px;

  .no-reviews-text {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }
`,He=()=>(0,R.jsxs)(Ve,{children:[(0,R.jsx)(`h2`,{className:`no-reviews__title`,children:`There are no reviews yet`}),(0,R.jsx)(`p`,{className:`no-reviews__text`,children:`Be the first to share your thoughts!`})]}),Ue=m.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  min-width: 180px;
  width: 180px;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--card-secondary-color);
  box-shadow: var(--shadow);

  margin: 0 auto;
  padding: 20px;
  transition: var(--transition);

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);
    cursor: pointer;
  }

  .cast__avatar-wrapper {
    padding: 10px;
    margin-bottom: 0.9rem;
  }
`,We=m.div`
  .cast__actor-name {
    font-weight: 700;
    margin-bottom: 0.9rem;
  }

  .cast__character-name {
    font-weight: 500;
    color: var(--text-color);

    width: 100%;
    min-width: 0;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Ge=({actor:e})=>{let{original_name:t,character:n,profile_path:r}=e;return(0,R.jsxs)(Ue,{children:[(0,R.jsx)(`div`,{className:`cast__avatar-wrapper`,children:(0,R.jsx)(f,{src:O(r,185),name:t,size:`145px`,variant:`circle`})}),(0,R.jsxs)(We,{children:[(0,R.jsx)(`h4`,{className:`cast__actor-name`,children:t}),(0,R.jsx)(`p`,{className:`cast__character-name`,children:n})]})]})},Ke=m.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 8px;

  .no-cast__title {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }
`,qe=()=>(0,R.jsx)(Ke,{children:(0,R.jsx)(`h2`,{className:`no-cast__title`,children:`No cast information available.`})}),Je=m.div`
  max-width: 1000px;
  margin: 0 auto;

  color: var(--text-color);

  border-radius: 12px;
  font-family: system-ui, sans-serif;

  article {
    display: flex;
    flex-direction: column;
  }

  .modal__header {
    position: relative;

    width: 100%;
    height: 56.25vw;
    max-height: 500px;

    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;

    overflow: hidden;
  }

  .modal__title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 2;

    font-size: 2rem;
    font-weight: 700;

    color: #fff;
  }

  .modal__header::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, transparent 60%),
      linear-gradient(to right, rgba(0, 0, 0, 0.8) 20%, transparent 60%);
  }

  .modal__content {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    padding: 20px;
  }

  .modal__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 10px;
  }

  .modal__year,
  .modal__age,
  .modal__mediaType {
    padding: 4px 8px;
    background: var(--accent);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xs);
    color: var(--text-secondary);
  }

  .modal__overview {
    margin: 20px 0 20px 0;
    text-align: left;
  }

  .modal__info-btn {
    background: var(--accent);
    color: var(--primary-color);

    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);

    font-weight: 600;

    cursor: pointer;

    transition: var(--transition);

    &:hover {
      background: var(--primary-color);
      color: var(--white);
      border: 1px solid var(--primary-color);
    }
  }
`,$=({seriesItem:e,closeModal:t})=>{let[n,a]=(0,Z.useState)([]),o=i();(0,Z.useEffect)(()=>{ae().then(e=>a(e.genres)).catch(e=>console.error(e))},[]);let{original_name:s,first_air_date:c,adult:l,genre_ids:u,overview:d,backdrop_path:f}=e,p=(0,Z.useMemo)(()=>n.filter(e=>u?.includes(e.id)),[n,u]);return e?(0,R.jsx)(Je,{children:(0,R.jsxs)(`article`,{children:[(0,R.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${E(f,1280)})`},children:[(0,R.jsx)(v,{closeModal:t}),(0,R.jsx)(`h2`,{className:`modal__title`,children:s})]}),(0,R.jsxs)(`section`,{className:`modal__content`,children:[(0,R.jsxs)(`div`,{className:`modal__info`,children:[(0,R.jsx)(`span`,{className:`modal__year`,children:c?.substring(0,4)}),l&&(0,R.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,R.jsx)(`span`,{className:`modal__mediaType`,children:`series`}),(0,R.jsx)(U,{genres:p})]}),(0,R.jsx)(`p`,{className:`modal__overview`,children:d}),(0,R.jsx)(r,{to:`/series/${e.id}`,state:{from:o.pathname+o.search},className:`modal__info-btn`,children:`More Info`})]})]})}):null},Ye=m.section``,Xe=m.div`
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
  .media-content {
    position: relative;
    z-index: 2;

    display: flex;
    gap: 32px;
    padding: 40px 60px;
    width: 100%;
  }

  /* ЛЕВАЯ ЧАСТЬ */
  .media-poster {
    max-width: 450px;
    max-height: 350px;
    border-radius: var(--radius-sm);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
  }
`,Ze=m.div`
  max-width: 750px;

  text-align: left;

  span,
  p {
    color: var(--white);
  }
  .media__title {
    margin-bottom: 20px;
    color: var(--white);
  }

  .media__overview {
    color: var(--text-color);
    margin: 16px 0;
    opacity: 0.85;
    color: var(--white);
  }
`,Qe=({seriesItem:e})=>{let{backdrop_path:t,poster_path:n,name:r,number_of_seasons:i,number_of_episodes:a,vote_average:o,vote_count:s,overview:c,first_air_date:l,production_countries:u,tagline:d,genres:f}=e,p=E(t,1280),m=D(n,500);return(0,R.jsx)(Ye,{children:(0,R.jsx)(Xe,{style:{backgroundImage:`url(${p})`},children:(0,R.jsx)(b,{children:(0,R.jsxs)(`div`,{className:`media-content`,children:[(0,R.jsx)(`img`,{src:m,alt:r,className:`media-poster`,loading:`lazy`}),(0,R.jsxs)(Ze,{children:[(0,R.jsx)(`h1`,{className:`media__title`,children:r}),(0,R.jsx)(X,{vote_average:o,vote_count:s,release_date:l}),(0,R.jsx)(`p`,{className:`media__overview`,children:c}),(0,R.jsx)(U,{genres:f}),(0,R.jsx)(tt,{seasons:i,episodes:a,countries:u,tagline:d}),(0,R.jsx)(h,{fallback:`series`})]})]})})})})},$e=m.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px 0;

  .meta__main {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .meta__item {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  .details__label {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1rem;
  }

  .details__value {
    font-size: 1rem;
  }

  .meta__item .details__label,
  .meta__item .details__value {
    color: var(--text-secondary);
    font-weight: 700;
  }

  .tagline {
    font-style: italic;
    font-size: 1rem;

    /* левая граница для цитаты */
    border-left: 3px solid var(--accent-color);
    padding-left: 15px;
  }
`,et=m.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,tt=({seasons:e,episodes:t,countries:n,tagline:r})=>(0,R.jsxs)($e,{children:[(0,R.jsxs)(`div`,{className:`meta__main`,children:[(0,R.jsxs)(`div`,{className:`meta__item`,children:[(0,R.jsxs)(`span`,{className:`details__value`,children:[e,` `]}),(0,R.jsx)(`span`,{className:`details__label`,children:` seasons`})]}),(0,R.jsx)(et,{}),(0,R.jsxs)(`div`,{className:`meta__item`,children:[(0,R.jsxs)(`span`,{className:`details__value`,children:[t,` `]}),(0,R.jsx)(`span`,{className:`details__label`,children:`episodes`})]})]}),(0,R.jsx)(W,{countries:n}),(0,R.jsx)(`p`,{className:`tagline`,children:r})]}),nt=n({default:()=>rt}),rt=()=>{let{id:e}=l(),[t,n]=(0,Z.useState)([]),[r,a]=(0,Z.useState)(!1),[o,s]=(0,Z.useState)(null),c=i(),u=(0,Z.useCallback)(async e=>{try{a(!0),s(``),c.pathname.includes(`movies`)?n((await re(e)).cast):c.pathname.includes(`series`)&&n((await F(e)).cast)}catch{s(`Failed to load cast`)}finally{a(!1)}},[c.pathname]);return(0,Z.useEffect)(()=>{e&&u(e)},[e,u]),r?(0,R.jsx)(_,{count:t.length}):o?(0,R.jsx)(g,{message:o,onRetry:()=>u(e)}):t.length===0?(0,R.jsx)(qe,{}):(0,R.jsx)(`div`,{className:`cast__scroll-wrapper`,children:(0,R.jsx)(I,{children:t.map(e=>(0,R.jsx)(Ge,{actor:e},e.cast_id))})})};export{Ie as a,ce as c,se as d,M as f,te as h,ze as i,z as l,A as m,Qe as n,he as o,j as p,$ as r,pe as s,nt as t,oe as u};