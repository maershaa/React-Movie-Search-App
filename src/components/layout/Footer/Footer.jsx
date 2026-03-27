import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__main">
          <div className="footer__logo">
            <span className="logo-accent">Movie</span>Pulse
          </div>
          <p className="footer__tagline">
            Your ultimate guide to the world of cinema. Explore, search, and
            enjoy.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Github" className="social-link">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Telegram" className="social-link">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-group">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-group">
            <h4 className="footer__nav-title">Support</h4>
            <ul className="footer__nav-list">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © {currentYear} MoviePulse. Created for portfolio. Data provided by
            TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
