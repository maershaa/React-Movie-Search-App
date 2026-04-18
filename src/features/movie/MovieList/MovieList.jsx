import { MovieCard } from '@/features';
import { MovieListContainer } from './MovieList.styled';
const MovieList = ({ moviesArr, openModal }) => {
  return (
    <MovieListContainer>
      {moviesArr.map(movie => (
        <MovieCard key={movie.id} movie={movie} openModal={openModal} />
      ))}
    </MovieListContainer>
  );
};

export { MovieList };
