import { FaStar } from 'react-icons/fa';

const ReviewList = () => {
  return (
    <ul className="reviews__list">
      <li className="review__card">
        <div className="review__header">
          <div className="review__user-avatar">
            <span className="avatar-letter">A</span>
          </div>
          <div className="review__user-info">
            <p className="review__user-name">Alice Greenwood</p>
            <p className="review__date">3 days ago</p>
          </div>
          <div className="review__rating">
            <FaStar className="star-icon" />
            <span>5.0</span>
          </div>
        </div>

        <div className="review__body">
          <p className="review__text">
            Oppenheimer is a cinematic masterpiece. Nolan's direction is superb,
            and Cillian Murphy gives a defining performance...
          </p>
        </div>
      </li>
      {/* Другие отзывы... */}
    </ul>
  );
};

export { ReviewList };
