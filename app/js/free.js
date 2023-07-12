const freeSlider = new Swiper('.free__swiper', {
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
			slidesPerView: 1,
			spaceBetween: rem(0),
		},
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
           
          </span>
        `;
      },
      el: '.popular-fonts__bullets',
    },
	},
});

//слайдер рекомендаций
const recomZeroSlider = new Swiper('.free__recom-zero-slider', {
	speed: 500,
	loop: true,
	spaceBetween: rem(0),
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 2,
		},
	},
});

const recomFirstSlider = new Swiper('.free__recom-first-slider', {
	speed: 500,
	loop: true,
	spaceBetween: rem(0),
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 2,
		},
	},
});

const recomSecondSlider = new Swiper('.free__recom-second-slider', {
	speed: 500,
	loop: true,
	centeredSlides: true,
	spaceBetween: rem(0),
	effect: 'fade',
	breakpoints: {
		769: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 2,
		},
	},
	navigation: {
		prevEl: '.general__prev',
		nextEl: '.general__next',
	},
});
