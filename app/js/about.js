const aboutPageSwiper = new Swiper('.about__swiper', {
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  wrapperClass: 'about__swiper-wrapper',
  slideClass: 'about__slider-card',
  speed: 200,
  freeMode: true,
  freeModeMomentum: false,
  navigation: {
    prevEl: '.about__prev',
    nextEl: '.about__next',
  },
  pagination: {
    el: '.about__fraction',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      speed: 500,
      spaceBetween: rem(5.4),
      freeMode: false,
      freeModeMomentum: true,
    },
  },
});