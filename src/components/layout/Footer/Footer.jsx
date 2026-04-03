import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer__main">
        <div className="footer__logo">
          <span className="logo-accent">Movie</span>Pulse
        </div>

        <p className="footer__tagline">
          Your ultimate guide to the world of cinema. Explore, search, and
          enjoy.
        </p>
        <ul className="footer__socials">
          <li>
            <Link
              href="https://github.com/maershaa"
              aria-label="Github"
              className="social-link"
            >
              <FaGithub />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/valeriiayefremova/"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © 2026 MoviePulse. Created for portfolio. Data provided by TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
