import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './BaseModal.styled';

const modalRoot = document.getElementById('modal-root');

const BaseModal = ({ children, closeModal }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  // ! ЧТОБЫ  при открытой модалке нельзя было скроллить фон
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>{children}</Modal>
    </Backdrop>,
    modalRoot
  );
};
export { BaseModal };
