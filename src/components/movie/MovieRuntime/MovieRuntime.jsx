const MovieRuntime = ({ runtime }) => {
  if (!runtime) return null;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <p>
      {hours > 0 && `${hours}h `}
      {minutes}m
    </p>
  );
};

export { MovieRuntime };
