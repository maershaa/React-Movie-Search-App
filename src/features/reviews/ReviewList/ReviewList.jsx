import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getMovieReviews, getSeriesReviews } from '@/api';
import { ReviewListItem, NoReviews } from '@/features';
import { Title, ReviewListWrapper } from './ReviewList.styled';
import { ErrorMessage, ReviewItemSkeleton } from '@/shared';

const ReviewList = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let location = useLocation();

  const loadReviewList = useCallback(
    async mediaId => {
      try {
        setLoading(true);
        setError('');
        if (location.pathname.includes('movies')) {
          const response = await getMovieReviews(mediaId);
          setReviews(response.results);
        } else if (location.pathname.includes('series')) {
          const response = await getSeriesReviews(mediaId);
          setReviews(response.results);
        }
      } catch {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    if (!id) return;

    loadReviewList(id);
  }, [id, loadReviewList]);

  if (loading) return <ReviewItemSkeleton count={reviews.length} />;
  if (error)
    return <ErrorMessage message={error} onRetry={() => loadReviewList(id)} />;
  if (reviews.length === 0) {
    // Если загрузка завершена и отзывов действительно нет
    return <NoReviews />;
  }

  return (
    <>
      <Title>
        User Reviews <span className="reviews__qty">({reviews.length})</span>
      </Title>

      <ReviewListWrapper>
        {reviews.map(review => (
          <ReviewListItem key={review.id} review={review} />
        ))}
      </ReviewListWrapper>
    </>
  );
};

export default ReviewList;
