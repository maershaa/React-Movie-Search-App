import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FooterWrapper,
  Main,
  Logo,
  Tagline,
  Socials,
  SocialLink,
  Bottom,
  TMDBIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <Main>
        <Logo>
          <span>Movie</span>Pulse
        </Logo>

        <Tagline>
          Discover movies and series with TMDB-powered search and smart browsing
          experience.
        </Tagline>

        <Socials>
          <li>
            <SocialLink
              href="https://github.com/maershaa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
          </li>

          <li>
            <SocialLink
              href="https://www.linkedin.com/in/valeriiayefremova/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
          </li>
        </Socials>
      </Main>

      <Bottom>
        © 2026 MoviePulse. Built as a portfolio project. Powered by TMDB API.
        <TMDBIcon />
      </Bottom>
    </FooterWrapper>
  );
};

export { Footer };
