import { Link } from 'react-router-dom';
import ShowMoreButton from '../buttons/ShowMoreButton/ShowMoreButton';

const NewsCard = ({ title, exerpt, thumbnail, slug }) => {
  console.log(title, exerpt, thumbnail, slug);
  return (
    <div className='news-card'>
      <div className='news-card__photo'>
        <img
          src={process.env.REACT_APP_STRAPI_BASE_URI + thumbnail}
          alt='#'
        />
      </div>
      <Link
        to={slug}
        className='news-card__title'>
        {title}
      </Link>
      <p className='news-card__excerpt'>{exerpt}</p>

      <ShowMoreButton href={slug} />
    </div>
  );
};

export default NewsCard;
