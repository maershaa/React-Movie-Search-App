import { FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled.jsx';
import { Avatar } from '@/assets/images/index.js';
import { ThemeContext } from '@/context';
import { useContext } from 'react';
const Header = () => {
  const context = useContext(ThemeContext); //Достаем данные из Context (theme, toggleTheme)
  const { theme, toggleTheme } = context;
  // ❗ ручная защита от неправильного использования Context. если ты забыл обернуть приложение в <ThemeProvider>, то useContext(ThemeContext) вернёт null
  if (!context) {
    throw new Error('ThemeSwitcher must be used within ThemeProvider');
  }

  return (
    <HeaderWrapper>
      <NavLink to="/" className="header__logo" aria-label="Go to homepage">
        <span className="logo-accent">Movie</span>Pulse
      </NavLink>

      <nav className="header__nav">
        <ul className="nav-list">
          <li className="nav-item ">
            <NavLink to={'/'}>
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Home</span>
              )}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/movies'}>
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Movies</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? (
            <FaSun className="light" />
          ) : (
            <FaMoon className="dark" />
          )}
        </button>
        <a
          href="https://www.linkedin.com/in/valeriiayefremova/"
          className="user-profile"
          target="_blank" /* Открывать в новой вкладке */
          rel="noopener noreferrer" /* Безопасность при открытии внешних ссылок */
        >
          <img src={Avatar} alt="Profile" className="user-avatar" width="36" />
        </a>
      </div>
      <hr />
    </HeaderWrapper>
  );
};

export { Header };
