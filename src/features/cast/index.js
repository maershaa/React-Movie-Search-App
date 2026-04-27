export { default as CastList } from './CastList/CastList.jsx';
// React.lazy() работает только с default export.
// import() должен вернуть объект вида:
// { default: Component }
//
// Named export возвращает:
// { MovieReviewsPage: Component }
//
// Поэтому lazy не может понять, какой компонент рендерить.

export { CastListItem } from './CastListItem/CastListItem.jsx';
export { NoCast } from './NoCast/NoCast.jsx';
