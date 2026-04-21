import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{a as n,c as r,d as i,r as a,t as o}from"./iconBase-55VGzWiC.js";import{c as s,d as c,i as l,l as u,s as d,t as f,u as p}from"./index-R3q5SUnf.js";import"./CastList-CtQwRqhY.js";var m=`/React-Movie-Search-App/assets/no-poster-DPZEAbfg.png`,h=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,g=`https://api.themoviedb.org/3`,_=`https://image.tmdb.org/t/p/`,v=`c23a5d8272617f6f7021ba4c498464ff`,y={method:`GET`,headers:{accept:`application/json`,Authorization:h}},b=async(e=1)=>{let t=`api_key=${v}&page=${e}`,n=await fetch(`${g}/trending/movie/week?${t}`,y);if(!n.ok)throw console.error(`Failed to fetch trending movies`),Error(n.statusText);return n.json()},x=async(e=1)=>{let t=await fetch(`${g}/movie/top_rated?api_key=${v}&language=en-US&page=${e}`,y);if(!t.ok)throw console.error(`Failed to fetch top rated movies`),Error(t.statusText);return t.json()},S=async(e,t=1)=>{let n=await fetch(`${g}/movie/${e}?api_key=${v}&page=${t}`,y);if(!n.ok)throw console.error(`Failed to fetch movie details`),Error(n.statusText);return n.json()},ee=async(e,t=1)=>{let n=await fetch(`${g}/search/movie?api_key=${v}&query=${e}&page=${t}&primary_release_year=2025&include_adult=true&language=en-US`,y);if(!n.ok)throw Error(n.statusText);return n.json()},te=async e=>{let t=await fetch(`${g}/movie/${e}/reviews?api_key=${v}`,y);if(!t.ok)throw Error(t.statusText);return t.json()},ne={method:`GET`,headers:{accept:`application/json`,Authorization:h}},re=async()=>{let e=await fetch(`${g}/genre/movie/list?api_key=${v}`,ne);if(!e.ok)throw console.error(`Failed to fetch genres`),Error(e.statusText);return e.json()},ie=c.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 20px;
`,C=t(),w=({moviesArr:e,openModal:t})=>(0,C.jsx)(ie,{children:e.map(e=>(0,C.jsx)(E,{movie:e,openModal:t},e.id))}),T=c.li`
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
`,E=({movie:e,openModal:t})=>{let{title:n,poster_path:r,vote_average:i,release_date:a,first_air_date:o}=e;return(0,C.jsxs)(T,{className:`movie-card`,onClick:()=>t(e),children:[(0,C.jsx)(`div`,{className:`movie-card__poster-wrapper`,children:(0,C.jsx)(`img`,{src:r?`${_}w500${r}`:m,alt:n,className:`movie-card__poster`,loading:`lazy`,onError:e=>{e.target.src=m}})}),(0,C.jsxs)(`div`,{className:`movie-card__content`,children:[(0,C.jsx)(`h4`,{className:`movie-card__title`,children:n}),(0,C.jsxs)(`div`,{className:`movie-card__meta`,children:[(0,C.jsx)(X,{rating:i}),(0,C.jsx)(Z,{date:a||o})]})]})]})};function D(e){return o({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z`},child:[]}]})(e)}var O=c.div`
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
`,k=e(i(),1),A=({placeholder:e=``,updateQueryString:t})=>{let[n,r]=(0,k.useState)(``),i=e=>{e.key===`Enter`&&o(n)},a=()=>{r(``)},o=e=>{e&&(t(e),a())};return(0,C.jsxs)(O,{children:[(0,C.jsx)(`input`,{type:`text`,className:`search-input`,value:n,onChange:e=>r(e.target.value),placeholder:e,onKeyDown:i}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>o(n),children:(0,C.jsx)(D,{className:`search-icon`})})]})};c.div`
  margin: 25px auto;
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
`;var j=c.div`
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
`,M=({movie:e,closeModal:t})=>{let[n,r]=(0,k.useState)([]);(0,k.useEffect)(()=>{re().then(e=>r(e.genres)).catch(e=>console.error(e))},[]);let{original_title:i,adult:o,release_date:s,genre_ids:c,media_type:l,overview:d,backdrop_path:f}=e,p=(0,k.useMemo)(()=>n.filter(e=>c?.includes(e.id)),[n,c]);return e?(0,C.jsx)(j,{children:(0,C.jsxs)(`article`,{children:[(0,C.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${`${_}w1280/${f}`})`},children:[(0,C.jsx)(u,{closeModal:t}),(0,C.jsx)(`h2`,{className:`modal__title`,children:i})]}),(0,C.jsxs)(`section`,{className:`modal__content`,children:[(0,C.jsxs)(`div`,{className:`modal__info`,children:[(0,C.jsx)(`span`,{className:`modal__year`,children:s?.substring(0,4)}),o&&(0,C.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,C.jsx)(`span`,{className:`modal__mediaType`,children:l}),(0,C.jsx)(q,{genres:p})]}),(0,C.jsx)(`p`,{className:`modal__overview`,children:d}),(0,C.jsx)(a,{to:`/movies/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})}):null},N=c.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  padding: 20px;
`,P=c.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  gap: 20px;

  margin-top: 20px;
`,F=c.div`
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
`,I=c.div`
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
`,L=({review:e,reviewDateText:t,closeModal:n})=>{let{author_details:{username:r,avatar_path:i,rating:a},content:o,created_at:s}=e;return(0,C.jsxs)(N,{children:[(0,C.jsx)(u,{closeModal:n}),(0,C.jsxs)(P,{children:[(0,C.jsx)(d,{src:i?`${_}w185${i}`:null,name:r,variant:`circle`}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(`p`,{className:`review__user-name`,children:[`@`,r]}),(0,C.jsx)(`p`,{className:`review__date`,children:t})]})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(`div`,{className:`review__ratingStars_wrapper`,children:(0,C.jsx)(z,{rating:a,created_at:s})}),(0,C.jsx)(`p`,{className:`review__text`,children:o})]})]})},R=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0 0 5px 50px;

  .star-icon {
    color: var(--primary-color);
  }
