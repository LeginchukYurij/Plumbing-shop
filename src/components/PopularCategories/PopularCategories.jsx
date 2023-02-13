import uniqid from 'uniqid';

import Section from '@components/Section';
import SectionHead from '@components/Section/SectionHead';
import { Htag, Tile } from '@ui';

const PopularCategories = ({ data, className }) => {
  return (
    <Section className={className}>
      <SectionHead>
        <Htag level={2}>Популярні категорії</Htag>
      </SectionHead>

      <ul className='tiles'>
        {data.map((tile) => {
          const { slug, title, thumbnail } = tile?.attributes;

          return (
            <li key={uniqid()}>
              <Tile
                slug={slug}
                title={title}
                thumbnail={thumbnail.data[0].attributes.url}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default PopularCategories;
