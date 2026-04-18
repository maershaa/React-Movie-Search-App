import { IoMdArrowBack } from 'react-icons/io';
import { BackButton } from './BackButton.styles';
const BackButtonComponent = () => {
  return (
    <BackButton type="button">
      <IoMdArrowBack /> Back
    </BackButton>
  );
};

export { BackButtonComponent };
