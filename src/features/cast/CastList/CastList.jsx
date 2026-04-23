// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { getMovieReviews } from '@/api';
// import { getAvatar } from '@/shared';

const CastList = () => {
  // const { id } = useParams();
  // const [reviews, setReviews] = useState([]);

  // const avatar = getAvatar(avatar_path, 250);

  //   {
  //   "id": 550,
  //   "page": 1,
  //   "results": [
  //     {
  //       "author": "Goddard",
  //       "author_details": {
  //         "name": "",
  //         "username": "Goddard",
  //         "avatar_path": "/https://secure.gravatar.com/avatar/f248ec34f953bc62cafcbdd81fddd6b6.jpg",
  //         "rating": null
  //       },
  //       "content": "Pretty awesome movie.  It shows what one crazy person can convince other crazy people to do.  Everyone needs something to believe in.  I recommend Jesus Christ, but they want Tyler Durden.",
  //       "created_at": "2018-06-09T17:51:53.359Z",
  //       "id": "5b1c13b9c3a36848f2026384",
  //       "updated_at": "2021-06-23T15:58:09.421Z",
  //       "url": "https://www.themoviedb.org/review/5b1c13b9c3a36848f2026384"
  //     },
  //     {

  //   ],
  //   "total_pages": 1,
  //   "total_results": 8
  // }
  return (
    <div className="cast__scroll-wrapper">
      <ul className="cast__list">
        <li className="cast__item">
          <div className="cast__avatar-wrapper">
            {/* <img
              src={
                avatar
              }
              alt="jgb"
              className="cast__avatar"
              loading="lazy"
            /> */}
          </div>
          <div className="cast__info">
            <p className="cast__actor-name">Cillian Murphy</p>
            <p className="cast__character-name">J. Robert Oppenheimer</p>
          </div>
        </li>
        {/* Другие актеры... */}
      </ul>
    </div>
  );
};

export default CastList;
