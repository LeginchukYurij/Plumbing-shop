import uniqid from 'uniqid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';

import { heroSlides } from '../../data';

const HeroSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div className='m-slider-container wrapper'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className='m-slider swiper'>
        {heroSlides &&
          heroSlides.map(({ title, img, href }) => {
            return (
              <SwiperSlide
                key={uniqid()}
                className='swiper-slide'>
                <div
                  className='m-slide'
                  style={{ backgroundImage: `url(${img})` }}>
                  <div className='m-slide-title'>
                    {title}
                    <a
                      className='accent-btn'
                      href={href}>
                      Дивитися
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        <button
          ref={navigationPrevRef}
          className='swiper-button-prev s-nav'></button>
        <button
          ref={navigationNextRef}
          className='swiper-button-next s-nav'></button>
        <div
          ref={paginationRef}
          className='swiper-pagination s-pag'></div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
