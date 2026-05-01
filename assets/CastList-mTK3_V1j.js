import{a as e,g as t,h as n,i as r,l as i,n as a,o,p as s,t as c,u as l}from"./iconBase-02BbQUN6.js";import{c as u,f as d,g as f,h as p,i as m,l as h,m as g,n as _,o as v,p as y,s as b,t as x}from"./index-DTfs8LIP.js";var S=`/React-Movie-Search-App/assets/no-poster-DPZEAbfg.png`,ee=`/React-Movie-Search-App/assets/no-backdrop-E_I-G8xw.png`,C=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,w=`https://api.themoviedb.org/3`,T=`https://image.tmdb.org/t/p/`,E=`c23a5d8272617f6f7021ba4c498464ff`,D=(e,t=500)=>e?`${T}w${t}${e}`:S,O=(e,t=1280)=>e?`${T}w${t}${e}`:ee,k=(e,t=185)=>e?`${T}w${t}${e}`:null,A={method:`GET`,headers:{accept:`application/json`,Authorization:C}},j=async(e=1)=>{let t=`api_key=${E}&page=${e}`,n=await fetch(`${w}/trending/movie/week?${t}`,A);if(!n.ok)throw console.error(`Failed to fetch trending movies`),Error(n.statusText);return n.json()},te=async(e=1)=>{let t=await fetch(`${w}/movie/top_rated?api_key=${E}&language=en-US&page=${e}`,A);if(!t.ok)throw console.error(`Failed to fetch top rated movies`),Error(t.statusText);return t.json()},ne=async e=>{let t=await fetch(`${w}/movie/${e}?api_key=${E}`,A);if(!t.ok)throw console.error(`Failed to fetch movie details`),Error(t.statusText);return t.json()},re=async(e,t=1)=>{let n=await fetch(`${w}/search/movie?api_key=${E}&query=${e}&page=${t}&primary_release_year=2025&language=en-US`,A);if(!n.ok)throw Error(n.statusText);return n.json()},ie=async e=>{let t=await fetch(`${w}/movie/${e}/reviews?api_key=${E}`,A);if(!t.ok)throw Error(t.statusText);return t.json()},ae=async e=>{let t=await fetch(`${w}/movie/${e}/credits?api_key=${E}`);if(!t.ok)throw Error(t.statusText);return t.json()},oe=async()=>{let e=await fetch(`${w}/genre/movie/list?api_key=${E}`);if(!e.ok)throw console.error(`Failed to fetch genres`),Error(e.statusText);return e.json()},se=async()=>{let e=await fetch(`${w}/genre/tv/list?api_key=${E}`);if(!e.ok)throw Error(e.statusText);return e.json()},M={method:`GET`,headers:{accept:`application/json`,Authorization:C}},N=async(e=1)=>{let t=await fetch(`${w}/tv/popular?api_key=${E}&page=${e}`,M);if(!t.ok)throw Error(t.statusText);return t.json()},P=async e=>{let t=await fetch(`${w}/tv/${e}?api_key=${E}`,M);if(!t.ok)throw Error(t.statusText);return t.json()},F=async e=>{let t=await fetch(`${w}/tv/${e}/reviews?api_key=${E}`);if(!t.ok)throw Error(t.statusText);return t.json()},I=async e=>{let t=await fetch(`${w}/tv/${e}/credits?api_key=${E}`);if(!t.ok)throw Error(t.statusText);return t.json()},L=async(e,t)=>{let n=await fetch(`${w}/${t}/${e}/similar?api_key=${E}`);if(!n.ok)throw Error(n.statusText);return n.json()},R=f.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch; //заставляет всех детей принимать высоту самого высокого соседа

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
`,z=f.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 20px;
`,B=a(),V=({mediaArray:e,openModal:t})=>(0,B.jsx)(z,{children:e.map(e=>(0,B.jsx)(U,{movie:e,openModal:t},e.id))}),H=f.li`
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
`,U=({movie:e,openModal:t})=>{let{title:n,original_name:r,poster_path:i,vote_average:a,release_date:o,first_air_date:s}=e;return(0,B.jsxs)(H,{className:`movie-card`,onClick:()=>t(e),children:[(0,B.jsx)(`div`,{className:`movie-card__poster-wrapper`,children:(0,B.jsx)(`img`,{src:D(i,500),alt:n||r,className:`movie-card__poster`,loading:`lazy`,onError:e=>{e.target.src=S}})}),(0,B.jsxs)(`div`,{className:`movie-card__content`,children:[(0,B.jsx)(`h4`,{className:`movie-card__title`,children:n||r}),(0,B.jsxs)(`div`,{className:`movie-card__meta`,children:[(0,B.jsx)(J,{rating:a}),(0,B.jsx)(Z,{date:o||s})]})]})]})},W=f.ul`
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
`,G=({genres:e})=>(0,B.jsx)(W,{children:e.map(e=>(0,B.jsx)(`li`,{className:`genre-tag`,children:(0,B.jsxs)(`span`,{children:[` `,e.name]})},e.id))}),K=({countries:e})=>e?.length?(0,B.jsxs)(`p`,{children:[(0,B.jsx)(`span`,{className:`details__label`,children:`Countries: `}),e.map((t,n)=>(0,B.jsxs)(`span`,{className:`details__value`,children:[t.iso_3166_1,n<e.length-1?`, `:``]},t.iso_3166_1))]}):null,ce=f.div`
  width: 100%;
  margin-top: 32px;
`,le=f.ul`
  display: flex;
  align-items: center;
  /* gap: 40px; */

  padding-bottom: 2px;
  margin-bottom: 28px;

  border-bottom: 1px solid var(--border-color);
`,q=f.li`
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
`,ue=()=>(0,B.jsxs)(ce,{children:[(0,B.jsxs)(le,{children:[(0,B.jsx)(q,{children:(0,B.jsx)(e,{to:`cast`,className:({isActive:e})=>e?`active`:``,children:`Cast`})}),(0,B.jsx)(q,{children:(0,B.jsx)(e,{to:`reviews`,className:({isActive:e})=>e?`active`:``,children:`Reviews`})})]}),(0,B.jsx)(o,{})]}),de=f.div`
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
`,J=({rating:e})=>(0,B.jsxs)(de,{children:[(0,B.jsx)(h,{className:`star-icon`}),(0,B.jsx)(`span`,{children:e.toFixed(1)})]}),fe=f.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`,Y=f.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,X=({vote_average:e,vote_count:t,release_date:n})=>(0,B.jsxs)(fe,{children:[(0,B.jsx)(J,{rating:e}),(0,B.jsx)(Y,{}),(0,B.jsx)(Be,{count:t}),(0,B.jsx)(Y,{}),(0,B.jsx)(Z,{date:n})]}),pe=f.p`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.2rem;
`,Z=({date:e})=>e?(0,B.jsx)(pe,{children:e.substring(0,4)}):null,me=f.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,he=f.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch; //заставляет всех детей принимать высоту самого высокого соседа

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
`,Q=t(s(),1),ge=()=>{let{id:e}=l(),[t,n]=(0,Q.useState)([]),[r,a]=(0,Q.useState)(!1),[o,s]=(0,Q.useState)(``),c=i(),u=(0,Q.useCallback)(async(e,t)=>{try{a(!0),s(``),n((await L(e,t)).results)}catch{s(`Failed to load similar media`)}finally{a(!1)}},[]);return(0,Q.useEffect)(()=>{e&&u(e,c.pathname.includes(`movie`)?`movie`:`tv`)},[e,u,c.pathname]),o?(0,B.jsx)(_,{message:o,onRetry:()=>{u({mediaId:e,type:c.pathname.includes(`movie`)?`movie`:`tv`})}}):t.length?(0,B.jsxs)(`div`,{children:[(0,B.jsx)(me,{children:`More Like This`}),r?(0,B.jsx)(m,{count:11}):(0,B.jsx)(he,{children:t.map(e=>(0,B.jsx)(ye,{media:e},e.id))})]}):null},_e=f.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--card-secondary-color);
  box-shadow: var(--shadow);

  margin: 0 auto;
  padding: 10px 10px 20px 10px;
  transition: var(--transition);

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);
    cursor: pointer;
  }

  img {
    padding: 10px;
    margin-bottom: 0.9rem;
    max-width: 250px; //так как poster_path === 200 и если не будет изображения с бекенда то заглушка подставится тоже в размере 200
    border-radius: var(--radius-lg);
  }
