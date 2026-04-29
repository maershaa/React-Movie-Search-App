const MediaCountries = ({ countries }) => {
  if (!countries?.length) return null;

  return (
    <p>
      <span className="details__label">Countries: </span>
      {countries.map((country, index) => (
        <span key={country.iso_3166_1} className="details__value">
          {country.iso_3166_1}
          {index < countries.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
};

export { MediaCountries };
