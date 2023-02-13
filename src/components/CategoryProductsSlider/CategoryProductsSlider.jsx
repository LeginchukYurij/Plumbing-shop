import { sliderBreakpoints } from '@utils';

import ProductCard from '@components/ProductCard';
import Section from '@components/Section';
import SectionHead from '@components/Section/SectionHead';
import { Htag, Button } from '@ui';
import SliderContainer from '@components/SliderContainer';
import Slider from '@components/Slider/Slider';

const CategoryProductsSlider = ({ title, slug, products }) => {
  return (
    <Section>
      <SectionHead>
        <Htag level={2}>{title}</Htag>
        <Button href={`/category/${slug}`}>Показати все</Button>
      </SectionHead>

      <SliderContainer type='products'>
        <Slider
          data={products}
          className='cards-slider'
          useNavigation={true}
          slideComponent={ProductCard}
          slidesPerView={4}
          spaceBetween={40}
          breakpoints={sliderBreakpoints.get('products-slider')}
        />
      </SliderContainer>
    </Section>
  );
};

export default CategoryProductsSlider;
