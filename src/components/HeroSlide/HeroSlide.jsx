import { Button } from '@ui';

const HeroSlide = ({ data }) => {
  const { img, title, href } = data;

  return (
    <div
      className='m-slide'
      style={{ backgroundImage: `url(${img})` }}>
      <div className='m-slide-title'>
        {title}

        <Button href={href}>Дивитися</Button>
      </div>
    </div>
  );
};
export default HeroSlide;
