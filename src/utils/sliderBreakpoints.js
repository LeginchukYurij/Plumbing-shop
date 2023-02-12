export const sliderBreakpoints = {
  'products-slider': {
    320: {
      slidesPerView: 'auto',
    },

    1050: {
      slidesPerView: 4,
    },
  },

  get(type) {
    if (type in this) {
      return this[type];
    }

    return null;
  },
};
