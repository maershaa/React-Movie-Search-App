import styled from '@emotion/styled';

const GenresList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;

  li {
    padding: 4px 8px;
    background: var(--accent);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xs);
    color: var(--text-secondary);
  }
`;

export { GenresList };
