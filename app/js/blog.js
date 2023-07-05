const blogSwiper = new Swiper('.general__swiper', {
  spaceBetween: rem(6),
  wrapperClass: 'general__swiper-wrapper',
  slideClass: 'general__slide',
  speed: 500,
  navigation: {
    prevEl: '.general__prev',
    nextEl: '.general__next',
  },
  pagination: {
    el: '.general__fraction',
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
        rows: 3,
      }
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 5
      }
    }
  }
});