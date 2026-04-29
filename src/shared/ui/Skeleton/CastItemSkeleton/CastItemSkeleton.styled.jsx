import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const CastItemSkeletonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 20px;
`;

const SkeletonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 160px;
  flex-shrink: 0;

  padding: 16px;
  border-radius: var(--radius-sm);
  background: var(--card-secondary-color);
  box-shadow: var(--shadow);

  .skeleton__info {
    width: 100%;
    width: 160px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skeleton__image,
  .skeleton__title,
  .skeleton__text {
    background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s infinite linear;
  }

  .skeleton__image {
    width: 145px;
    height: 145px;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  .skeleton__title {
    width: 80%;
    height: 22px;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  .skeleton__text {
    width: 55%;
    height: 16px;
    border-radius: 6px;
  }
`;
export { CastItemSkeletonWrapper, SkeletonItem };
