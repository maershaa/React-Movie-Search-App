// import { SeriesCard } from './SeriesCard.styled';

const SeriesCard = ({ series, openModal }) => {
  //  {
  //   "backdrop_path": "/mAJ84W6I8I272Da87qplS2Dp9ST.jpg",
  //   "first_air_date": "2023-01-23",
  //   "genre_ids": [
  //     9648,
  //     18
  //   ],
  //   "id": 202250,
  //   "name": "Dirty Linen",
  //   "origin_country": [
  //     "PH"
  //   ],
  //   "original_language": "tl",
  //   "original_name": "Dirty Linen",
  //   "overview": "To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.",
  //   "popularity": 2797.914,
  //   "poster_path": "/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg",
  //   "vote_average": 5,
  //   "vote_count": 13
  // },
  const { original_name, poster_path, vote_average, first_air_date } = series;

  return <></>;
};

export { SeriesCard };

// <MovieItem className="movie-card" onClick={() => openModal(movie)}>
//   <div className="movie-card__poster-wrapper">
//     <img
//       src={poster_path ? `${BASE_IMG_URL}w500${poster_path}` : No_Poster}
//       alt={original_name}
//       className="movie-card__poster"
//       loading="lazy"
//       onError={e => {
//         e.target.src = No_Poster; // Если картинка не загрузится, подставим заглушку
//       }}
//     />
//   </div>

//   <div className="movie-card__content">
//     <h4 className="movie-card__title">{original_name}</h4>
//     <div className="movie-card__meta">
//       <MovieRating rating={vote_average} />

//       <MovieReleaseDate date={first_air_date} />
//     </div>
//   </div>
// </MovieItem>
