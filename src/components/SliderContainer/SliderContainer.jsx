import cn from 'classnames';

const SliderContainer = ({ children, className, type }) => {
  return (
    <div
      className={cn(className, {
        'cards-slider-container': type === 'products',
        'news-slider-container': type === 'news',
        'slider-container': !type,
      })}>
      {children}
    </div>
  );
};

export default SliderContainer;
