import { BASE_IMG_URL } from '@/api/config';

import { Avatar, ModalCloseButton } from '@/shared';
import { RatingStars } from '@/components';
// import { useState } from 'react';
import {
  ReviewCard,
  ReviewHeader,
  UserInfo,
  ReviewBody,
} from './MovieReviewModal.styled';

const MovieReviewModal = ({ review, reviewDateText, closeModal }) => {
  const {
    author_details: { username, avatar_path, rating },
    content,
    created_at,
  } = review;
  return (
    <ReviewCard>
      <ModalCloseButton closeModal={closeModal} />

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

      <ReviewBody>
        <RatingStars rating={rating} created_at={created_at} />
        <p className="review__text">{content}</p>
      </ReviewBody>
    </ReviewCard>
  );
};

export { MovieReviewModal };
