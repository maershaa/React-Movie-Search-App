import styled from '@emotion/styled';

const SimilarItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--card-secondary-color);
  box-shadow: var(--shadow);

  margin: 0 auto;
  padding: 10px 10px 20px 10px;
  transition: var(--transition);

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);
    cursor: pointer;
  }

  img {
    padding: 10px;
    margin-bottom: 0.9rem;
    max-width: 250px; //так как poster_path === 200 и если не будет изображения с бекенда то заглушка подставится тоже в размере 200
    border-radius: var(--radius-lg);
  }
`;

const Title = styled.h4`
  font-weight: 700;
  margin-bottom: 1rem;
`;
export { SimilarItem, Title };
