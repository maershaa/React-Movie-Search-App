import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{a as n,c as r,d as i,i as a,r as o,t as s}from"./iconBase-55VGzWiC.js";import{a as c,c as l,d as u,f as d,i as f,l as p,t as m,u as h}from"./index-BPt9qAdz.js";import"./CastList-u9G_f0Yw.js";var g=`/React-Movie-Search-App/assets/no-poster-DPZEAbfg.png`,_=`/React-Movie-Search-App/assets/no-backdrop-E_I-G8xw.png`,v=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,y=`https://api.themoviedb.org/3`,b=`https://image.tmdb.org/t/p/`,x=`c23a5d8272617f6f7021ba4c498464ff`,S=(e,t=500)=>e?`${b}w${t}${e}`:g,C=(e,t=1280)=>e?`${b}w${t}${e}`:_,w=(e,t=185)=>e?`${b}w${t}${e}`:null,T={method:`GET`,headers:{accept:`application/json`,Authorization:v}},ee=async(e=1)=>{let t=`api_key=${x}&page=${e}`,n=await fetch(`${y}/trending/movie/week?${t}`,T);if(!n.ok)throw console.error(`Failed to fetch trending movies`),Error(n.statusText);return n.json()},E=async(e=1)=>{let t=await fetch(`${y}/movie/top_rated?api_key=${x}&language=en-US&page=${e}`,T);if(!t.ok)throw console.error(`Failed to fetch top rated movies`),Error(t.statusText);return t.json()},D=async(e,t=1)=>{let n=await fetch(`${y}/movie/${e}?api_key=${x}&page=${t}`,T);if(!n.ok)throw console.error(`Failed to fetch movie details`),Error(n.statusText);return n.json()},O=async(e,t=1)=>{let n=await fetch(`${y}/search/movie?api_key=${x}&query=${e}&page=${t}&primary_release_year=2025&include_adult=true&language=en-US`,T);if(!n.ok)throw Error(n.statusText);return n.json()},te=async e=>{let t=await fetch(`${y}/movie/${e}/reviews?api_key=${x}`,T);if(!t.ok)throw Error(t.statusText);return t.json()},ne=async()=>{let e=await fetch(`${y}/genre/movie/list?api_key=${x}`);if(!e.ok)throw console.error(`Failed to fetch genres`),Error(e.statusText);return e.json()},re=async()=>{let e=await fetch(`${y}/genre/tv/list?api_key=${x}`);if(!e.ok)throw Error(e.statusText);return e.json()},ie=d.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 20px;
`,k=t(),ae=({mediaArray:e,openModal:t})=>(0,k.jsx)(ie,{children:e.map(e=>(0,k.jsx)(A,{movie:e,openModal:t},e.id))}),oe=d.li`
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

    border-radius: 8px;
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
`,A=({movie:e,openModal:t})=>{let{title:n,original_name:r,poster_path:i,vote_average:a,release_date:o,first_air_date:s}=e;return(0,k.jsxs)(oe,{className:`movie-card`,onClick:()=>t(e),children:[(0,k.jsx)(`div`,{className:`movie-card__poster-wrapper`,children:(0,k.jsx)(`img`,{src:S(i,500),alt:n||r,className:`movie-card__poster`,loading:`lazy`,onError:e=>{e.target.src=g}})}),(0,k.jsxs)(`div`,{className:`movie-card__content`,children:[(0,k.jsx)(`h4`,{className:`movie-card__title`,children:n||r}),(0,k.jsxs)(`div`,{className:`movie-card__meta`,children:[(0,k.jsx)(J,{rating:a}),(0,k.jsx)(Y,{date:o||s})]})]})]})},j=d.ul`
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
`,M=({genres:e})=>(0,k.jsx)(j,{children:e.map(e=>(0,k.jsx)(`li`,{className:`genre-tag`,children:(0,k.jsxs)(`span`,{children:[` `,e.name]})},e.id))}),N=({countries:e})=>e?.length?(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`span`,{className:`details__label`,children:`Countries: `}),e.map((t,n)=>(0,k.jsxs)(`span`,{className:`details__value`,children:[t.iso_3166_1,n<e.length-1?`, `:``]},t.iso_3166_1))]}):null;function P(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z`},child:[]}]})(e)}var F=d.div`
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
`,I=e(i(),1),L=({placeholder:e=``,updateQueryString:t})=>{let[n,r]=(0,I.useState)(``),i=e=>{e.key===`Enter`&&o(n)},a=()=>{r(``)},o=e=>{e&&(t(e),a())};return(0,k.jsxs)(F,{children:[(0,k.jsx)(`input`,{type:`text`,className:`search-input`,value:n,onChange:e=>r(e.target.value),placeholder:e,onKeyDown:i}),(0,k.jsx)(`button`,{type:`button`,onClick:()=>o(n),children:(0,k.jsx)(P,{className:`search-icon`})})]})},R=d.div`
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
`,z=({movie:e,closeModal:t})=>{let[n,r]=(0,I.useState)([]);(0,I.useEffect)(()=>{ne().then(e=>r(e.genres)).catch(e=>console.error(e))},[]);let{original_title:i,adult:a,release_date:s,genre_ids:c,media_type:l=`movie`,overview:u,backdrop_path:d}=e,f=(0,I.useMemo)(()=>n.filter(e=>c?.includes(e.id)),[n,c]);return e?(0,k.jsx)(R,{children:(0,k.jsxs)(`article`,{children:[(0,k.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${C(d,1280)})`},children:[(0,k.jsx)(h,{closeModal:t}),(0,k.jsx)(`h2`,{className:`modal__title`,children:i})]}),(0,k.jsxs)(`section`,{className:`modal__content`,children:[(0,k.jsxs)(`div`,{className:`modal__info`,children:[(0,k.jsx)(`span`,{className:`modal__year`,children:s?.substring(0,4)}),a&&(0,k.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,k.jsx)(`span`,{className:`modal__mediaType`,children:l}),(0,k.jsx)(M,{genres:f})]}),(0,k.jsx)(`p`,{className:`modal__overview`,children:u}),(0,k.jsx)(o,{to:`/movies/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})}):null},B=d.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  padding: 20px;
`,V=d.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  gap: 20px;

  margin-top: 20px;
`,H=d.div`
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
`,U=d.div`
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
`,W=({review:e,reviewDateText:t,closeModal:n})=>{let{author_details:{username:r,avatar_path:i,rating:a},content:o,created_at:s}=e,c=w(i,185);return(0,k.jsxs)(B,{children:[(0,k.jsx)(h,{closeModal:n}),(0,k.jsxs)(V,{children:[(0,k.jsx)(l,{src:c,name:r,variant:`circle`}),(0,k.jsxs)(H,{children:[(0,k.jsxs)(`p`,{className:`review__user-name`,children:[`@`,r]}),(0,k.jsx)(`p`,{className:`review__date`,children:t})]})]}),(0,k.jsxs)(U,{children:[(0,k.jsx)(`div`,{className:`review__ratingStars_wrapper`,children:(0,k.jsx)(f,{rating:a,created_at:s})}),(0,k.jsx)(`p`,{className:`review__text`,children:o})]})]})},G=d.li`
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
`,K=d.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,q=d.div`
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
`,se=d.div`
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
`,ce=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,[o,s]=(0,I.useState)(!1),[c,u]=(0,I.useState)(null),d=new Date-new Date(a),m=Math.floor(d/(1e3*60)),h=Math.floor(d/(1e3*60*60)),g=Math.floor(d/(1e3*60*60*24)),_;_=m<60?`${m} minutes ago`:h<24?`${h} hours ago`:`${g} days ago`;let v=e=>{u(e),s(!0)},y=()=>{s(!1),u(null)};return(0,k.jsxs)(G,{onClick:()=>v(e),children:[(0,k.jsxs)(K,{children:[(0,k.jsx)(l,{src:w(n,185),name:t,variant:`circle`}),(0,k.jsxs)(q,{children:[(0,k.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,k.jsx)(`p`,{className:`review__date`,children:_})]})]}),(0,k.jsx)(f,{rating:r,created_at:a}),(0,k.jsx)(se,{children:(0,k.jsx)(`p`,{className:`review__text`,children:i})}),o&&(0,k.jsx)(p,{closeModal:y,children:(0,k.jsx)(W,{review:c,reviewDateText:_,closeModal:y})})]})},le=d.div`
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
`,ue=({runtime:e,revenue:t,production_countries:n,tagline:r})=>(0,k.jsxs)(le,{children:[(0,k.jsx)(me,{runtime:e}),(0,k.jsx)(pe,{revenue:t}),(0,k.jsx)(N,{countries:n}),(0,k.jsx)(`p`,{className:`tagline`,children:r})]}),de=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .star-icon {
    color: var(--primary-color);
  }

  span {
    color: var(--white);

    font-weight: 700;
    font-size: 1.2rem;
  }
