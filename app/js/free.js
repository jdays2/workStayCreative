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
  spaceBetween: rem(0),
  breakpoints: {
    769: {
      slidesPerView: 5,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

const recomHeroSlider = new Swiper('.free__recom-hero-slider', {
  speed: 500,
  effect: "fade",
  spaceBetween: rem(12),
  breakpoints: {
    769: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

recomSlider.controller.control = recomHeroSlider; // регистрируем связь между слайдерами
recomHeroSlider.controller.control = recomSlider;

