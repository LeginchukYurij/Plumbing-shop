import qs from 'qs';
import { useAxios } from '@hooks/useAxios';
import WeekDeals from '@components/WeekDeals';

const WeekDealsContainer = () => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: 'week-deels',
        },
      },

      populate: {
        products: {
          populate: [
            'title',
            'actual_price',
            'old_price',
            'thumbnail',
            'badges',
          ],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { responce } = useAxios({
    url: `/categories?${query}`,
    method: 'GET',
  });

  if (!responce) return null;

  const { title, slug, products } = responce[0].attributes;

  return (
    <WeekDeals
      title={title}
      slug={slug}
      products={products.data.slice(0, 6)}
    />
  );
};

export default WeekDealsContainer;
