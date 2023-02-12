import { ReactComponent as CartIcon } from '@assets/svg-icons/cart-icon.svg';
import { Button } from '@ui';

const AddToCartButton = ({ className, clickHandler }) => {
  return (
    <Button className={className}>
      <CartIcon /> В кошик
    </Button>
  );
};

export default AddToCartButton;
