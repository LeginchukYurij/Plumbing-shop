import ProductCard from '@components/ProductCard';
import Section from '@components/Section';
import SectionHead from '@components/SectionHead';
import Htag from '@components/ui/HTag';
import Button from '@components/ui/Button/Button';

const WeekDeals = () => {
  return (
    <Section>
      <SectionHead>
        <Htag level={2}>Скидки тижня</Htag>
        <Button href='/'>Показати все</Button>
      </SectionHead>
      <ProductCard />
    </Section>
  );
};

export default WeekDeals;
