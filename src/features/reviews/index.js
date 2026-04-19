export { default as ReviewList } from './ReviewList/ReviewList.jsx';
// React.lazy() работает только с default export.
// import() должен вернуть объект вида:
// { default: Component }
//
// Named export возвращает:
// { MovieReviewsPage: Component }
//
// Поэтому lazy не может понять, какой компонент рендерить.
export { ReviewListItem } from './ReviewListItem/ReviewListItem.jsx';
export { ReviewsCount } from './ReviewsCount/ReviewsCount.jsx';
export { NoReviews } from './NoReviews/NoReviews.jsx';
