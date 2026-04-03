import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  .header__logo {
    margin-right: auto;

    font-size: 2rem;
    font-weight: 700;
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
`;

export { HeaderWrapper };
