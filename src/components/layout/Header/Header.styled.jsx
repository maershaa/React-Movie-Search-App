import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 20px;
  margin-bottom: 20px;

  .header__logo {
    margin-right: auto;

    font-size: 2rem;
    font-weight: 700;
    color: var(--text-color);
  }

  .logo-accent {
    color: var(--primary-color);
  }

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: nowrap;
    gap: 10px;
  }

  .nav-item a {
    font-size: 1.2rem;
    font-weight: 700;

    color: var(--text-color);
  }
  .nav-item a .active {
    color: var(--primary-color);
  }

  .nav-item a .active::after {
    content: '';
    display: block;
    height: 2px;
    background-color: var(--primary-color);
  }

  .header__actions {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    margin-left: 5%;
  }

  .header__actions button {
    background-color: transparent;
  }

  .header__actions svg {
    color: var(--theme-icon-color);

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .header__actions svg:hover {
    filter: drop-shadow(0 0 8px var(--theme-icon-color));
    transform: rotate(45deg);
  }
`;

export { HeaderWrapper };
