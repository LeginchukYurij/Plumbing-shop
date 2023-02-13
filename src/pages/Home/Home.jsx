import HeroSliderContainer from '@containers/HeroSliderContainer';
import WeekDealsContainer from '@containers/WeekDealsContainer';
import PopularCategoriesContainer from '@containers/PopularCategoriesContainer/PopularCategoriesContainer';
import PromotionOffersContainer from '../../containers/PromotionOffersContainer/PromotionOffersContainer';

const Home = () => {
  return (
    <>
      <HeroSliderContainer />

      <WeekDealsContainer />

      <PopularCategoriesContainer />

      <PromotionOffersContainer />

      <div className='category-section top-section wrapper'>
        <div className='section-head'>
          <h2 className='section-title'>ТОП-предложения</h2>
          <a
            className='accent-btn'
            href='#'>
            Смотреть все
          </a>
        </div>
        <div className='category-section-body cards-slider-body cards-slider--active-on-mob'>
          <div className='swiper-button-prev s-nav s-nav--gray'></div>
          <div className='cards-slider swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge'>топ продаж</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/top1.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Душевая стойка Lemark Tropic LM7002C
                  </span>
                  <div className='prd-price'>
                    <strong>17 890 ₽</strong>
                    <span className='oldprice'>9 900 ₽</span>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge'>топ продаж</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/top2.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Тумба Misty Люси 40 с бельевой корзиной
                  </span>
                  <div className='prd-price'>
                    <strong>109 890 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge'>топ продаж</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/top3.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Ванна из искусственного камня Эстет Майами 169x79
                  </span>
                  <div className='prd-price'>
                    <strong>54 890 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge'>топ продаж</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/top4.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Ванна из искусственного камня Фэма Салерно 2 белая, ножки
                    белые
                  </span>
                  <div className='prd-price'>
                    <strong>3 010 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='swiper-button-next s-nav s-nav--gray'></div>
        </div>
        <a
          className='accent-btn more-link more-link--mob'
          href='#'>
          Смотреть все
        </a>
      </div>
      <div className='category-section choise-section wrapper'>
        <div className='section-head'>
          <h2 className='section-title'>Выбор покупателей</h2>
          <a
            className='accent-btn'
            href='#'>
            Смотреть все
          </a>
        </div>
        <div className='category-section-body cards-slider-body cards-slider--active-on-mob'>
          <div className='swiper-button-prev s-nav s-nav--gray'></div>
          <div className='cards-slider swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='product-photo'>
                      <img
                        src='img/ch1.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Чугунная ванна Wotte Line 170x70
                  </span>
                  <div className='prd-price'>
                    <strong>24 530 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-right'>
                      <div className='badge badge--yellow'>-15%</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/ch2.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Чугунная ванна Roca Continental 21291100R 170х70 см
                  </span>
                  <div className='prd-price'>
                    <strong>146 880 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge baghe--red'>акция</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/ch3.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Чугунная ванна Roca Continental 21291100R 170х70 см
                  </span>
                  <div className='prd-price'>
                    <strong>46 880 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge'>топ продаж</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/ch4.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Ванна из искусственного камня Фэма Салерно 2 белая, ножки
                    белые
                  </span>
                  <div className='prd-price'>
                    <strong>44 820 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='swiper-button-next s-nav s-nav--gray'></div>
        </div>
        <a
          className='accent-btn more-link more-link--mob'
          href='#'>
          Смотреть все
        </a>
      </div>
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
      <div className='category-section recomended-section top-section wrapper'>
        <div className='section-head'>
          <h2 className='section-title'>Рекомендации для Вас</h2>
          <a
            className='accent-btn'
            href='#'>
            Смотреть все
          </a>
        </div>
        <div className='category-section-body cards-slider-body cards-slider--active-on-mob'>
          <div className='swiper-button-prev s-nav s-nav--gray'></div>
          <div className='cards-slider swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='product-photo'>
                      <img
                        src='img/top1.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Душевая стойка Lemark Tropic LM7002C
                  </span>
                  <div className='prd-price'>
                    <strong>17 890 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='product-photo'>
                      <img
                        src='img/top2.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Тумба Misty Люси 40 с бельевой корзиной
                  </span>
                  <div className='prd-price'>
                    <strong>109 890 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge baghe--red'>акция</div>
                    </div>
                    <div className='badges-group-right'>
                      <div className='badge badge--yellow'>-15%</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/top3.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Ванна из искусственного камня Эстет Майами 169x79
                  </span>
                  <div className='prd-price'>
                    <strong>54 890 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='prd-card'
                  href='#'>
                  <div className='product-vision'>
                    <div className='badges-group-right'>
                      <div className='badge badge--yellow'>-15%</div>
                    </div>
                    <div className='product-photo'>
                      <img
                        src='img/top4.png'
                        alt='#'
                      />
                    </div>
                  </div>
                  <span className='prd-title'>
                    Ванна из искусственного камня Фэма Салерно 2 белая, ножки
                    белые
                  </span>
                  <div className='prd-price'>
                    <strong>3 010 ₽</strong>
                  </div>
                  <div className='prd-footer'>
                    <button className='accent-btn accent-btn--ic'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6.7198 7L6.7198 7H21.2802L19.6802 15L8.3198 15L6.7198 7Z'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.18937 4.75746L5.21922 5V5L6.18937 4.75746ZM2.5 3C1.94772 3 1.5 3.44772 1.5 4C1.5 4.55228 1.94772 5 2.5 5V3ZM7.97014 7.75746L7.15951 4.51493L5.21922 5L6.02986 8.24254L7.97014 7.75746ZM5.21922 3H2.5V5H5.21922V3ZM7.15951 4.51493C6.93692 3.62459 6.13696 3 5.21922 3V5L5.21922 5L7.15951 4.51493Z'
                          fill='white'
                        />
                        <circle
                          cx='10.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                        <circle
                          cx='17.5'
                          cy='19'
                          r='1'
                          fill='#1D1D1F'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                      купить
                    </button>
                    <div className='prd-actions'>
                      <button className='action compare'>
                        <img
                          src='img/svg/libra.svg'
                          alt='#'
                        />
                      </button>
                      <button className='action favorites'>
                        <img
                          src='img/svg/heart.svg'
                          alt='#'
                        />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='swiper-button-next s-nav s-nav--gray'></div>
        </div>
        <a
          className='accent-btn more-link more-link--mob'
          href='#'>
          Смотреть все
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
