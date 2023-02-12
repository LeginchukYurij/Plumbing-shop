import cn from 'classnames';
import uniqid from 'uniqid';
import AddToCartButton from '@components/buttons/AddToCartButton';
import CompareButton from '@components/buttons/CompareButton';
import FavoriteButton from '@components/buttons/FavoriteButton';
import { Badge } from '@ui';
import { Link } from 'react-router-dom';

const ProductCard = ({ className, data }) => {
  const { id } = data;
  const { title, actual_price, old_price, thumbnail, badges } =
    data?.attributes;

  return (
    <div className={cn('product-card', className)}>
      <div className='product-card__vision'>
        {badges && (
          <div className='product-card__badges'>
            {badges.map((badge) => (
              <Badge key={uniqid()}>{badge}</Badge>
            ))}
          </div>
        )}

        <Link
          className='product-card__img'
          to={`/products/${id}`}>
          <img
            src={
              process.env.REACT_APP_STRAPI_BASE_URI +
              thumbnail.data.attributes.url
            }
            width='100%'
            height='256'
            alt='#'
          />
        </Link>
      </div>

      <span className='product-card__title'>{title}</span>

      <div className='product-card__footer-wrapper'>
        <div className='product-card__price'>
          <strong>{actual_price} грн.</strong>
          {old_price && <span className='oldprice'>{old_price} грн.</span>}
        </div>

        <div className='product-card__footer'>
          <AddToCartButton />

          <div className='product-card__actions'>
            <CompareButton className='action' />
            <FavoriteButton className='action' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
