import qs from 'qs';
import { useAxios } from '@hooks/useAxios';
import PopularCategories from '@components/PopularCategories';

const PopularCategoriesContainer = () => {
  const query = qs.stringify(
    {
      filters: {
        category_type: {
          $eq: 'popular',
        },
      },

      populate: ['thumbnail'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { responce } = useAxios(`/categories?${query}`);

  console.log(responce);

  if (!responce) return null;

  return <PopularCategories data={responce} />;
};

export default PopularCategoriesContainer;
