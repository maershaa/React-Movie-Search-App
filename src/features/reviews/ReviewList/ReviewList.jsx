import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '@/api';
import { ReviewListItem } from '@/features';
import { Title, ReviewListWrapper } from './ReviewList.styled';
import { NoReviews } from '@/features/reviews';

const ReviewList = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadCastList = async () => {
      try {
        const response = await getMovieReviews(id);

        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    loadCastList();

    // return () => {
    // }
  }, [id]);

  // 1. Если данные еще грузятся — можно вернуть null или спиннер
  // if (isLoading) return <div>Loading...</div>;

  // 2. Если загрузка завершена и отзывов действительно нет
  if (reviews.length === 0) {
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
