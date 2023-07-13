const freeSlider = new Swiper('.free__swiper', {
	speed: 500,
	wrapperClass: 'free__swiper-wrapper',
	slideClass: 'free__slide',
	breakpoints: {
		769: {
			slidesPerView: 4,
			spaceBetween: rem(6),
		},
		320: {
			slidesPerView: 1,
		},
	},
});

// слайдер рекомендаций


const zeroFreeSwiper = new Swiper('.free__recom-zero-slider', {
	slidesPerView: 'auto',
	initialSlide: 1,
	loop: true,
});
const secondFreeSwiper = new Swiper('.free__recom-second-slider', {
	slidesPerView: 'auto',
	loop: true,
	initialSlide: 2,

	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
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
});
const firstFreeSwiper = new Swiper('.free__recom-first-slider', {
	loop: true,
	slidesPerView: 'auto',
	initialSlide: 3
});

const swipeAllSliders = (index) => {
	zeroFreeSwiper.slideTo(index);
	firstFreeSwiper.slideTo(index);
	secondFreeSwiper.slideTo(index);
};

firstFreeSwiper.on('slideChange', () =>
	swipeAllSliders(firstFreeSwiper.activeIndex),
);
zeroFreeSwiper.on('slideChange', () =>
	swipeAllSliders(zeroFreeSwiper.activeIndex),
);
secondFreeSwiper.on('slideChange', () =>
	swipeAllSliders(secondFreeSwiper.activeIndex),
);
