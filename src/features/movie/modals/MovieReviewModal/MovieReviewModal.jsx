import { getAvatar } from '@/shared';

import { Avatar, ModalCloseButton, RatingStars } from '@/shared';
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
  const avatar = getAvatar(avatar_path, 185);

  return (
    <ReviewCard>
      <ModalCloseButton closeModal={closeModal} />

      <ReviewHeader>
        <Avatar src={avatar} name={username} variant="circle" />
        <UserInfo>
          <p className="review__user-name">@{username}</p>
          <p className="review__date">{reviewDateText}</p>
        </UserInfo>
      </ReviewHeader>

      <ReviewBody>
        <div className="review__ratingStars_wrapper">
          <RatingStars rating={rating} created_at={created_at} />
        </div>
        <p className="review__text">{content}</p>
      </ReviewBody>
    </ReviewCard>
  );
};

export { MovieReviewModal };
