import { BASE_IMG_URL } from '@/api/config';
import { No_Poster } from '@/assets/images';
import { MovieCard } from '@/components';
import { MovieListContainer } from './MovieList.styled';
const MovieList = ({ moviesArr }) => {
  return (
    <MovieListContainer>
      {moviesArr.map(
        ({ id, title, poster_path, vote_average, release_date }) => (
          <MovieCard
            key={id}
            title={title}
            poster={poster_path ? `${BASE_IMG_URL}${poster_path}` : No_Poster}
            rating={vote_average.toFixed(1)}
            release_year={release_date.substring(0, 4)}
          />
        )
      )}
    </MovieListContainer>
  );
};

export { MovieList };
