import styled from '@emotion/styled';

const ScrollWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 50px;
  z-index: 3;
`;

const ScrollToTopBtn = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: var(--card-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Начальное состояние для анимации */
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: var(--transition);

  box-shadow: 0 4px 15px var(--shadow-color);

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover {
    background-color: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(240, 123, 74, 0.4);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export { ScrollWrapper, ScrollToTopBtn };
