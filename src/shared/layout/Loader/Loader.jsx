import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#e95a1e"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: '20px' }}
        wrapperClass="custom-loader"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export { Loader };
