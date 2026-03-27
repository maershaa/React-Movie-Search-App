const CastList = () => {
  return (
    <div className="cast__scroll-wrapper">
      <ul className="cast__list">
        <li className="cast__item">
          <div className="cast__avatar-wrapper">
            <img
              src="actor-photo.jpg"
              alt="Cillian Murphy"
              className="cast__avatar"
            />
          </div>
          <div className="cast__info">
            <p className="cast__actor-name">Cillian Murphy</p>
            <p className="cast__character-name">J. Robert Oppenheimer</p>
          </div>
        </li>
        {/* Другие актеры... */}
      </ul>
    </div>
  );
};

export { CastList };
