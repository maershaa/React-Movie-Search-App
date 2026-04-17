import styled from '@emotion/styled';

const Title = styled.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const ReviewListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin-top: 20px;
`;

export { ReviewListWrapper, Title };
