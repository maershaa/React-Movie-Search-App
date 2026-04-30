import styled from '@emotion/styled';

const Title = styled.h4`
  font-size: 1.5rem;

  span {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const ReviewListWrapper = styled.ul`
  display: grid;
  /*  колонки минимум 300px, максимум — занять все свободное место */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  /* все карточки в сетке будут иметь высоту самой высокой карточки */
  grid-auto-rows: 1fr;

  gap: 20px;
  margin: 20px auto 50px auto;
  padding: 0;
  list-style: none;
`;

export { ReviewListWrapper, Title };
