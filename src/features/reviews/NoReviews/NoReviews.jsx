import { NoReviewsWrapper } from './NoReviews.styled';
const NoReviews = () => {
  return (
    <NoReviewsWrapper>
      <h2 class="no-reviews__title">There are no reviews yet</h2>
      <p class="no-reviews__text">Be the first to share your thoughts!</p>
    </NoReviewsWrapper>
  );
};

export { NoReviews };
