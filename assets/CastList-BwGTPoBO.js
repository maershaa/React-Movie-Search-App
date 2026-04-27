import{a as e,f as t,h as n,i as r,l as i,m as a,n as o,o as s,t as c}from"./iconBase-BQ9wkDtz.js";import{a as l,c as u,d,f,i as p,l as m,n as h,r as g,t as _,u as v}from"./index-BKInBrjX.js";var y=`/React-Movie-Search-App/assets/no-poster-DPZEAbfg.png`,b=`/React-Movie-Search-App/assets/no-backdrop-E_I-G8xw.png`,x=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,S=`https://api.themoviedb.org/3`,C=`https://image.tmdb.org/t/p/`,w=`c23a5d8272617f6f7021ba4c498464ff`,T=(e,t=500)=>e?`${C}w${t}${e}`:y,E=(e,t=1280)=>e?`${C}w${t}${e}`:b,D=(e,t=185)=>e?`${C}w${t}${e}`:null,O={method:`GET`,headers:{accept:`application/json`,Authorization:x}},k=async(e=1)=>{let t=`api_key=${w}&page=${e}`,n=await fetch(`${S}/trending/movie/week?${t}`,O);if(!n.ok)throw console.error(`Failed to fetch trending movies`),Error(n.statusText);return n.json()},A=async(e=1)=>{let t=await fetch(`${S}/movie/top_rated?api_key=${w}&language=en-US&page=${e}`,O);if(!t.ok)throw console.error(`Failed to fetch top rated movies`),Error(t.statusText);return t.json()},j=async e=>{let t=await fetch(`${S}/movie/${e}?api_key=${w}`,O);if(!t.ok)throw console.error(`Failed to fetch movie details`),Error(t.statusText);return t.json()},ee=async(e,t=1)=>{let n=await fetch(`${S}/search/movie?api_key=${w}&query=${e}&page=${t}&primary_release_year=2025&language=en-US`,O);if(!n.ok)throw Error(n.statusText);return n.json()},te=async e=>{let t=await fetch(`${S}/movie/${e}/reviews?api_key=${w}`,O);if(!t.ok)throw Error(t.statusText);return t.json()},ne=async e=>{let t=await fetch(`${S}/movie/${e}/credits?api_key=${w}`);if(!t.ok)throw Error(t.statusText);return t.json()},re=async()=>{let e=await fetch(`${S}/genre/movie/list?api_key=${w}`);if(!e.ok)throw console.error(`Failed to fetch genres`),Error(e.statusText);return e.json()},ie=async()=>{let e=await fetch(`${S}/genre/tv/list?api_key=${w}`);if(!e.ok)throw Error(e.statusText);return e.json()},ae=f.ul`
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
`,oe=f.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 20px;
`,M=o(),N=({mediaArray:e,openModal:t})=>(0,M.jsx)(oe,{children:e.map(e=>(0,M.jsx)(F,{movie:e,openModal:t},e.id))}),P=f.li`
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
`,F=({movie:e,openModal:t})=>{let{title:n,original_name:r,poster_path:i,vote_average:a,release_date:o,first_air_date:s}=e;return(0,M.jsxs)(P,{className:`movie-card`,onClick:()=>t(e),children:[(0,M.jsx)(`div`,{className:`movie-card__poster-wrapper`,children:(0,M.jsx)(`img`,{src:T(i,500),alt:n||r,className:`movie-card__poster`,loading:`lazy`,onError:e=>{e.target.src=y}})}),(0,M.jsxs)(`div`,{className:`movie-card__content`,children:[(0,M.jsx)(`h4`,{className:`movie-card__title`,children:n||r}),(0,M.jsxs)(`div`,{className:`movie-card__meta`,children:[(0,M.jsx)(J,{rating:a}),(0,M.jsx)(Y,{date:o||s})]})]})]})},I=f.ul`
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
`,L=({genres:e})=>(0,M.jsx)(I,{children:e.map(e=>(0,M.jsx)(`li`,{className:`genre-tag`,children:(0,M.jsxs)(`span`,{children:[` `,e.name]})},e.id))}),R=({countries:e})=>e?.length?(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`span`,{className:`details__label`,children:`Countries: `}),e.map((t,n)=>(0,M.jsxs)(`span`,{className:`details__value`,children:[t.iso_3166_1,n<e.length-1?`, `:``]},t.iso_3166_1))]}):null;function z(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z`},child:[]}]})(e)}var B=f.div`
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
`,V=n(t(),1),H=({placeholder:e=``,updateQueryString:t})=>{let[n,r]=(0,V.useState)(``),i=e=>{e.key===`Enter`&&o(n)},a=()=>{r(``)},o=e=>{e&&(t(e),a())};return(0,M.jsxs)(B,{children:[(0,M.jsx)(`input`,{type:`text`,className:`search-input`,value:n,onChange:e=>r(e.target.value),placeholder:e,onKeyDown:i}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>o(n),children:(0,M.jsx)(z,{className:`search-icon`})})]})},U=f.div`
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
`,W=({movie:e,closeModal:t})=>{let[n,i]=(0,V.useState)([]);(0,V.useEffect)(()=>{re().then(e=>i(e.genres)).catch(e=>console.error(e))},[]);let{original_title:a,adult:o,release_date:s,genre_ids:c,media_type:l=`movie`,overview:u,backdrop_path:d}=e,f=(0,V.useMemo)(()=>n.filter(e=>c?.includes(e.id)),[n,c]);return e?(0,M.jsx)(U,{children:(0,M.jsxs)(`article`,{children:[(0,M.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${E(d,1280)})`},children:[(0,M.jsx)(v,{closeModal:t}),(0,M.jsx)(`h2`,{className:`modal__title`,children:a})]}),(0,M.jsxs)(`section`,{className:`modal__content`,children:[(0,M.jsxs)(`div`,{className:`modal__info`,children:[(0,M.jsx)(`span`,{className:`modal__year`,children:s?.substring(0,4)}),o&&(0,M.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,M.jsx)(`span`,{className:`modal__mediaType`,children:l}),(0,M.jsx)(L,{genres:f})]}),(0,M.jsx)(`p`,{className:`modal__overview`,children:u}),(0,M.jsx)(r,{to:`/movies/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})}):null},G=f.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  padding: 20px;
`,K=f.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  gap: 20px;

  margin-top: 20px;
`,q=f.div`
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
`,se=f.div`
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
`,ce=({review:e,reviewDateText:t,closeModal:n})=>{let{author_details:{username:r,avatar_path:i,rating:a},content:o,created_at:s}=e,c=D(i,185);return(0,M.jsxs)(G,{children:[(0,M.jsx)(v,{closeModal:n}),(0,M.jsxs)(K,{children:[(0,M.jsx)(u,{src:c,name:r,variant:`circle`}),(0,M.jsxs)(q,{children:[(0,M.jsxs)(`p`,{className:`review__user-name`,children:[`@`,r]}),(0,M.jsx)(`p`,{className:`review__date`,children:t})]})]}),(0,M.jsxs)(se,{children:[(0,M.jsx)(`div`,{className:`review__ratingStars_wrapper`,children:(0,M.jsx)(p,{rating:a,created_at:s})}),(0,M.jsx)(`p`,{className:`review__text`,children:o})]})]})},le=f.li`
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
`,ue=f.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,de=f.div`
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
`,fe=f.div`
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
`,pe=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,[o,s]=(0,V.useState)(!1),[c,l]=(0,V.useState)(null),d=new Date-new Date(a),f=Math.floor(d/(1e3*60)),h=Math.floor(d/(1e3*60*60)),g=Math.floor(d/(1e3*60*60*24)),_;_=f<60?`${f} minutes ago`:h<24?`${h} hours ago`:`${g} days ago`;let v=e=>{l(e),s(!0)},y=()=>{s(!1),l(null)};return(0,M.jsxs)(le,{onClick:()=>v(e),children:[(0,M.jsxs)(ue,{children:[(0,M.jsx)(u,{src:D(n,185),name:t,variant:`circle`}),(0,M.jsxs)(de,{children:[(0,M.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,M.jsx)(`p`,{className:`review__date`,children:_})]})]}),(0,M.jsx)(p,{rating:r,created_at:a}),(0,M.jsx)(fe,{children:(0,M.jsx)(`p`,{className:`review__text`,children:i})}),o&&(0,M.jsx)(m,{closeModal:y,children:(0,M.jsx)(ce,{review:c,reviewDateText:_,closeModal:y})})]})},me=f.div`
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
`,he=({runtime:e,revenue:t,production_countries:n,tagline:r})=>(0,M.jsxs)(me,{children:[(0,M.jsx)(ye,{runtime:e}),(0,M.jsx)(ve,{revenue:t}),(0,M.jsx)(R,{countries:n}),(0,M.jsx)(`p`,{className:`tagline`,children:r})]}),ge=f.div`
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
`,J=({rating:e})=>(0,M.jsxs)(ge,{children:[(0,M.jsx)(l,{className:`star-icon`}),(0,M.jsx)(`span`,{children:e.toFixed(1)})]}),_e=f.p`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.2rem;
`,Y=({date:e})=>e?(0,M.jsx)(_e,{children:e.substring(0,4)}):null,ve=({revenue:e})=>{if(!e)return null;let t=e.toLocaleString(`ru-RU`);return(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`span`,{className:`details__label`,children:`Revenue: `}),(0,M.jsxs)(`span`,{className:`details__value`,children:[`$`,t]})]})},ye=({runtime:e})=>{if(!e)return null;let t=Math.floor(e/60),n=e%60;return(0,M.jsxs)(`p`,{children:[(0,M.jsx)(`span`,{className:`details__label`,children:`Runtime: `}),(0,M.jsxs)(`span`,{className:`details__value`,children:[t>0&&`${t}h `,n,`m`]})]})},be=f.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`,X=f.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,Z=({vote_average:e,vote_count:t,release_date:n})=>(0,M.jsxs)(be,{children:[(0,M.jsx)(J,{rating:e}),(0,M.jsx)(X,{}),(0,M.jsx)(Se,{count:t}),(0,M.jsx)(X,{}),(0,M.jsx)(Y,{date:n})]}),xe=f.span`
  color: var(--text-color);
  font-size: 1rem;
