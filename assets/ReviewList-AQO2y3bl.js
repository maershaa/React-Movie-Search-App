import{i as e,t}from"./jsx-runtime-D-oznMWL.js";import{c as n,d as r}from"./iconBase-55VGzWiC.js";import{n as i}from"./movieDetails-kVHrEdTg.js";import{b as a,f as o,o as s,t as c}from"./index-8RwDOJc0.js";import"./CastList-CtQwRqhY.js";var l=e(r(),1),u=a.li`
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
`,d=a.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`,f=a.div`
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
`,p=a.div`
  p {
    padding: 10px;
    text-align: justify;

    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;
  }
`,m=t(),h=({review:e})=>{let{author_details:{username:t,avatar_path:n,rating:r},content:i,created_at:a}=e,l=new Date-new Date(a),h=Math.floor(l/(1e3*60)),g=Math.floor(l/(1e3*60*60)),_=Math.floor(l/(1e3*60*60*24)),v;return v=h<60?`${h} minutes ago`:g<24?`${g} hours ago`:`${_} days ago`,(0,m.jsxs)(u,{children:[(0,m.jsxs)(d,{children:[(0,m.jsx)(o,{src:n?`${s}w185${n}`:null,name:t,variant:`circle`}),(0,m.jsxs)(f,{children:[(0,m.jsxs)(`p`,{className:`review__user-name`,children:[`@`,t]}),(0,m.jsx)(`p`,{className:`review__date`,children:v})]})]}),(0,m.jsx)(c,{rating:r,created_at:a}),(0,m.jsx)(p,{children:(0,m.jsx)(`p`,{className:`review__text`,children:i})})]})},g=a.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`,_=a.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin-top: 20px;
`,v=()=>{let{id:e}=n(),[t,r]=(0,l.useState)([]);return(0,l.useEffect)(()=>{(async()=>{try{let t=await i(e);console.log(`🚀 ~ loadCastList ~ response:`,t),r(t.results)}catch(e){console.error(e)}})()},[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(g,{children:[`User Reviews `,(0,m.jsxs)(`span`,{className:`reviews__qty`,children:[`(`,t.length,`)`]})]}),(0,m.jsx)(_,{children:t.map(e=>(0,m.jsx)(h,{review:e},e.id))})]})};export{v as default};