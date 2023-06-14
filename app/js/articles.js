const articleSwiper = new Swiper('.articles__swiper', {
  speed: 500,
  slidesPerView: 4,
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
      spaceBetween: rem(6)
    },
    320: {
      slidesPerView: 1,
    }
  }
});