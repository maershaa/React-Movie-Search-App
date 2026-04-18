const MovieRevenue = ({ revenue }) => {
  if (!revenue) return null;

  const formatted = revenue.toLocaleString('ru-RU');

  return (
    <p>
      <span className="movie-details__label">Revenue: </span>
      <span className="movie-details__value">${formatted}</span>
    </p>
  );
};

export { MovieRevenue };
