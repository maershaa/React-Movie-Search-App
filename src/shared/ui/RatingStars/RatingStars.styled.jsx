import styled from '@emotion/styled';

const RatingStarsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  padding: 0 0 5px 48px;

  .star-icon {
    color: var(--primary-color);
  }
`;

export { RatingStarsWrapper };
