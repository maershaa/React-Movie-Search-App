import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const MediaCardSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  gap: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
`;

const Card = styled.div`
  width: 300px;
  flex-shrink: 0;
  height: 440px;

  padding: 20px;

  background-color: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: var(--transition);

  .skeleton_image,
  .skeleton_title,
  .skeleton_rating,
  .skeleton_year {
    background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s infinite linear;

    border-radius: var(--radius-xs);
  }

  .skeleton_image {
    width: 260px;
    height: 300px;
  }

  .skeleton_title {
    height: 30px;
    width: 80%;
    border-radius: 6px;
    margin: 22px auto;
  }

  .skeleton_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .skeleton_rating {
    height: 20px;
    width: 20%;
  }
  .skeleton_year {
    height: 20px;
    width: 30%;
  }
`;

export { MediaCardSkeletonWrapper, Card };