`,Se=({count:e})=>{let t=e??0;return(0,M.jsxs)(xe,{children:[t>=1e3?`${(t/1e3).toFixed(1).replace(`.0`,``)}K+`:t,` Review`,t===1?``:`s`]})},Ce=f.section``,we=f.div`
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
`,Te=f.div`
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
`,Ee=({movie:e})=>{if(!e)return null;let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:c,revenue:l,production_countries:u,tagline:f,genres:p}=e,m=T(t,1280),h=E(n,500);return(0,M.jsx)(Ce,{children:(0,M.jsx)(we,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${m})`},children:(0,M.jsx)(_,{children:(0,M.jsxs)(`div`,{className:`movie-content`,children:[(0,M.jsx)(`img`,{src:h,alt:r,className:`movie-poster`,loading:`lazy`}),(0,M.jsxs)(Te,{children:[(0,M.jsx)(`h1`,{className:`movie__title`,children:r}),(0,M.jsx)(Z,{vote_average:i,vote_count:a,release_date:s}),(0,M.jsx)(`p`,{className:`movie__overview`,children:o}),(0,M.jsx)(L,{genres:p}),(0,M.jsx)(he,{runtime:c,revenue:l,production_countries:u,tagline:f}),(0,M.jsx)(d,{})]})]})})})})},De=f.div`
  width: 100%;
  margin-top: 32px;
`,Oe=f.ul`
  display: flex;
  align-items: center;
  /* gap: 40px; */

  padding-bottom: 2px;
  margin-bottom: 28px;

  border-bottom: 1px solid var(--border-color);
`,Q=f.li`
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
`,ke=()=>(0,M.jsxs)(De,{children:[(0,M.jsxs)(Oe,{children:[(0,M.jsx)(Q,{children:(0,M.jsx)(e,{to:`cast`,className:({isActive:e})=>e?`active`:``,children:`Cast`})}),(0,M.jsx)(Q,{children:(0,M.jsx)(e,{to:`reviews`,className:({isActive:e})=>e?`active`:``,children:`Reviews`})})]}),(0,M.jsx)(s,{})]}),Ae=f.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,je=f.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin: 20px auto 50px auto;
`,Me=a({default:()=>Ne}),Ne=()=>{let{id:e}=i(),[t,n]=(0,V.useState)([]);return(0,V.useEffect)(()=>{(async()=>{try{n((await te(e)).results)}catch(e){console.error(e)}})()},[e]),t.length===0?(0,M.jsx)(Fe,{}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(Ae,{children:[`User Reviews `,(0,M.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,M.jsx)(je,{children:t.map(e=>(0,M.jsx)(pe,{review:e},e.id))})]})},Pe=f.div`
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
`,Fe=()=>(0,M.jsxs)(Pe,{children:[(0,M.jsx)(`h2`,{className:`no-reviews__title`,children:`There are no reviews yet`}),(0,M.jsx)(`p`,{className:`no-reviews__text`,children:`Be the first to share your thoughts!`})]}),Ie=f.li`
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
`;f.img``;var Le=f.div`
  .cast__actor-name {
    font-weight: 700;
    margin-bottom: 0.9rem;
  }

  .cast__character-name {
    font-weight: 500;
    color: var(--text-color);

    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
  }
