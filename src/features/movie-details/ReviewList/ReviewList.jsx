import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '@/api';
import { ReviewListItem } from '@/features';
import { Title, ReviewListWrapper } from './ReviewList.styled';

const ReviewList = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadCastList = async () => {
      try {
        const response = await getMovieReviews(id);

        console.log('🚀 ~ loadCastList ~ response:', response);
        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    loadCastList();

    // return () => {
    // }
  }, [id]);

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
