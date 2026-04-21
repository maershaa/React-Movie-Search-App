import styled from '@emotion/styled';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: 0.5px;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background-color: var(--accent-color);
  margin-top: 12px;
  border-radius: 2px;
  opacity: 0.5;
`;

export { MessageContainer, IconWrapper, Text, Divider };
