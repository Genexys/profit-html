const reviewSlider = () => {
  var mySwiper = new Swiper('.review-slider__container', {
    // loop: true,

    navigation: {
      nextEl: '.review-slider__button--next',
      prevEl: '.review-slider__button--prev',
    },
  });
};

export {reviewSlider};
