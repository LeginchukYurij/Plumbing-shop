import uniqid from 'uniqid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';

const Slider = ({
  data,
  useNavigation = false,
  usePagination = false,
  spaceBetween = 30,
  slideComponent: Slide,
  className,
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  const modules = [];

  if (useNavigation) {
    modules.push(Navigation);
  }

  if (usePagination) {
    modules.push(Pagination);
  }

  return (
    <Swiper
      modules={modules}
      spaceBetween={spaceBetween}
      navigation={
        useNavigation && {
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }
      }
      pagination={
        usePagination && {
          clickable: true,
          el: paginationRef.current,
        }
      }
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl =
          useNavigation && navigationPrevRef.current;
        swiper.params.navigation.nextEl =
          useNavigation && navigationNextRef.current;
      }}
      className={className}>
      {data &&
        data.map((itemData) => {
          return (
            <SwiperSlide
              key={uniqid()}
              className='swiper-slide'>
              <Slide data={itemData} />
            </SwiperSlide>
          );
        })}

      {useNavigation && (
        <>
          <button
            ref={navigationPrevRef}
            className='swiper-button-prev s-nav'>
            <span className='visually-hidden'>Попередній слайд</span>
          </button>

          <button
            ref={navigationNextRef}
            className='swiper-button-next s-nav'>
            <span className='visually-hidden'>Наступний слайд</span>
          </button>
        </>
      )}

      {usePagination && (
        <div
          ref={paginationRef}
          className='swiper-pagination s-pag'></div>
      )}
    </Swiper>
  );
};

export default Slider;