`,ve=f.h4`
  font-weight: 700;
  margin-bottom: 1rem;
`,ye=({media:e})=>{let{poster_path:t,original_title:n,release_date:r,original_name:i,first_air_date:a}=e;return(0,B.jsxs)(_e,{children:[(0,B.jsx)(`img`,{src:D(t,300),alt:n||i}),(0,B.jsxs)(ve,{children:[` `,n||i]}),(0,B.jsx)(Z,{date:r||a})]})};function be(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z`},child:[]}]})(e)}var xe=f.div`
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
`,Se=({placeholder:e=``,updateQueryString:t})=>{let[n,r]=(0,Q.useState)(``),i=e=>{e.key===`Enter`&&o(n)},a=()=>{r(``)},o=e=>{e&&(t(e),a())};return(0,B.jsxs)(xe,{children:[(0,B.jsx)(`input`,{type:`text`,className:`search-input`,value:n,onChange:e=>r(e.target.value),placeholder:e,onKeyDown:i}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>o(n),children:(0,B.jsx)(be,{className:`search-icon`})})]})},Ce=f.div`
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
`,we=({movie:e,closeModal:t})=>{let[n,a]=(0,Q.useState)([]),o=i();(0,Q.useEffect)(()=>{oe().then(e=>a(e.genres)).catch(e=>console.error(e))},[]);let{original_title:s,adult:c,release_date:l,genre_ids:u,media_type:d=`movie`,overview:f,backdrop_path:p}=e,m=(0,Q.useMemo)(()=>n.filter(e=>u?.includes(e.id)),[n,u]);return e?(0,B.jsx)(Ce,{children:(0,B.jsxs)(`article`,{children:[(0,B.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${O(p,1280)})`},children:[(0,B.jsx)(g,{closeModal:t}),(0,B.jsx)(`h2`,{className:`modal__title`,children:s})]}),(0,B.jsxs)(`section`,{className:`modal__content`,children:[(0,B.jsxs)(`div`,{className:`modal__info`,children:[(0,B.jsx)(`span`,{className:`modal__year`,children:l?.substring(0,4)}),c&&(0,B.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,B.jsx)(`span`,{className:`modal__mediaType`,children:d}),(0,B.jsx)(G,{genres:m})]}),(0,B.jsx)(`p`,{className:`modal__overview`,children:f}),(0,B.jsx)(r,{to:`/movies/${e.id}`,state:{from:o.pathname+o.search},className:`modal__info-btn`,children:`More Info`})]})]})}):null},Te=f.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  padding: 20px;
`,Ee=f.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  gap: 20px;

  margin-top: 20px;
`,De=f.div`
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
`,Oe=f.div`
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
`,ke=({review:e,reviewDateText:t,closeModal:n})=>{let{author_details:{username:r,avatar_path:i,rating:a},content:o,created_at:s}=e,c=k(i,185);return(0,B.jsxs)(Te,{children:[(0,B.jsx)(g,{closeModal:n}),(0,B.jsxs)(Ee,{children:[(0,B.jsx)(d,{src:c,name:r,variant:`circle`}),(0,B.jsxs)(De,{children:[(0,B.jsxs)(`p`,{className:`review__user-name`,children:[`@`,r]}),(0,B.jsx)(`p`,{className:`review__date`,children:t})]})]}),(0,B.jsxs)(Oe,{children:[(0,B.jsx)(`div`,{className:`review__ratingStars_wrapper`,children:(0,B.jsx)(u,{rating:a,created_at:s})}),(0,B.jsx)(`p`,{className:`review__text`,children:o})]})]})},Ae=f.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--card-secondary-color);
  box-shadow: var(--shadow);

  width: 100%;
  height: 100%;

  padding: 20px;
  transition: var(--transition);

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);
    cursor: pointer;
  }
`,je=f.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,Me=f.div`
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
`,Ne=f.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  .review__text {
    padding: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word; //??

    text-align: left;
    line-height: 2;
    opacity: 0.8;
  }
`,Pe=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,[o,s]=(0,Q.useState)(!1),[c,l]=(0,Q.useState)(null),f=new Date-new Date(a),p=Math.floor(f/(1e3*60)),m=Math.floor(f/(1e3*60*60)),h=Math.floor(f/(1e3*60*60*24)),g;g=p<60?`${p} minutes ago`:m<24?`${m} hours ago`:`${h} days ago`;let _=e=>{l(e),s(!0)},v=()=>{s(!1),l(null)};return(0,B.jsxs)(Ae,{onClick:()=>_(e),children:[(0,B.jsxs)(je,{children:[(0,B.jsx)(d,{src:k(n,185),name:t,variant:`circle`}),(0,B.jsxs)(Me,{children:[(0,B.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,B.jsx)(`p`,{className:`review__date`,children:g})]})]}),(0,B.jsx)(u,{rating:r,created_at:a}),(0,B.jsx)(Ne,{children:(0,B.jsx)(`p`,{className:`review__text`,children:i})}),o&&(0,B.jsx)(y,{closeModal:v,children:(0,B.jsx)(ke,{review:c,reviewDateText:g,closeModal:v})})]})},Fe=f.div`
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
`,Ie=({runtime:e,revenue:t,production_countries:n,tagline:r})=>(0,B.jsxs)(Fe,{children:[(0,B.jsx)(Re,{runtime:e}),(0,B.jsx)(Le,{revenue:t}),(0,B.jsx)(K,{countries:n}),(0,B.jsx)(`p`,{className:`tagline`,children:r})]}),Le=({revenue:e})=>{if(!e)return null;let t=e.toLocaleString(`ru-RU`);return(0,B.jsxs)(`p`,{children:[(0,B.jsx)(`span`,{className:`details__label`,children:`Revenue: `}),(0,B.jsxs)(`span`,{className:`details__value`,children:[`$`,t]})]})},Re=({runtime:e})=>{if(!e)return null;let t=Math.floor(e/60),n=e%60;return(0,B.jsxs)(`p`,{children:[(0,B.jsx)(`span`,{className:`details__label`,children:`Runtime: `}),(0,B.jsxs)(`span`,{className:`details__value`,children:[t>0&&`${t}h `,n,`m`]})]})},ze=f.span`
  color: var(--text-color);
  font-size: 1rem;
`,Be=({count:e})=>{let t=e??0;return(0,B.jsxs)(ze,{children:[t>=1e3?`${(t/1e3).toFixed(1).replace(`.0`,``)}K+`:t,` Review`,t===1?``:`s`]})},Ve=f.section``,He=f.div`
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
`,Ue=f.div`
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
`,We=({movie:e})=>{if(!e)return null;let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:c,revenue:l,production_countries:u,tagline:d,genres:f}=e,m=D(t,1280),h=O(n,500);return(0,B.jsx)(Ve,{children:(0,B.jsx)(He,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${m})`},children:(0,B.jsx)(x,{children:(0,B.jsxs)(`div`,{className:`movie-content`,children:[(0,B.jsx)(`img`,{src:h,alt:r,className:`movie-poster`,loading:`lazy`}),(0,B.jsxs)(Ue,{children:[(0,B.jsx)(`h1`,{className:`movie__title`,children:r}),(0,B.jsx)(X,{vote_average:i,vote_count:a,release_date:s}),(0,B.jsx)(`p`,{className:`movie__overview`,children:o}),(0,B.jsx)(G,{genres:f}),(0,B.jsx)(Ie,{runtime:c,revenue:l,production_countries:u,tagline:d}),(0,B.jsx)(p,{fallback:`movies`})]})]})})})})},Ge=f.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,Ke=f.ul`
  display: grid;
  /*  колонки минимум 300px, максимум — занять все свободное место */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  /* все карточки в сетке будут иметь высоту самой высокой карточки */
  grid-auto-rows: 1fr;

  gap: 20px;
  margin: 20px auto 50px auto;
  padding: 0;
  list-style: none;
`,qe=n({default:()=>Je}),Je=()=>{let{id:e}=l(),[t,n]=(0,Q.useState)([]),[r,a]=(0,Q.useState)(!1),[o,s]=(0,Q.useState)(null),c=i(),u=(0,Q.useCallback)(async e=>{try{a(!0),s(``),c.pathname.includes(`movies`)?n((await ie(e)).results):c.pathname.includes(`series`)&&n((await F(e)).results)}catch{s(`Failed to load reviews`)}finally{a(!1)}},[c.pathname]);return(0,Q.useEffect)(()=>{e&&u(e)},[e,u]),r?(0,B.jsx)(v,{count:t.length}):o?(0,B.jsx)(_,{message:o,onRetry:()=>u(e)}):t.length===0?(0,B.jsx)(Xe,{}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(Ge,{children:[`User Reviews `,(0,B.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,B.jsx)(Ke,{children:t.map(e=>(0,B.jsx)(Pe,{review:e},e.id))})]})},Ye=f.div`
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
`,Xe=()=>(0,B.jsxs)(Ye,{children:[(0,B.jsx)(`h2`,{className:`no-reviews__title`,children:`There are no reviews yet`}),(0,B.jsx)(`p`,{className:`no-reviews__text`,children:`Be the first to share your thoughts!`})]}),Ze=f.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  min-width: 180px;

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
`,Qe=f.div`
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
`,$e=({actor:e})=>{let{original_name:t,character:n,profile_path:r}=e;return(0,B.jsxs)(Ze,{children:[(0,B.jsx)(`div`,{className:`cast__avatar-wrapper`,children:(0,B.jsx)(d,{src:k(r,185),name:t,size:`145px`,variant:`circle`})}),(0,B.jsxs)(Qe,{children:[(0,B.jsx)(`h4`,{className:`cast__actor-name`,children:t}),(0,B.jsx)(`p`,{className:`cast__character-name`,children:n})]})]})},et=f.div`
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
`,tt=()=>(0,B.jsx)(et,{children:(0,B.jsx)(`h2`,{className:`no-cast__title`,children:`No cast information available.`})}),$=f.div`
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
`,nt=({seriesItem:e,closeModal:t})=>{let[n,a]=(0,Q.useState)([]),o=i();(0,Q.useEffect)(()=>{se().then(e=>a(e.genres)).catch(e=>console.error(e))},[]);let{original_name:s,first_air_date:c,adult:l,genre_ids:u,overview:d,backdrop_path:f}=e,p=(0,Q.useMemo)(()=>n.filter(e=>u?.includes(e.id)),[n,u]);return e?(0,B.jsx)($,{children:(0,B.jsxs)(`article`,{children:[(0,B.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${D(f,1280)})`},children:[(0,B.jsx)(g,{closeModal:t}),(0,B.jsx)(`h2`,{className:`modal__title`,children:s})]}),(0,B.jsxs)(`section`,{className:`modal__content`,children:[(0,B.jsxs)(`div`,{className:`modal__info`,children:[(0,B.jsx)(`span`,{className:`modal__year`,children:c?.substring(0,4)}),l&&(0,B.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,B.jsx)(`span`,{className:`modal__mediaType`,children:`series`}),(0,B.jsx)(G,{genres:p})]}),(0,B.jsx)(`p`,{className:`modal__overview`,children:d}),(0,B.jsx)(r,{to:`/series/${e.id}`,state:{from:o.pathname+o.search},className:`modal__info-btn`,children:`More Info`})]})]})}):null},rt=f.section``,it=f.div`
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
`,at=f.div`
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
`,ot=({seriesItem:e})=>{let{backdrop_path:t,poster_path:n,name:r,number_of_seasons:i,number_of_episodes:a,vote_average:o,vote_count:s,overview:c,first_air_date:l,production_countries:u,tagline:d,genres:f}=e,m=D(t,1280),h=O(n,500);return(0,B.jsx)(rt,{children:(0,B.jsx)(it,{style:{backgroundImage:`url(${m})`},children:(0,B.jsx)(x,{children:(0,B.jsxs)(`div`,{className:`media-content`,children:[(0,B.jsx)(`img`,{src:h,alt:r,className:`media-poster`,loading:`lazy`}),(0,B.jsxs)(at,{children:[(0,B.jsx)(`h1`,{className:`media__title`,children:r}),(0,B.jsx)(X,{vote_average:o,vote_count:s,release_date:l}),(0,B.jsx)(`p`,{className:`media__overview`,children:c}),(0,B.jsx)(G,{genres:f}),(0,B.jsx)(lt,{seasons:i,episodes:a,countries:u,tagline:d}),(0,B.jsx)(p,{fallback:`series`})]})]})})})})},st=f.div`
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
`,ct=f.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,lt=({seasons:e,episodes:t,countries:n,tagline:r})=>(0,B.jsxs)(st,{children:[(0,B.jsxs)(`div`,{className:`meta__main`,children:[(0,B.jsxs)(`div`,{className:`meta__item`,children:[(0,B.jsxs)(`span`,{className:`details__value`,children:[e,` `]}),(0,B.jsx)(`span`,{className:`details__label`,children:` seasons`})]}),(0,B.jsx)(ct,{}),(0,B.jsxs)(`div`,{className:`meta__item`,children:[(0,B.jsxs)(`span`,{className:`details__value`,children:[t,` `]}),(0,B.jsx)(`span`,{className:`details__label`,children:`episodes`})]})]}),(0,B.jsx)(K,{countries:n}),(0,B.jsx)(`p`,{className:`tagline`,children:r})]}),ut=n({default:()=>dt}),dt=()=>{let{id:e}=l(),[t,n]=(0,Q.useState)([]),[r,a]=(0,Q.useState)(!1),[o,s]=(0,Q.useState)(null),c=i(),u=(0,Q.useCallback)(async e=>{try{a(!0),s(``),c.pathname.includes(`movies`)?n((await ae(e)).cast):c.pathname.includes(`series`)&&n((await I(e)).cast)}catch{s(`Failed to load cast`)}finally{a(!1)}},[c.pathname]);return(0,Q.useEffect)(()=>{e&&u(e)},[e,u]),r?(0,B.jsx)(b,{count:t.length}):o?(0,B.jsx)(_,{message:o,onRetry:()=>u(e)}):t.length===0?(0,B.jsx)(tt,{}):(0,B.jsx)(`div`,{className:`cast__scroll-wrapper`,children:(0,B.jsx)(R,{children:t.map(e=>(0,B.jsx)($e,{actor:e},e.cast_id))})})};export{We as a,ge as c,N as d,P as f,re as g,j as h,qe as i,ue as l,te as m,ot as n,we as o,ne as p,nt as r,Se as s,ut as t,V as u};