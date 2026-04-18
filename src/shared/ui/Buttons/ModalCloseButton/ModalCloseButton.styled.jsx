import styled from '@emotion/styled';

const CloseBtn = styled.button`
  position: absolute;
  z-index: 30000;
  top: 15px;
  right: 15px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: #fff;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  transition: transform 0.2s ease;
  background: 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: var(--accent);
  }

  &:active {
    transform: scale(1.05);
  }
`;

export { CloseBtn };
