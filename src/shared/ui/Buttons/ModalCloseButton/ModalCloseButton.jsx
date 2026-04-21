import { CloseBtn } from './ModalCloseButton.styled';
import { IoClose } from 'react-icons/io5';

const ModalCloseButton = ({ closeModal }) => {
  return (
    <CloseBtn
      className="modal__close"
      onClick={e => {
        e.stopPropagation(); // Останавливаем всплытие события через stopPropagation(), чтобы клик по кнопке закрытия не передался родительскому элементу у которого может быть обработчик открытия модального окна.
        closeModal();
      }}
      aria-label="Close"
    >
      <IoClose size={32} />
    </CloseBtn>
  );
};

export { ModalCloseButton };
