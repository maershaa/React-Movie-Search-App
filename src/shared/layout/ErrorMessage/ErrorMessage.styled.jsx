import styled from '@emotion/styled';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 60px 20px;
  text-align: center;
  width: 100%;
`;

const IconWrapper = styled.div`
  background-color: var(--card-secondary-color);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid var(--border-color);

  svg {
    color: var(--text-secondary);
    opacity: 0.6;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.4rem;
  color: var(--text-primary);
`;

const MessageText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: 0.5px;

  max-width: 420px;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background-color: var(--accent-color);
  border-radius: 2px;
  opacity: 0.5;
`;

const RetryButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ff4d4f;
  color: white;

  transition: var(--transition);

  &:hover {
    filter: brightness(0.75);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }
`;

export {
  ErrorContainer,
  IconWrapper,
  Title,
  MessageText,
  Divider,
  RetryButton,
};
