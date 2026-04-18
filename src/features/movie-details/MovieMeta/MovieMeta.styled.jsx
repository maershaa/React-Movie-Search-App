import styled from '@emotion/styled';
const MovieMetaWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  margin: 16px 0;

  .movie-details__label {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1rem;
  }

  .movie-details__value {
    font-size: 1rem;
  }

  .tagline {
    font-style: italic;
    font-size: 1rem;
  }
`;
export { MovieMetaWrapper };
