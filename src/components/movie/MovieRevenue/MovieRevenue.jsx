const MovieRevenue = ({ revenue }) => {
  if (!revenue) return null;

  const formatted = revenue.toLocaleString('ru-RU');

  return <p className="movie-meta__item">${formatted}</p>;
};

export { MovieRevenue };
