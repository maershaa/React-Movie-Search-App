const MovieRevenue = ({ revenue }) => {
  if (!revenue) return null;

  const formatted = revenue.toLocaleString('ru-RU');

  return (
    <p>
      <span className="details__label">Revenue: </span>
      <span className="details__value">${formatted}</span>
    </p>
  );
};

export { MovieRevenue };
