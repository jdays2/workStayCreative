//head-swiper
const fontsHeadSwiper = new Swiper('.header-block__swiper', {
	speed: 350,
	freeMode: true,
	slidesPerView: 'auto',
  spaceBetween: 30,
	breakpoints: {
		769: {
			slidesPerView: 4,
		},
    320: {
			slidesPerView: 1.1,
		},
	},
});