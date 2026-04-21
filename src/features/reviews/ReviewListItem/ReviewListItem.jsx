import { BASE_IMG_URL } from '@/api/config';
import { BaseModal, RatingStars, Avatar } from '@/shared';
import { MovieReviewModal } from '@/features';

import { useState } from 'react';
import {
  ReviewCard,
  ReviewHeader,
  UserInfo,
  ReviewBody,
} from './ReviewListItem.styled';

const ReviewListItem = ({ review }) => {
  const {
    author_details: { username, avatar_path, rating },
    content,
    created_at,
  } = review;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const now = new Date();
  const postDate = new Date(created_at);

  const diffMs = now - postDate;
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  let reviewDateText;

  if (minutes < 60) {
    reviewDateText = `${minutes} minutes ago`;
  } else if (hours < 24) {
    reviewDateText = `${hours} hours ago`;
  } else {
    reviewDateText = `${days} days ago`;
  }

  const openModal = reviewValue => {
    setSelectedReview(reviewValue);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <ReviewCard onClick={() => openModal(review)}>
      <ReviewHeader>
        <Avatar
          src={avatar_path ? `${BASE_IMG_URL}w185${avatar_path}` : null}
          name={username}
          variant="circle"
        />
        <UserInfo>
          <p className="review__user-name">@{username}</p>
          <p className="review__date">{reviewDateText}</p>
        </UserInfo>
      </ReviewHeader>

      <RatingStars rating={rating} created_at={created_at} />

      <ReviewBody>
        <p className="review__text">{content}</p>
      </ReviewBody>

      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          <MovieReviewModal
            review={selectedReview}
            reviewDateText={reviewDateText}
            closeModal={closeModal}
          />
        </BaseModal>
      )}
    </ReviewCard>
  );
};

export { ReviewListItem };
