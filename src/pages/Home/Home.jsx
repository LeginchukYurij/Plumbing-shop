import HeroSliderContainer from '@containers/HeroSliderContainer';
import WeekDealsContainer from '@containers/WeekDealsContainer';

const Home = () => {
  return (
    <>
      <HeroSliderContainer />

      <WeekDealsContainer />

      <div className='category-section diskounts-section wrapper'>
        <div className='section-head'>
          <h2 className='section-title'>Скидки недели</h2>
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
                <div className='prd-card'>
                  <div className='product-vision'>
                    <div className='badges-group-left'>
                      <div className='badge'>топ продаж</div>
                      <div className='badge baghe--red'>акция</div>
                    </div>
                    <div className='badges-group-right'>
                      <div className='badge badge--yellow'>-15%</div>
                    </div>
                    <a
                      className='product-photo'
                      href='#'>
                      <img
                        src='img/p1.png'
                        alt='#'
                      />
                    </a>
                  </div>
                  <span className='prd-title'>
                    Унитаз-компакт Jacob Delafon Struktura UJAJ102-WTE
                    безободковый
                  </span>
                  <div className='prd-footer-box'>
                    <div className='prd-price'>
                      <strong>17 890 ₽</strong>
                      <span className='oldprice'>9 900 ₽</span>
                    </div>
                    <div className='prd-footer'>
                      <button className='accent-btn accent-btn--ic to-cart-action'>
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
                        <span>купить </span>
                        <div className='added-to-cart'>
                          <svg
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M6.21387 12.7856L10.2139 16.7857L18.7853 8.21422'
                              stroke='white'
                              strokeWidth='2.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          в корзине
                        </div>
                      </button>
                      <div className='prd-actions'>
                        <button className='action compare'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='23.999999999999996'
                            height='23.999999999999996'>
                            <g>
                              <path
                                className='stroke'
                                stroke='#ffffff'
                                d='m15.904243,16.923585c0,0.07299 0.07319,0.12922 0.14257,0.14599c0.31026,0.075 0.49898,0.21897 0.78412,0.21897c0.07129,0 0.18172,0.14272 0.42771,0.21898c0.13645,0.04231 0.21928,-0.02793 0.28513,0c0.09314,0.03951 0.28514,0.14599 0.42771,0.14599c0.07128,0 0.21576,0.05622 0.28514,0.07299c0.15513,0.0375 0.21385,0.14599 0.35642,0.21898c0.14257,0.07299 0.16344,0.09437 0.21385,0.14598c0.05041,0.05162 0,0.14599 0,0.21898c0,0.14599 -0.21385,0.14599 -0.42771,0.14599c-0.21385,0 -0.34984,-0.03622 -0.64155,-0.07299c-0.1415,-0.01784 -0.36202,-0.20364 -0.57028,-0.29198c-0.14726,-0.06246 -0.35642,-0.21897 -0.4277,-0.21897c-0.07129,0 -0.20688,0.06017 -0.07129,0.14598c0.06064,0.03838 0.04943,0.17948 0.14257,0.21898c0.06586,0.02793 0.14257,0.14599 0.21385,0.21898c0.07129,0.07299 0.17528,0.12361 0.21386,0.21898c0.02728,0.06743 0.09216,0.09437 0.14257,0.14598c0.0504,0.05162 0.00697,0.13317 0.14256,0.21898c0.06064,0.03837 0.09217,0.09437 0.14257,0.14598c0.05041,0.05162 0.15583,0.05056 0.28514,0.14599c0.08178,0.06036 0.07128,0.14599 0.28514,0.14599c0.07128,0 0.14256,0 0,0c-0.28514,0 -0.77569,-0.08688 -0.99798,-0.21898c-0.13787,-0.08193 -0.28895,-0.11245 -0.42771,-0.14599c-0.15513,-0.0375 -0.32689,-0.18874 -0.4277,-0.29197c-0.05041,-0.05161 -0.14448,-0.12921 -0.21386,-0.14598c-0.15513,-0.0375 -0.28513,-0.21898 -0.28513,-0.29197c0,-0.073 0,-0.14599 0,-0.21898c0,-0.14599 -0.08184,-0.23565 0,-0.43796c0.03858,-0.09537 0.16724,-0.0215 0.28513,0.14599c0.0932,0.1324 0.08485,0.28332 0.21386,0.51095c0.08,0.14116 0.21908,0.35997 0.28513,0.43795c0.23353,0.27571 0.2984,0.34252 0.42771,0.43796c0.08178,0.06036 0.14799,0.19104 0.21385,0.21898c0.09314,0.0395 0.21385,0.07299 0.35642,0.14598c0.14257,0.07299 0.35642,0.07299 0.49899,0.07299c0.21385,0 0.36214,0.02269 0.57028,0.073c0.15513,0.0375 0.28513,0.07299 0.35642,0.07299c0.07128,0 0.14256,0 0.21385,0c0.07128,0 0.28514,0 0.35642,-0.07299c0.07128,-0.073 0.16345,-0.16737 0.21385,-0.21898c0.10081,-0.10323 0.13207,-0.08563 0.21386,-0.14599c0.1293,-0.09543 0.28513,-0.14598 0.4277,-0.21898c0.14257,-0.07299 0.20335,-0.08562 0.28514,-0.14598c0.12931,-0.09543 0.16344,-0.09437 0.21385,-0.14598c0.05041,-0.05162 0.10399,-0.05062 0.14257,-0.14599c0.02728,-0.06744 0.07128,-0.14599 0.07128,-0.21898c0,-0.07299 -0.03747,-0.15689 0,-0.21898c0.0838,-0.13884 0.14257,-0.14598 0.14257,-0.21898c0,-0.07299 -0.0105,-0.15862 0.07129,-0.21897c0.1293,-0.09544 0.16344,-0.09438 0.21385,-0.14599c0.0504,-0.05161 -0.00543,-0.11805 -0.07129,-0.14598c-0.09313,-0.03951 0.07129,-0.14599 0.28514,-0.14599c0.14257,0 0.07128,0 -0.35642,0c-0.21385,0 -0.42771,0 -0.49899,0c-0.07128,0 -0.14257,0 -0.21385,0c-0.07129,0 -0.21928,-0.02793 -0.28514,0c-0.09314,0.0395 -0.14257,0.07299 -0.28514,0.07299c-0.07128,0 -0.21385,0 -0.21385,0.073c0,0.07299 0,0.14598 0,0.21897c0,0.073 0,0.14599 0,0.21898c0,0.07299 0,0.14599 0,0.21898c0,0.14599 0.07128,0.21898 0.14257,0.29197c0.07128,0.07299 0.192,0.17948 0.28514,0.21898c0.06585,0.02793 0.21385,0 0.28513,0c0.14257,0 0.28514,0 0.57028,0c0.07128,0 0.09257,0.00375 0.21385,-0.07299c0.13559,-0.08581 0.20134,-0.08014 0.28514,-0.21898c0.03747,-0.06209 0.07128,-0.14599 0.07128,-0.21898c0,-0.07299 0,-0.14599 0,-0.21898c0,-0.14598 -0.03271,-0.1966 -0.07128,-0.29197c-0.02728,-0.06744 -0.04401,-0.15154 -0.07129,-0.21898c-0.03858,-0.09537 -0.14257,-0.14598 -0.21385,-0.14598c-0.07128,0 -0.21385,0 -0.42771,0c-0.21385,0 -0.64844,0.03896 -1.06926,0.14598c-0.21877,0.05564 -0.57027,0.073 -0.92669,0.073c-0.28514,0 -0.57028,0 -0.78413,0c-0.28514,0 -0.42771,0 -0.71284,0c-0.07129,0 -0.21385,0 -0.28514,0c-0.14257,0 -0.21385,0 -0.35642,0l-0.07128,0'
                                id='svg_11'
                                fillOpacity='null'
                                strokeWidth='2'
                                fill='none'
                              />
                              <path
                                className='stroke'
                                stroke='#fff'
                                d='m2.327597,17.069571c0,0.072992 0.073191,0.129217 0.142568,0.145987c0.310264,0.074999 0.498989,0.218977 0.784126,0.218977c0.071284,0 0.181714,0.142714 0.427705,0.218979c0.136451,0.042305 0.219279,-0.027933 0.285137,0c0.093137,0.039503 0.285137,0.145985 0.427705,0.145985c0.071284,0 0.21576,0.056221 0.285137,0.072992c0.155133,0.0375 0.213852,0.145987 0.356421,0.218979c0.142568,0.072992 0.163447,0.094372 0.213852,0.145985c0.050407,0.051615 0,0.145987 0,0.218979c0,0.145985 -0.213852,0.145985 -0.427705,0.145985c-0.213852,0 -0.349848,-0.036221 -0.641558,-0.072992c-0.1415,-0.017838 -0.362012,-0.203638 -0.570273,-0.291971c-0.147263,-0.06246 -0.356421,-0.218977 -0.427705,-0.218977c-0.071284,0 -0.206874,0.060177 -0.071284,0.145985c0.060638,0.038374 0.049432,0.179476 0.142569,0.218979c0.065858,0.027933 0.142569,0.145985 0.213852,0.218977c0.071285,0.072994 0.175274,0.12361 0.213853,0.218979c0.027279,0.067436 0.092163,0.094372 0.142568,0.145985c0.050407,0.051615 0.006978,0.133171 0.142569,0.218979c0.060638,0.038374 0.092163,0.094372 0.142568,0.145985c0.050407,0.051615 0.155828,0.050552 0.285137,0.145987c0.081782,0.060358 0.071284,0.145985 0.285137,0.145985c0.071284,0 0.142568,0 0,0c-0.285137,0 -0.775682,-0.08688 -0.997979,-0.218977c-0.137864,-0.081924 -0.288951,-0.112446 -0.427705,-0.145987c-0.155132,-0.037498 -0.326894,-0.188744 -0.427705,-0.291971c-0.050405,-0.051613 -0.144475,-0.129215 -0.213853,-0.145985c-0.155132,-0.037498 -0.285137,-0.218979 -0.285137,-0.291971c0,-0.072992 0,-0.145985 0,-0.218977c0,-0.145987 -0.081838,-0.235647 0,-0.437958c0.038579,-0.095369 0.167246,-0.0215 0.285137,0.145987c0.0932,0.132408 0.084848,0.283323 0.213853,0.510948c0.080006,0.141169 0.219085,0.359972 0.285137,0.437956c0.233528,0.275713 0.298396,0.342522 0.427705,0.437958c0.081782,0.060358 0.147994,0.191044 0.213853,0.218977c0.093137,0.039503 0.213852,0.072992 0.356421,0.145987c0.142568,0.072992 0.356421,0.072992 0.498989,0.072992c0.213852,0 0.362142,0.022682 0.570273,0.072992c0.155133,0.037498 0.285137,0.072992 0.356421,0.072992c0.071284,0 0.142569,0 0.213853,0c0.071284,0 0.285137,0 0.356421,-0.072992c0.071284,-0.072992 0.163446,-0.167364 0.213852,-0.218979c0.100811,-0.103228 0.132071,-0.085627 0.213853,-0.145985c0.129309,-0.095434 0.285136,-0.145985 0.427705,-0.218979c0.142568,-0.072992 0.203355,-0.085627 0.285137,-0.145985c0.129309,-0.095434 0.163447,-0.094372 0.213853,-0.145985c0.050407,-0.051615 0.10399,-0.050617 0.142568,-0.145987c0.027279,-0.067436 0.071284,-0.145985 0.071284,-0.218977c0,-0.072994 -0.037476,-0.156887 0,-0.218979c0.0838,-0.13884 0.142569,-0.145985 0.142569,-0.218979c0,-0.072992 -0.010498,-0.158619 0.071284,-0.218977c0.129309,-0.095434 0.163447,-0.094374 0.213852,-0.145987c0.050405,-0.051613 -0.005426,-0.118052 -0.071284,-0.145985c-0.093137,-0.039503 0.071284,-0.145985 0.285137,-0.145985c0.142569,0 0.071284,0 -0.356421,0c-0.213852,0 -0.427705,0 -0.498989,0c-0.071284,0 -0.142569,0 -0.213853,0c-0.071284,0 -0.219278,-0.027933 -0.285137,0c-0.093137,0.039503 -0.142568,0.072992 -0.285137,0.072992c-0.071284,0 -0.213852,0 -0.213852,0.072992c0,0.072992 0,0.145985 0,0.218979c0,0.072992 0,0.145985 0,0.218977c0,0.072992 0,0.145987 0,0.218979c0,0.145985 0.071284,0.218977 0.142568,0.291971c0.071284,0.072992 0.192,0.179474 0.285137,0.218977c0.065858,0.027933 0.213853,0 0.285137,0c0.142569,0 0.285137,0 0.570274,0c0.071284,0 0.092576,0.003756 0.213852,-0.072992c0.13559,-0.085808 0.201337,-0.080137 0.285137,-0.218979c0.037476,-0.062092 0.071284,-0.145985 0.071284,-0.218977c0,-0.072992 0,-0.145987 0,-0.218979c0,-0.145985 -0.032705,-0.1966 -0.071284,-0.291971c-0.027279,-0.067436 -0.044005,-0.151541 -0.071284,-0.218977c-0.038578,-0.095369 -0.142568,-0.145987 -0.213852,-0.145987c-0.071284,0 -0.213852,0 -0.427705,0c-0.213853,0 -0.648445,0.038961 -1.069263,0.145987c-0.218774,0.055639 -0.570274,0.072992 -0.926695,0.072992c-0.285137,0 -0.570273,0 -0.784126,0c-0.285137,0 -0.427706,0 -0.712842,0c-0.071284,0 -0.213853,0 -0.285137,0c-0.142568,0 -0.213853,0 -0.356421,0l-0.071284,0'
                                id='svg_10'
                                fillOpacity='null'
                                strokeWidth='2'
                                fill='none'
                              />
                              <path
                                className='fill'
                                id='svg_1'
                                fill='#1D1D1F'
                                d='m0,17c0,2.7614 2.23858,5 5,5c2.76142,0 5,-2.2386 5,-5l-2,0c0,1.6569 -1.34315,3 -3,3c-1.65685,0 -3,-1.3431 -3,-3l-2,0z'
                                clipRule='evenodd'
                                fillRule='evenodd'
                              />
                              <path
                                className='fill'
                                fill='#1D1D1F'
                                d='m14,17c0,2.7614 2.2386,5 5,5c2.7614,0 5,-2.2386 5,-5l-2,0c0,1.6569 -1.3431,3 -3,3c-1.6569,0 -3,-1.3431 -3,-3l-2,0z'
                                clipRule='evenodd'
                                fillRule='evenodd'
                              />
                              <path
                                className='stroke'
                                strokeWidth='2'
                                stroke='#1D1D1F'
                                d='m1.5,16l3.5,-8.4l3.5,8.4l-7,0z'
                                fill='#fff'
                              />
                              <path
                                className='stroke'
                                strokeWidth='2'
                                stroke='#1D1D1F'
                                d='m15.5,16l3.5,-8.4l3.5,8.4l-7,0z'
                                fill='#fff'
                              />
                              <path
                                className='stroke fill'
                                strokeLinejoin='round'
                                strokeLinecap='round'
                                strokeWidth='2'
                                stroke='#1D1D1F'
                                d='m2,6l3,0c1.25903,0 2.44458,-0.59278 3.2,-1.6l0.3,-0.4l3.5,0l3.5,0l0.3,0.4c0.7554,1.00722 1.941,1.6 3.2,1.6l3,0'
                              />
                            </g>
                          </svg>
                        </button>
                        <button className='action favorites'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              className='stroke'
                              d='M11.9996 6.435L11.1034 5.51375C8.99964 3.35125 5.14214 4.0975 3.74964 6.81625C3.09589 8.095 2.94839 9.94125 4.14214 12.2975C5.29214 14.5662 7.68464 17.2837 11.9996 20.2437C16.3146 17.2837 18.7059 14.5662 19.8571 12.2975C21.0509 9.94 20.9046 8.095 20.2496 6.81625C18.8571 4.0975 14.9996 3.35 12.8959 5.5125L11.9996 6.435Z'
                              stroke='#1D1D1F'
                              strokeWidth='2'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
      <div className='category-section popular-section wrapper'>
        <div className='section-head'>
          <h2 className='section-title'>Популярные категории</h2>
          <a
            className='accent-btn'
            href='#'>
            Все категории
          </a>
        </div>
        <div className='category-section-body'>
          <div className='tiles-slider swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <a
                  className='tile'
                  href='#'>
                  <div
                    className='tile-img'
                    style={{ backgroundImage: 'url(./img/t1.jpg)' }}></div>
                  <div className='tile-content'>
                    <h3>Душевые кабины</h3>
                    <button className='w-btn'>Смотреть</button>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='tile'
                  href='#'>
                  <div
                    className='tile-img'
                    style={{ backgroundImage: 'url(./img/t2.jpg)' }}></div>
                  <div className='tile-content'>
                    <h3>Раковины</h3>
                    <button className='w-btn'>Смотреть</button>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='tile'
                  href='#'>
                  <div
                    className='tile-img'
                    style={{ backgroundImage: 'url(./img/t3.jpg)' }}></div>
                  <div className='tile-content'>
                    <h3>Душ</h3>
                    <button className='w-btn'>Смотреть</button>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='tile'
                  href='#'>
                  <div
                    className='tile-img'
                    style={{ backgroundImage: 'url(./img/t4.jpg)' }}></div>
                  <div className='tile-content'>
                    <h3>Унитазы</h3>
                    <button className='w-btn'>Смотреть</button>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='tile'
                  href='#'>
                  <div
                    className='tile-img'
                    style={{ backgroundImage: 'url(./img/t5.jpg)' }}></div>
                  <div className='tile-content'>
                    <h3>Смесители</h3>
                    <button className='w-btn'>Смотреть</button>
                  </div>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='tile'
                  href='#'>
                  <div
                    className='tile-img'
                    style={{ backgroundImage: 'url(./img/t6.jpg)' }}></div>
                  <div className='tile-content'>
                    <h3>Ванны</h3>
                    <button className='w-btn'>Смотреть</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className='accent-btn more-link more-link--mob'
          href='#'>
          Смотреть все
        </a>
      </div>
      <div className='category-section stock-section wrapper'>
        <div className='section-head'>
          <h2 className='section-title'>Акционные предложения</h2>
          <a
            className='accent-btn'
            href='#'>
            Все акции
          </a>
        </div>
        <div className='category-section-body cards-slider--active-on-mob'>
          <div className='news-slider swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <a
                  className='news-card'
                  href='#'>
                  <div className='news-card-photo'>
                    <img
                      src='img/n1.jpg'
                      alt='#'
                    />
                  </div>
                  <h4 className='news-title'>Товары месяца</h4>
                  <p className='news-excerpt'>
                    В июле даем скидку 7% на душевые гарнитуры по промокоду
                    ИЮЛЬ21
                  </p>
                  <button className='more'>
                    Подробнее
                    <img
                      src='img/svg/more.svg'
                      alt='#'
                    />
                  </button>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='news-card'
                  href='#'>
                  <div className='news-card-photo'>
                    <img
                      src='img/n2.jpg'
                      alt='#'
                    />
                  </div>
                  <h4 className='news-title'>
                    Товары в наборе Lemark неразлучны
                  </h4>
                  <p className='news-excerpt'>
                    В июле даем скидку 7% на душевые гарнитуры по промокоду
                    ИЮЛЬ21
                  </p>
                  <button className='more'>
                    Подробнее
                    <img
                      src='img/svg/more.svg'
                      alt='#'
                    />
                  </button>
                </a>
              </div>
              <div className='swiper-slide'>
                <a
                  className='news-card'
                  href='#'>
                  <div className='news-card-photo'>
                    <img
                      src='img/n3.jpg'
                      alt='#'
                    />
                  </div>
                  <h4 className='news-title'>Ударные скидки 40% от Am.Pm</h4>
                  <p className='news-excerpt'>
                    В июле даем скидку 7% на душевые гарнитуры по промокоду
                    ИЮЛЬ21
                  </p>
                  <button className='more'>
                    Подробнее
                    <img
                      src='img/svg/more.svg'
                      alt='#'
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className='accent-btn more-link more-link--mob'
          href='#'>
          Смотреть все
        </a>
      </div>
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
