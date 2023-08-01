const fontsHeadSwiper = new Swiper('.header-block__swiper', {
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
