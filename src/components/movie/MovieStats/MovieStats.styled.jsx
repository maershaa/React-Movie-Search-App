import styled from '@emotion/styled';

const MovieStatsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.8rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: var(--border-color);
`;

export { MovieStatsWrapper, Divider };
