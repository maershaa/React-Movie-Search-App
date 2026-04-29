import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const ReviewItemSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 30px;

  justify-content: space-around;
  align-items: center;

  margin-bottom: 20px;
`;

const ReviewItem = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 20px;
  border-radius: var(--radius-sm);
  background: var(--card-secondary-color);
  box-shadow: var(--shadow);

  .skeleton_header {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
  }

  .skeleton_image,
  .skeleton_username,
  .skeleton_review {
    background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s infinite linear;
  }

  .skeleton_image {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .skeleton_username {
    width: 120px;
    height: 14px;
    border-radius: 6px;
  }

  .skeleton_review {
    height: 20px;
    width: 100%;
    border-radius: 6px;
    margin-top: 8px;
    margin-bottom: 15px;
  }
`;
export { ReviewItemSkeletonWrapper, ReviewItem };
