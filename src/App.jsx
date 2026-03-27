import {
  FaStar,
  FaSearch,
  FaMoon,
  FaSun,
  FaRegCommentDots,
} from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { Header, Input, Footer } from '@/components';
import { HomePage, MovieDetailsPage } from '@/pages';

function App() {
  return (
    <>
      <HomePage />
      <MovieDetailsPage />
    </>
  );
}

export default App;
