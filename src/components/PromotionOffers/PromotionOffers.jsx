import uniqid from 'uniqid';
import Section from '@components/Section';
import SectionHead from '@components/SectionHead';
import NewsCard from '@components/NewsCard';
import { Htag, Button, Grid } from '@ui';

const PromotionOffers = ({ title, slug, offers }) => {
  return (
    <Section>
      <SectionHead>
        <Htag level={2}>{title}</Htag>
        <Button href={`/${slug}`}>Дивитися всі</Button>
      </SectionHead>

      <Grid
        containerTag='ul'
        columns={3}>
        {offers &&
          offers.map((offer) => {
            const {
              title,
              exerpt,
              thumbnail,
              slug: offerSlug,
            } = offer?.attributes;

            return (
              <li key={uniqid()}>
                <NewsCard
                  title={title}
                  exerpt={exerpt}
                  thumbnail={thumbnail.data.attributes.url}
                  slug={`${slug}/${offerSlug}`}
                />
              </li>
            );
          })}
      </Grid>
    </Section>
  );
};

export default PromotionOffers;
