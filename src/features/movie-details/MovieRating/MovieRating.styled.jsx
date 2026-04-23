import styled from '@emotion/styled';
const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .star-icon {
    color: var(--primary-color);
  }

  span {
    color: var(--white);

    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export { RatingBadge };
