import qs from 'qs';
import { useAxios } from '@hooks/useAxios';
import PromotionOffers from '@components/PromotionOffers';

const PromotionOffersContainer = () => {
  const query = qs.stringify(
    {
      populate: 'thumbnail',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { responce: offers } = useAxios({
    url: `/promotional-offers?${query}`,
    method: 'GET',
  });

  if (!offers) return null;

  return (
    <PromotionOffers
      title='Акційні пропозиції'
      slug='promotional-offers'
      offers={offers.slice(0, 3)}
    />
  );
};

export default PromotionOffersContainer;
