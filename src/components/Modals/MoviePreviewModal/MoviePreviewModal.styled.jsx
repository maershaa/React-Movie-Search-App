import styled from '@emotion/styled';
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  color: var(--text-color);

  border-radius: 12px;
  font-family: system-ui, sans-serif;

  article {
    display: flex;
    flex-direction: column;
  }

  .modal__header {
    position: relative;

    width: 100%;
    height: 56.25vw;
    max-height: 500px;

    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;

    overflow: hidden;
  }

  .modal__title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 2;

    font-size: 2rem;
    font-weight: 700;

    color: #fff;
  }

  .modal__header::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, transparent 60%),
      linear-gradient(to right, rgba(0, 0, 0, 0.8) 20%, transparent 60%);
  }

  .modal__content {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    padding: 20px;
  }

  .modal__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 10px;
  }

  .modal__year,
  .modal__age,
  .modal__mediaType {
    padding: 4px 8px;
    background: var(--accent);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xs);
    color: var(--text-secondary);
  }

  .modal__overview {
    margin: 20px 0 20px 0;
    text-align: left;
  }

  .modal__info-btn {
    background: var(--accent);
    color: var(--primary-color);

    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);

    font-weight: 600;

    cursor: pointer;

    transition: var(--transition);

    &:hover {
      background: var(--primary-color);
      color: var(--white);
      border: 1px solid var(--primary-color);
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  z-index: 3;
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

export { Container, CloseBtn };
