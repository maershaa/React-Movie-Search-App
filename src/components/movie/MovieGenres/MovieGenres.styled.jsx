import styled from '@emotion/styled';

const GenresList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;

  li {
    padding: 5px;
    background: var(--accent);
    border-radius: var(--radius-xs);
  }
`;

export { GenresList };
