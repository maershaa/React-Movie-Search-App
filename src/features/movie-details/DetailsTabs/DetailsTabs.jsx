import { Outlet, NavLink } from 'react-router-dom';
import {
  DetailsTabsWrapper,
  DetailsTabsList,
  DetailsTabsItem,
} from './DetailsTabs.styled.jsx';

const DetailsTabs = () => {
  return (
    <DetailsTabsWrapper>
      <DetailsTabsList>
        <DetailsTabsItem>
          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Cast
          </NavLink>
        </DetailsTabsItem>

        <DetailsTabsItem>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Reviews
          </NavLink>
        </DetailsTabsItem>
      </DetailsTabsList>

      <Outlet />
    </DetailsTabsWrapper>
  );
};

export { DetailsTabs };
