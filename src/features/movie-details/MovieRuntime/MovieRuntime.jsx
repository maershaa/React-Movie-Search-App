const MovieRuntime = ({ runtime }) => {
  if (!runtime) return null;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <p>
      <span className="details__label">Runtime: </span>
      <span className="details__value">
        {hours > 0 && `${hours}h `}
        {minutes}m
      </span>
    </p>
  );
};

export { MovieRuntime };
