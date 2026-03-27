import { FaSearch } from 'react-icons/fa';

const Input = () => {
  return (
    <section className="search-section">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search movies, genres, actors..."
          className="search-input"
        />
      </div>
    </section>
  );
};

export { Input };
