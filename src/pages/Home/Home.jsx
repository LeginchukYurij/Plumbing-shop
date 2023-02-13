import HeroSliderContainer from '@containers/HeroSliderContainer';
import WeekDealsContainer from '@containers/WeekDealsContainer';
import PopularCategoriesContainer from '@containers/PopularCategoriesContainer/PopularCategoriesContainer';
import PromotionOffersContainer from '@containers/PromotionOffersContainer/PromotionOffersContainer';
import TopOffersContainer from '@containers/TopOffersContainer';
import BuyersChoiseContainer from '../../containers/BuyersChoiseContainer';

const Home = () => {
  return (
    <>
      <HeroSliderContainer />

      <WeekDealsContainer />

      <PopularCategoriesContainer />

      <PromotionOffersContainer />

      <TopOffersContainer />

      <BuyersChoiseContainer />

      <div className='wrapper wrapper--lg bnr-box'>
        <a
          className='bnr'
          href='#'>
          <img
            src='img/bnr.jpg'
            alt='#'
          />
        </a>
      </div>

      <div className='wrapper wrapper--xs'>
        <div className='subscribe-box'>
          <div
            className='subscribe-box-image'
            style={{ backgroundImage: 'url(./img/subscribe-bg.jpg)' }}></div>
          <form
            className='subscribe-box-form'
            action='#'>
            <h5>Будь первым!</h5>
            <p>
              Подпишитесь на рассылку и будьте в курсе всех новинок, скидкок и
              лучших прделожений
            </p>
            <div className='field'>
              <input
                type='email'
                placeholder='Введите свой E-mail'
              />
              <button
                className='accent-btn'
                type='submit'>
                подписаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
