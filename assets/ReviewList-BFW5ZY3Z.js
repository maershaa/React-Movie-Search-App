import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{a as n,c as r,d as i,r as a,t as o}from"./iconBase-55VGzWiC.js";import{a as s,c,d as l,f as u,i as d,l as f,t as p,u as m}from"./index-CdcY-8cp.js";import"./CastList-CtQwRqhY.js";var h=`/React-Movie-Search-App/assets/no-poster-DPZEAbfg.png`,g=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNhNWQ4MjcyNjE3ZjZmNzAyMWJhNGM0OTg0NjRmZiIsIm5iZiI6MTY5OTM1ODgxNi4xMjcsInN1YiI6IjY1NGEyODYwNTMyYWNiMDExYjEwYzI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JaMiiyblV0gutYXA0_BostrvfuMitxlET6G1ohNUjp4`,_=`https://api.themoviedb.org/3`,v=`https://image.tmdb.org/t/p/`,y=`c23a5d8272617f6f7021ba4c498464ff`,b={method:`GET`,headers:{accept:`application/json`,Authorization:g}},x=async(e=1)=>{let t=`api_key=${y}&page=${e}`,n=await fetch(`${_}/trending/movie/week?${t}`,b);if(!n.ok)throw console.error(`Failed to fetch trending movies`),Error(n.statusText);return n.json()},S=async(e=1)=>{let t=await fetch(`${_}/movie/top_rated?api_key=${y}&language=en-US&page=${e}`,b);if(!t.ok)throw console.error(`Failed to fetch top rated movies`),Error(t.statusText);return t.json()},C=async(e,t=1)=>{let n=await fetch(`${_}/movie/${e}?api_key=${y}&page=${t}`,b);if(!n.ok)throw console.error(`Failed to fetch movie details`),Error(n.statusText);return n.json()},ee=async(e,t=1)=>{let n=await fetch(`${_}/search/movie?api_key=${y}&query=${e}&page=${t}&primary_release_year=2025&include_adult=true&language=en-US`,b);if(!n.ok)throw Error(n.statusText);return n.json()},te=async e=>{let t=await fetch(`${_}/movie/${e}/reviews?api_key=${y}`,b);if(!t.ok)throw Error(t.statusText);return t.json()},ne=async()=>{let e=await fetch(`${_}/genre/movie/list?api_key=${y}`);if(!e.ok)throw console.error(`Failed to fetch genres`),Error(e.statusText);return e.json()},re=async()=>{let e=await fetch(`${_}/genre/tv/list?api_key=${y}`);if(!e.ok)throw Error(e.statusText);return e.json()},w=u.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 20px;
`,T=t(),E=({mediaArray:e,openModal:t})=>(0,T.jsx)(w,{children:e.map(e=>(0,T.jsx)(O,{movie:e,openModal:t},e.id))}),D=u.li`
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
`,O=({movie:e,openModal:t})=>{let{title:n,original_name:r,poster_path:i,vote_average:a,release_date:o,first_air_date:s}=e;return(0,T.jsxs)(D,{className:`movie-card`,onClick:()=>t(e),children:[(0,T.jsx)(`div`,{className:`movie-card__poster-wrapper`,children:(0,T.jsx)(`img`,{src:i?`${v}w500${i}`:h,alt:n||r,className:`movie-card__poster`,loading:`lazy`,onError:e=>{e.target.src=h}})}),(0,T.jsxs)(`div`,{className:`movie-card__content`,children:[(0,T.jsx)(`h4`,{className:`movie-card__title`,children:n||r}),(0,T.jsxs)(`div`,{className:`movie-card__meta`,children:[(0,T.jsx)(X,{rating:a}),(0,T.jsx)(Z,{date:o||s})]})]})]})},k=u.ul`
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
`,A=({genres:e})=>(0,T.jsx)(k,{children:e.map(e=>(0,T.jsx)(`li`,{className:`genre-tag`,children:(0,T.jsxs)(`span`,{children:[` `,e.name]})},e.id))});function j(e){return o({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z`},child:[]}]})(e)}var M=u.div`
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
`,N=e(i(),1),P=({placeholder:e=``,updateQueryString:t})=>{let[n,r]=(0,N.useState)(``),i=e=>{e.key===`Enter`&&o(n)},a=()=>{r(``)},o=e=>{e&&(t(e),a())};return(0,T.jsxs)(M,{children:[(0,T.jsx)(`input`,{type:`text`,className:`search-input`,value:n,onChange:e=>r(e.target.value),placeholder:e,onKeyDown:i}),(0,T.jsx)(`button`,{type:`button`,onClick:()=>o(n),children:(0,T.jsx)(j,{className:`search-icon`})})]})},F=u.div`
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
`,I=({movie:e,closeModal:t})=>{let[n,r]=(0,N.useState)([]);(0,N.useEffect)(()=>{ne().then(e=>r(e.genres)).catch(e=>console.error(e))},[]);let{original_title:i,adult:o,release_date:s,genre_ids:c,media_type:l=`movie`,overview:u,backdrop_path:d}=e,f=(0,N.useMemo)(()=>n.filter(e=>c?.includes(e.id)),[n,c]);return e?(0,T.jsx)(F,{children:(0,T.jsxs)(`article`,{children:[(0,T.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${`${v}w1280/${d}`})`},children:[(0,T.jsx)(m,{closeModal:t}),(0,T.jsx)(`h2`,{className:`modal__title`,children:i})]}),(0,T.jsxs)(`section`,{className:`modal__content`,children:[(0,T.jsxs)(`div`,{className:`modal__info`,children:[(0,T.jsx)(`span`,{className:`modal__year`,children:s?.substring(0,4)}),o&&(0,T.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,T.jsx)(`span`,{className:`modal__mediaType`,children:l}),(0,T.jsx)(A,{genres:f})]}),(0,T.jsx)(`p`,{className:`modal__overview`,children:u}),(0,T.jsx)(a,{to:`/movies/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})}):null},L=u.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;

  padding: 20px;
`,R=u.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  gap: 20px;

  margin-top: 20px;
`,z=u.div`
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
`,B=u.div`
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
`,V=({review:e,reviewDateText:t,closeModal:n})=>{let{author_details:{username:r,avatar_path:i,rating:a},content:o,created_at:s}=e;return(0,T.jsxs)(L,{children:[(0,T.jsx)(m,{closeModal:n}),(0,T.jsxs)(R,{children:[(0,T.jsx)(c,{src:i?`${v}w185${i}`:null,name:r,variant:`circle`}),(0,T.jsxs)(z,{children:[(0,T.jsxs)(`p`,{className:`review__user-name`,children:[`@`,r]}),(0,T.jsx)(`p`,{className:`review__date`,children:t})]})]}),(0,T.jsxs)(B,{children:[(0,T.jsx)(`div`,{className:`review__ratingStars_wrapper`,children:(0,T.jsx)(d,{rating:a,created_at:s})}),(0,T.jsx)(`p`,{className:`review__text`,children:o})]})]})},H=u.li`
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
`,U=u.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,W=u.div`
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
`,G=u.div`
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
`,K=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,[o,s]=(0,N.useState)(!1),[l,u]=(0,N.useState)(null),p=new Date-new Date(a),m=Math.floor(p/(1e3*60)),h=Math.floor(p/(1e3*60*60)),g=Math.floor(p/(1e3*60*60*24)),_;_=m<60?`${m} minutes ago`:h<24?`${h} hours ago`:`${g} days ago`;let y=e=>{u(e),s(!0)},b=()=>{s(!1),u(null)};return(0,T.jsxs)(H,{onClick:()=>y(e),children:[(0,T.jsxs)(U,{children:[(0,T.jsx)(c,{src:n?`${v}w185${n}`:null,name:t,variant:`circle`}),(0,T.jsxs)(W,{children:[(0,T.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,T.jsx)(`p`,{className:`review__date`,children:_})]})]}),(0,T.jsx)(d,{rating:r,created_at:a}),(0,T.jsx)(G,{children:(0,T.jsx)(`p`,{className:`review__text`,children:i})}),o&&(0,T.jsx)(f,{closeModal:b,children:(0,T.jsx)(V,{review:l,reviewDateText:_,closeModal:b})})]})},q=({countries:e})=>e?.length?(0,T.jsxs)(`p`,{children:[(0,T.jsx)(`span`,{className:`movie-details__label`,children:`Countries: `}),e.map((t,n)=>(0,T.jsxs)(`span`,{className:`movie-details__value`,children:[t.iso_3166_1,n<e.length-1?`, `:``]},t.iso_3166_1))]}):null,ie=u.div`
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
`,J=({runtime:e,revenue:t,production_countries:n,tagline:r})=>(0,T.jsxs)(ie,{children:[(0,T.jsx)(se,{runtime:e}),(0,T.jsx)(oe,{revenue:t}),(0,T.jsx)(q,{countries:n}),(0,T.jsx)(`p`,{className:`tagline`,children:r})]}),Y=u.div`
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
`,X=({rating:e})=>(0,T.jsxs)(Y,{children:[(0,T.jsx)(s,{className:`star-icon`}),(0,T.jsx)(`span`,{children:e.toFixed(1)})]}),ae=u.p`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.2rem;
`,Z=({date:e})=>e?(0,T.jsx)(ae,{children:e.substring(0,4)}):null,oe=({revenue:e})=>{if(!e)return null;let t=e.toLocaleString(`ru-RU`);return(0,T.jsxs)(`p`,{children:[(0,T.jsx)(`span`,{className:`movie-details__label`,children:`Revenue: `}),(0,T.jsxs)(`span`,{className:`movie-details__value`,children:[`$`,t]})]})},se=({runtime:e})=>{if(!e)return null;let t=Math.floor(e/60),n=e%60;return(0,T.jsxs)(`p`,{children:[(0,T.jsx)(`span`,{className:`movie-details__label`,children:`Runtime: `}),(0,T.jsxs)(`span`,{className:`movie-details__value`,children:[t>0&&`${t}h `,n,`m`]})]})},ce=u.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`,Q=u.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`,le=({vote_average:e,vote_count:t,release_date:n})=>(0,T.jsxs)(ce,{children:[(0,T.jsx)(X,{rating:e}),(0,T.jsx)(Q,{}),(0,T.jsx)(de,{count:t}),(0,T.jsx)(Q,{}),(0,T.jsx)(Z,{date:n})]}),ue=u.span`
  color: var(--text-color);
  font-size: 1rem;
`,de=({count:e})=>{let t=e??0;return(0,T.jsxs)(ue,{children:[t>=1e3?`${(t/1e3).toFixed(1).replace(`.0`,``)}K+`:t,` Review`,t===1?``:`s`]})},fe=u.section``,pe=u.div`
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
`,$=u.div`
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
`,me=({movie:e})=>{if(!e)return null;let{backdrop_path:t,poster_path:n,original_title:r,vote_average:i,vote_count:a,overview:o,release_date:s,runtime:c,revenue:u,production_countries:d,tagline:f,genres:m}=e,g=`${v}w1280${t}`,_=n?`${v}w500${n}`:h;return(0,T.jsx)(fe,{children:(0,T.jsx)(pe,{className:`movie-details__backdrop`,style:{backgroundImage:`url(${g})`},children:(0,T.jsx)(p,{children:(0,T.jsxs)(`div`,{className:`movie-content`,children:[(0,T.jsx)(`img`,{src:_,alt:r,className:`movie-poster`,loading:`lazy`}),(0,T.jsxs)($,{children:[(0,T.jsx)(`h1`,{className:`movie__title`,children:r}),(0,T.jsx)(le,{vote_average:i,vote_count:a,release_date:s}),(0,T.jsx)(`p`,{className:`movie__overview`,children:o}),(0,T.jsx)(A,{genres:m}),(0,T.jsx)(J,{runtime:c,revenue:u,production_countries:d,tagline:f}),(0,T.jsx)(l,{})]})]})})})})},he=u.div`
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
`,ge=()=>(0,T.jsxs)(he,{children:[(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:(0,T.jsx)(a,{to:`cast`,children:`Cast`})}),(0,T.jsx)(`hr`,{className:`divider`}),(0,T.jsx)(`li`,{children:(0,T.jsx)(a,{to:`reviews`,children:`Reviews`})})]}),(0,T.jsx)(n,{})]}),_e=u.div`
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
`,ve=()=>(0,T.jsxs)(_e,{children:[(0,T.jsx)(`h2`,{class:`no-reviews__title`,children:`There are no reviews yet`}),(0,T.jsx)(`p`,{class:`no-reviews__text`,children:`Be the first to share your thoughts!`})]}),ye=u.div`
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
`,be=({seriesItem:e,closeModal:t})=>{let[n,r]=(0,N.useState)([]);(0,N.useEffect)(()=>{re().then(e=>r(e.genres)).catch(e=>console.error(e))},[]);let{original_name:i,first_air_date:o,adult:s,genre_ids:c,overview:l,backdrop_path:u}=e,d=(0,N.useMemo)(()=>n.filter(e=>{if(c.includes(e.id))return e.name}),[c,n]);return(0,T.jsx)(ye,{children:(0,T.jsxs)(`article`,{children:[(0,T.jsxs)(`header`,{className:`modal__header`,style:{backgroundImage:`url(${`${v}w1280/${u}`})`},children:[(0,T.jsx)(m,{closeModal:t}),(0,T.jsx)(`h2`,{className:`modal__title`,children:i})]}),(0,T.jsxs)(`section`,{className:`modal__content`,children:[(0,T.jsxs)(`div`,{className:`modal__info`,children:[(0,T.jsx)(`span`,{className:`modal__year`,children:o?.substring(0,4)}),s&&(0,T.jsx)(`span`,{className:`modal__age`,children:`18+`}),(0,T.jsx)(`span`,{className:`modal__mediaType`,children:`series`}),(0,T.jsx)(A,{genres:d})]}),(0,T.jsx)(`p`,{className:`modal__overview`,children:l}),(0,T.jsx)(a,{to:`/series/${e.id}`,className:`modal__info-btn`,children:`More Info`})]})]})})},xe=u.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,Se=u.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin: 20px auto 50px auto;
`,Ce=()=>{let{id:e}=r(),[t,n]=(0,N.useState)([]);return(0,N.useEffect)(()=>{(async()=>{try{n((await te(e)).results)}catch(e){console.error(e)}})()},[e]),t.length===0?(0,T.jsx)(ve,{}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(xe,{children:[`User Reviews `,(0,T.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,T.jsx)(Se,{children:t.map(e=>(0,T.jsx)(K,{review:e},e.id))})]})};export{I as a,C as c,ee as d,y as f,me as i,S as l,_ as m,be as n,P as o,g as p,ge as r,E as s,Ce as t,x as u};