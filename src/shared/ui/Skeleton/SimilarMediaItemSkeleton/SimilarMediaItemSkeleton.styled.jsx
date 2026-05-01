import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SimilarItemSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: flex-start;
  align-items: stretch;

  overflow-x: auto;
  overflow-y: hidden;

  gap: 16px;
  margin: 20px auto 50px auto;

  padding: 10px 0;
`;

const Item = styled.div`
  width: 100%;
  max-width: 270px;
  min-height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  border-radius: var(--radius-sm);
  background: var(--card-secondary-color);
  box-shadow: var(--shadow);

  .skeleton_image,
  .skeleton_title,
  .skeleton_year {
    background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s infinite linear;
  }

  .skeleton_image {
    width: 240px;
    height: 260px;
    border-radius: var(--radius-lg);
    margin-bottom: 1rem;
  }
  .skeleton_title {
    width: 120px;
    height: 14px;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  .skeleton_year {
    width: 80px;
    height: 12px;
    border-radius: 6px;
  }
`;

export { SimilarItemSkeletonWrapper, Item };
