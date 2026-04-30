import styled from '@emotion/styled';
import { SiThemoviedatabase } from 'react-icons/si';

const FooterWrapper = styled.footer`
  margin-top: 3.75rem;
  padding: 1.5rem 1rem;
  border-top: 1px solid var(--border-color);
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: -0.01em;

  span {
    color: var(--primary-color);
  }
`;

const Tagline = styled.p`
  max-width: 22rem;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
  font-style: italic;
`;

const Socials = styled.ul`
  display: flex;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin-top: 0.375rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;

  background: var(--card-secondary-color);
  color: var(--text-color);

  transition: var(--transition);

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    background: var(--primary-color);
    color: var(--white);
    transform: translateY(-0.125rem);
    box-shadow: var(--glow);
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }
`;

const Bottom = styled.div`
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-color);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  color: var(--text-secondary);
  flex-wrap: wrap;
  text-align: center;
`;

const TMDBIcon = styled(SiThemoviedatabase)`
  font-size: 1.6rem;
  color: #01b4e4;
`;

export {
  FooterWrapper,
  Main,
  Logo,
  Tagline,
  Socials,
  SocialLink,
  Bottom,
  TMDBIcon,
};