`,z=({rating:e})=>{let t=Math.round(e/2);return(0,C.jsx)(R,{children:[...Array(t)].map((e,t)=>(0,C.jsx)(l,{className:`star-icon`},t))})},B=c.li`
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
`,V=c.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,H=c.div`
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
`,U=c.div`
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
`,W=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,[o,c]=(0,k.useState)(!1),[l,u]=(0,k.useState)(null),f=new Date-new Date(a),p=Math.floor(f/(1e3*60)),m=Math.floor(f/(1e3*60*60)),h=Math.floor(f/(1e3*60*60*24)),g;g=p<60?`${p} minutes ago`:m<24?`${m} hours ago`:`${h} days ago`;let v=e=>{u(e),c(!0)},y=()=>{c(!1),u(null)};return(0,C.jsxs)(B,{onClick:()=>v(e),children:[(0,C.jsxs)(V,{children:[(0,C.jsx)(d,{src:n?`${_}w185${n}`:null,name:t,variant:`circle`}),(0,C.jsxs)(H,{children:[(0,C.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,C.jsx)(`p`,{className:`review__date`,children:g})]})]}),(0,C.jsx)(z,{rating:r,created_at:a}),(0,C.jsx)(U,{children:(0,C.jsx)(`p`,{className:`review__text`,children:i})}),o&&(0,C.jsx)(s,{closeModal:y,children:(0,C.jsx)(L,{review:l,reviewDateText:g,closeModal:y})})]})},G=({countries:e})=>e?.length?(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`span`,{className:`movie-details__label`,children:`Countries: `}),e.map((t,n)=>(0,C.jsxs)(`span`,{className:`movie-details__value`,children:[t.iso_3166_1,n<e.length-1?`, `:``]},t.iso_3166_1))]}):null,K=c.ul`
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
`,q=({genres:e})=>(0,C.jsx)(K,{children:e.map(e=>(0,C.jsx)(`li`,{className:`genre-tag`,children:(0,C.jsxs)(`span`,{children:[` `,e.name]})},e.id))}),J=c.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  margin: 16px 0;

  .movie-details__label {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1rem;
  }

  .movie-details__value {
    font-size: 1rem;
  }

  .tagline {
    font-style: italic;
    font-size: 1rem;
  }
`,Y=({runtime:e,revenue:t,production_countries:n,tagline:r})=>(0,C.jsxs)(J,{children:[(0,C.jsx)(ce,{runtime:e}),(0,C.jsx)(se,{revenue:t}),(0,C.jsx)(G,{countries:n}),(0,C.jsx)(`p`,{className:`tagline`,children:r})]}),ae=c.div`
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
`,X=({rating:e})=>(0,C.jsxs)(ae,{children:[(0,C.jsx)(l,{className:`star-icon`}),(0,C.jsx)(`span`,{children:e.toFixed(1)})]}),oe=c.p`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.2rem;
`,Z=({date:e})=>e?(0,C.jsx)(oe,{children:e.substring(0,4)}):null,se=({revenue:e})=>{if(!e)return null;let t=e.toLocaleString(`ru-RU`);return(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`span`,{className:`movie-details__label`,children:`Revenue: `}),(0,C.jsxs)(`span`,{className:`movie-details__value`,children:[`$`,t]})]})},ce=({runtime:e})=>{if(!e)return null;let t=Math.floor(e/60),n=e%60;return(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`span`,{className:`movie-details__label`,children:`Runtime: `}),(0,C.jsxs)(`span`,{className:`movie-details__value`,children:[t>0&&`${t}h `,n,`m`]})]})},le=c.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`,Q=c.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,ue=({vote_average:e,vote_count:t,release_date:n})=>(0,C.jsxs)(le,{children:[(0,C.jsx)(X,{rating:e}),(0,C.jsx)(Q,{}),(0,C.jsx)(fe,{count:t}),(0,C.jsx)(Q,{}),(0,C.jsx)(Z,{date:n})]}),de=c.span`
  color: var(--text-color);
  font-size: 1rem;
