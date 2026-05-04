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
  color: var(--white);
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: var(--white);
  }
`;

export { BackButton };
