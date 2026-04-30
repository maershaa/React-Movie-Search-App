import styled from '@emotion/styled';

const BackButton = styled.a`
  margin-top: 20px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: 10px;
  border: none;

  background: var(--primary-color);
  color: #fff;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background: var(--accent-color);
  }
`;

export { BackButton };
