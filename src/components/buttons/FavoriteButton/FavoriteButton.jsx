import { ReactComponent as FavoriteIcon } from '@assets/svg-icons/favorite-icon.svg';
import { IconButton } from '@ui';

const FavoriteButton = ({ className, clickHandler }) => {
  return (
    <IconButton className={className}>
      <FavoriteIcon />
      <span className='visually-hidden'>Додати до обраного</span>
    </IconButton>
  );
};

export default FavoriteButton;
