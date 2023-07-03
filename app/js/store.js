const fontsSwiper = new Swiper('.store__swiper', {
  spaceBetween: rem(6),
  wrapperClass: 'store__swiper-wrapper',
  slideClass: 'store__slide',
  speed: 500,
  navigation: {
    prevEl: '.store__prev',
    nextEl: '.store__next',
  },
  pagination: {
    el: '.store__fraction',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
	breakpoints: {
		769: {
      slidesPerView: 4,
      spaceBetween: rem(6),
      grid: {
        fill: 'row',
        rows: 4,
      }
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 6
      }
    }
  }
});