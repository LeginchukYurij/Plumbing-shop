import cn from 'classnames';

const CardsSliderContainer = ({ children, className }) => {
  return (
    <div className={cn('cards-slider-container', className)}>{children}</div>
  );
};

export default CardsSliderContainer;
