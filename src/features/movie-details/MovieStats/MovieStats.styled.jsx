import styled from '@emotion/styled';

const MovieStatsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;

  span,
  p {
    color: var(--white);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: var(--accent-color);
`;

export { MovieStatsWrapper, Divider };
