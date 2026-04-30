import styled from '@emotion/styled';
const CastListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch; //заставляет всех детей принимать высоту самого высокого соседа

  overflow-x: auto;
  overflow-y: hidden;

  gap: 16px;
  margin: 20px auto 50px auto;

  padding: 10px 0;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 20px;
  }
`;

export { CastListWrapper };