`,J=({rating:e})=>(0,k.jsxs)(de,{children:[(0,k.jsx)(c,{className:`star-icon`}),(0,k.jsx)(`span`,{children:e.toFixed(1)})]}),fe=d.p`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.2rem;
`,Y=({date:e})=>e?(0,k.jsx)(fe,{children:e.substring(0,4)}):null,pe=({revenue:e})=>{if(!e)return null;let t=e.toLocaleString(`ru-RU`);return(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`span`,{className:`details__label`,children:`Revenue: `}),(0,k.jsxs)(`span`,{className:`details__value`,children:[`$`,t]})]})},me=({runtime:e})=>{if(!e)return null;let t=Math.floor(e/60),n=e%60;return(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`span`,{className:`details__label`,children:`Runtime: `}),(0,k.jsxs)(`span`,{className:`details__value`,children:[t>0&&`${t}h `,n,`m`]})]})},he=d.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`,X=d.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,Z=({vote_average:e,vote_count:t,release_date:n})=>(0,k.jsxs)(he,{children:[(0,k.jsx)(J,{rating:e}),(0,k.jsx)(X,{}),(0,k.jsx)(_e,{count:t}),(0,k.jsx)(X,{}),(0,k.jsx)(Y,{date:n})]}),ge=d.span`
  color: var(--text-color);
  font-size: 1rem;
`,_e=({count:e})=>{let t=e??0;return(0,k.jsxs)(ge,{children:[t>=1e3?`${(t/1e3).toFixed(1).replace(`.0`,``)}K+`:t,` Review`,t===1?``:`s`]})},ve=d.section``,ye=d.div`
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
`,be=d.div`
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
`,xe=({movie:e})=>{if(!e)return null;let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:c,revenue:l,production_countries:d,tagline:f,genres:p}=e,h=S(t,1280),g=C(n,500);return(0,k.jsx)(ve,{children:(0,k.jsx)(ye,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${h})`},children:(0,k.jsx)(m,{children:(0,k.jsxs)(`div`,{className:`movie-content`,children:[(0,k.jsx)(`img`,{src:g,alt:r,className:`movie-poster`,loading:`lazy`}),(0,k.jsxs)(be,{children:[(0,k.jsx)(`h1`,{className:`movie__title`,children:r}),(0,k.jsx)(Z,{vote_average:i,vote_count:a,release_date:s}),(0,k.jsx)(`p`,{className:`movie__overview`,children:o}),(0,k.jsx)(M,{genres:p}),(0,k.jsx)(ue,{runtime:c,revenue:l,production_countries:d,tagline:f}),(0,k.jsx)(u,{})]})]})})})})},Se=d.div`
  width: 100%;
  margin-top: 32px;
`,Ce=d.ul`
  display: flex;
  align-items: center;
  /* gap: 40px; */

  padding-bottom: 2px;
  margin-bottom: 28px;

  border-bottom: 1px solid var(--border-color);
`,Q=d.li`
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
`,we=()=>(0,k.jsxs)(Se,{children:[(0,k.jsxs)(Ce,{children:[(0,k.jsx)(Q,{children:(0,k.jsx)(a,{to:`cast`,className:({isActive:e})=>e?`active`:``,children:`Cast`})}),(0,k.jsx)(Q,{children:(0,k.jsx)(a,{to:`reviews`,className:({isActive:e})=>e?`active`:``,children:`Reviews`})})]}),(0,k.jsx)(n,{})]}),Te=d.div`
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
`,Ee=()=>(0,k.jsxs)(Te,{children:[(0,k.jsx)(`h2`,{className:`no-reviews__title`,children:`There are no reviews yet`}),(0,k.jsx)(`p`,{className:`no-reviews__text`,children:`Be the first to share your thoughts!`})]}),De=d.div`
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
`,$=({seriesItem:e,closeModal:t})=>{let[n,r]=(0,I.useState)([]);(0,I.useEffect)(()=>{re().then(e=>r(e.genres)).catch(e=>console.error(e))},[]);let{original_name:i,first_air_date:a,adult:s,genre_ids:c,overview:l,backdrop_path:u}=e,d=(0,I.useMemo)(()=>n.filter(e=>{if(c.includes(e.id))return e.name}),[c,n]);return(0,k.jsx)(De,{children:(0,k.jsxs)(`article`,{children:[(0,k.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${S(u,1280)})`},children:[(0,k.jsx)(h,{closeModal:t}),(0,k.jsx)(`h2`,{className:`modal__title`,children:i})]}),(0,k.jsxs)(`section`,{className:`modal__content`,children:[(0,k.jsxs)(`div`,{className:`modal__info`,children:[(0,k.jsx)(`span`,{className:`modal__year`,children:a?.substring(0,4)}),s&&(0,k.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,k.jsx)(`span`,{className:`modal__mediaType`,children:`series`}),(0,k.jsx)(M,{genres:d})]}),(0,k.jsx)(`p`,{className:`modal__overview`,children:l}),(0,k.jsx)(o,{to:`/series/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})})},Oe=d.section``,ke=d.div`
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
`,Ae=d.div`
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
`,je=({seriesItem:e})=>{let{backdrop_path:t,poster_path:n,name:r,number_of_seasons:i,number_of_episodes:a,vote_average:o,vote_count:s,overview:c,first_air_date:l,production_countries:d,tagline:f,genres:p}=e;console.log(`seriesItem в SeriesInfo:`,e);let h=S(t,1280),g=C(n,500);return(0,k.jsx)(Oe,{children:(0,k.jsx)(ke,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${h})`},children:(0,k.jsx)(m,{children:(0,k.jsxs)(`div`,{className:`movie-content`,children:[(0,k.jsx)(`img`,{src:g,alt:r,className:`movie-poster`,loading:`lazy`}),(0,k.jsxs)(Ae,{children:[(0,k.jsx)(`h1`,{className:`movie__title`,children:r}),(0,k.jsx)(Z,{vote_average:o,vote_count:s,release_date:l}),(0,k.jsx)(`p`,{className:`movie__overview`,children:c}),(0,k.jsx)(M,{genres:p}),(0,k.jsx)(Pe,{seasons:i,episodes:a,countries:d,tagline:f}),(0,k.jsx)(u,{})]})]})})})})},Me=d.div`
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
`,Ne=d.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,Pe=({seasons:e,episodes:t,countries:n,tagline:r})=>(0,k.jsxs)(Me,{children:[(0,k.jsxs)(`div`,{className:`meta__main`,children:[(0,k.jsxs)(`div`,{className:`meta__item`,children:[(0,k.jsxs)(`span`,{className:`details__value`,children:[e,` `]}),(0,k.jsx)(`span`,{className:`details__label`,children:` seasons`})]}),(0,k.jsx)(Ne,{}),(0,k.jsxs)(`div`,{className:`meta__item`,children:[(0,k.jsxs)(`span`,{className:`details__value`,children:[t,` `]}),(0,k.jsx)(`span`,{className:`details__label`,children:`episodes`})]})]}),(0,k.jsx)(N,{countries:n}),(0,k.jsx)(`p`,{className:`tagline`,children:r})]}),Fe=d.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,Ie=d.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin: 20px auto 50px auto;
`,Le=()=>{let{id:e}=r(),[t,n]=(0,I.useState)([]);return(0,I.useEffect)(()=>{(async()=>{try{n((await te(e)).results)}catch(e){console.error(e)}})()},[e]),t.length===0?(0,k.jsx)(Ee,{}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Fe,{children:[`User Reviews `,(0,k.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,k.jsx)(Ie,{children:t.map(e=>(0,k.jsx)(ce,{review:e},e.id))})]})};export{xe as a,ae as c,ee as d,O as f,y as h,we as i,D as l,v as m,je as n,z as o,x as p,$ as r,L as s,Le as t,E as u};