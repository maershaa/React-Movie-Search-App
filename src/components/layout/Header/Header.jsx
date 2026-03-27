import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="logo-accent">Movie</span>Pulse
      </div>

      <nav className="header__nav">
        <ul className="nav-list">
          <li className="nav-item nav-item--active">Home</li>
          <li className="nav-item">Movies</li>
        </ul>
      </nav>

      <div className="header__actions">
        <button className="icon-btn search-trigger">
          <FaSearch />
        </button>
        <button className="icon-btn theme-toggle">
          <FaMoon />
        </button>
        <div className="user-profile">
          <img
            src="/avatar-placeholder.png"
            alt="Profile"
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
};

export { Header };
