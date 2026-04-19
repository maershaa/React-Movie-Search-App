import { Outlet, Link } from 'react-router-dom';
import { DetailsTabsWrapper } from './DetailsTabs.styled.jsx';
const DetailsTabs = () => {
  return (
    <DetailsTabsWrapper>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <hr className="divider" />

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </DetailsTabsWrapper>
  );
};

export { DetailsTabs };
