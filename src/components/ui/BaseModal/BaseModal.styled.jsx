import styled from '@emotion/styled';

const Backdrop = styled.div`
  position: fixed;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);

  inset: 0; /* тоже самое что   top: 0; left: 0; */

  width: 100vw;
  height: 100vh;
`;

const Modal = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 1000px;
  width: 90vw;
  min-height: 300px;

  max-height: 90vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  /* padding: 40px; */

  border-radius: var(--radius-sm);

  text-align: center;

  background: var(--bg-color);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  .modal-header {
    margin-bottom: 10px;
  }
`;

export { Backdrop, Modal };