`,Re=({actor:e})=>{let{original_name:t,character:n,profile_path:r}=e;return(0,M.jsxs)(Ie,{children:[(0,M.jsx)(`div`,{className:`cast__avatar-wrapper`,children:(0,M.jsx)(u,{src:D(r,185),name:t,size:`145px`,variant:`circle`})}),(0,M.jsxs)(Le,{children:[(0,M.jsx)(`h4`,{className:`cast__actor-name`,children:t}),(0,M.jsx)(`p`,{className:`cast__character-name`,children:n})]})]})},ze=f.div`
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
`,Be=()=>(0,M.jsx)(ze,{children:(0,M.jsx)(`h2`,{className:`no-cast__title`,children:`No cast information available.`})}),Ve=f.div`
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
`,$=({seriesItem:e,closeModal:t})=>{let[n,i]=(0,V.useState)([]);(0,V.useEffect)(()=>{ie().then(e=>i(e.genres)).catch(e=>console.error(e))},[]);let{original_name:a,first_air_date:o,adult:s,genre_ids:c,overview:l,backdrop_path:u}=e,d=(0,V.useMemo)(()=>n.filter(e=>{if(c.includes(e.id))return e.name}),[c,n]);return(0,M.jsx)(Ve,{children:(0,M.jsxs)(`article`,{children:[(0,M.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${T(u,1280)})`},children:[(0,M.jsx)(v,{closeModal:t}),(0,M.jsx)(`h2`,{className:`modal__title`,children:a})]}),(0,M.jsxs)(`section`,{className:`modal__content`,children:[(0,M.jsxs)(`div`,{className:`modal__info`,children:[(0,M.jsx)(`span`,{className:`modal__year`,children:o?.substring(0,4)}),s&&(0,M.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,M.jsx)(`span`,{className:`modal__mediaType`,children:`series`}),(0,M.jsx)(L,{genres:d})]}),(0,M.jsx)(`p`,{className:`modal__overview`,children:l}),(0,M.jsx)(r,{to:`/series/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})})},He=f.section``,Ue=f.div`
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
`,We=f.div`
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
`,Ge=({seriesItem:e})=>{let{backdrop_path:t,poster_path:n,name:r,number_of_seasons:i,number_of_episodes:a,vote_average:o,vote_count:s,overview:c,first_air_date:l,production_countries:u,tagline:f,genres:p}=e;console.log(`seriesItem в SeriesInfo:`,e);let m=T(t,1280),h=E(n,500);return(0,M.jsx)(He,{children:(0,M.jsx)(Ue,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${m})`},children:(0,M.jsx)(_,{children:(0,M.jsxs)(`div`,{className:`movie-content`,children:[(0,M.jsx)(`img`,{src:h,alt:r,className:`movie-poster`,loading:`lazy`}),(0,M.jsxs)(We,{children:[(0,M.jsx)(`h1`,{className:`movie__title`,children:r}),(0,M.jsx)(Z,{vote_average:o,vote_count:s,release_date:l}),(0,M.jsx)(`p`,{className:`movie__overview`,children:c}),(0,M.jsx)(L,{genres:p}),(0,M.jsx)(Je,{seasons:i,episodes:a,countries:u,tagline:f}),(0,M.jsx)(d,{})]})]})})})})},Ke=f.div`
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
`,qe=f.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,Je=({seasons:e,episodes:t,countries:n,tagline:r})=>(0,M.jsxs)(Ke,{children:[(0,M.jsxs)(`div`,{className:`meta__main`,children:[(0,M.jsxs)(`div`,{className:`meta__item`,children:[(0,M.jsxs)(`span`,{className:`details__value`,children:[e,` `]}),(0,M.jsx)(`span`,{className:`details__label`,children:` seasons`})]}),(0,M.jsx)(qe,{}),(0,M.jsxs)(`div`,{className:`meta__item`,children:[(0,M.jsxs)(`span`,{className:`details__value`,children:[t,` `]}),(0,M.jsx)(`span`,{className:`details__label`,children:`episodes`})]})]}),(0,M.jsx)(R,{countries:n}),(0,M.jsx)(`p`,{className:`tagline`,children:r})]}),Ye=a({default:()=>Xe}),Xe=()=>{let{id:e}=i(),[t,n]=(0,V.useState)([]),[r,a]=(0,V.useState)(!1),[o,s]=(0,V.useState)(null),c=(0,V.useCallback)(async e=>{try{a(!0),s(``),n((await ne(e)).cast)}catch{s(`Failed to load movie cast`)}finally{a(!1)}},[]);return(0,V.useEffect)(()=>{e&&c(e)},[e,c]),r?(0,M.jsx)(g,{}):o?(0,M.jsx)(h,{message:o,onRetry:()=>c(e)}):t.length===0?(0,M.jsx)(Be,{}):(0,M.jsx)(`div`,{className:`cast__scroll-wrapper`,children:(0,M.jsx)(ae,{children:t.map(e=>(0,M.jsx)(Re,{actor:e},e.cast_id))})})};export{ke as a,H as c,A as d,k as f,S as g,x as h,Me as i,N as l,w as m,Ge as n,Ee as o,ee as p,$ as r,W as s,Ye as t,j as u};