import { heroSlides } from '../../data';
import Slider from '@components/Slider';
import HeroSlide from './HeroSlide';

const HeroSlider = () => {
  return (
    <div className='m-slider-container wrapper'>
      <Slider
        data={heroSlides}
        useNavigation={true}
        usePagination={true}
        spaceBetween={30}
        className='m-slider'
        slideComponent={HeroSlide}
      />
    </div>
  );
};

export default HeroSlider;
