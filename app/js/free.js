const freeSlider = new Swiper('.free__slider', {
	speed: 500,

	wrapperClass: 'free__swiper-wrapper',
	slideClass: 'free__slide',
	breakpoints: {
		769: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: rem(6),
		},
		320: {
			slidesPerView: 2,
		},
	},

});

//слайдер рекомендаций

const recomSlider = new Swiper('.free__recom-slider', {
  speed: 500,
  loop: true,
  
  centeredSlides: true,
  spaceBetween: rem(0),
  breakpoints: {
    769: {
      slidesPerView: 6,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

