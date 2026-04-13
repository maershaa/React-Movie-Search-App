const MovieReleaseDate = ({ date }) => {
  if (!date) return null;

  const release_year = date.substring(0, 4);
  return <p>{release_year}</p>;
};

export { MovieReleaseDate };