`,fe=({count:e})=>{let t=e??0;return(0,C.jsxs)(de,{children:[t>=1e3?`${(t/1e3).toFixed(1).replace(`.0`,``)}K+`:t,` Review`,t===1?``:`s`]})},pe=c.section``,$=c.div`
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
`,me=c.div`
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
`,he=({movie:e})=>{if(!e)return null;let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:c,revenue:l,production_countries:u,tagline:d,genres:h}=e,g=`${_}w1280${t}`,v=n?`${_}w500${n}`:m;return(0,C.jsx)(pe,{children:(0,C.jsx)($,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${g})`},children:(0,C.jsx)(f,{children:(0,C.jsxs)(`div`,{className:`movie-content`,children:[(0,C.jsx)(`img`,{src:v,alt:r,className:`movie-poster`,loading:`lazy`}),(0,C.jsxs)(me,{children:[(0,C.jsx)(`h1`,{className:`movie__title`,children:r}),(0,C.jsx)(ue,{vote_average:i,vote_count:a,release_date:s}),(0,C.jsx)(`p`,{className:`movie__overview`,children:o}),(0,C.jsx)(q,{genres:h}),(0,C.jsx)(Y,{runtime:c,revenue:l,production_countries:u,tagline:d}),(0,C.jsx)(p,{})]})]})})})})},ge=c.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 auto;
  }

  .divider {
    /* width: 2px; */
  }
`,_e=()=>(0,C.jsxs)(ge,{children:[(0,C.jsxs)(`ul`,{children:[(0,C.jsx)(`li`,{children:(0,C.jsx)(a,{to:`cast`,children:`Cast`})}),(0,C.jsx)(`hr`,{className:`divider`}),(0,C.jsx)(`li`,{children:(0,C.jsx)(a,{to:`reviews`,children:`Reviews`})})]}),(0,C.jsx)(n,{})]}),ve=c.div`
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
`,ye=()=>(0,C.jsxs)(ve,{children:[(0,C.jsx)(`h2`,{class:`no-reviews__title`,children:`There are no reviews yet`}),(0,C.jsx)(`p`,{class:`no-reviews__text`,children:`Be the first to share your thoughts!`})]}),be=c.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,xe=c.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin: 20px auto 50px auto;
`,Se=()=>{let{id:e}=r(),[t,n]=(0,k.useState)([]);return(0,k.useEffect)(()=>{(async()=>{try{n((await te(e)).results)}catch(e){console.error(e)}})()},[e]),t.length===0?(0,C.jsx)(ye,{}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(be,{children:[`User Reviews `,(0,C.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,C.jsx)(xe,{children:t.map(e=>(0,C.jsx)(W,{review:e},e.id))})]})};export{A as a,x as c,v as d,h as f,M as i,b as l,_e as n,w as o,g as p,he as r,S as s,Se as t,ee as u};