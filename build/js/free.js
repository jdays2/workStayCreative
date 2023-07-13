<<<<<<< Updated upstream
'use strict';

const freeSlider = new Swiper('.free__slider', {
=======
const freeSlider = new Swiper('.free__swiper', {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
// слайдер рекомендаций

const recomSlider = new Swiper('.free__recom-slider', {
//   speed: 500,
//   loop: true,
//   slidesPerView: 'auto',
//   centeredSlides: true,
//   spaceBetween: rem(0),
//   breakpoints: {
//     769: {
//       slidesPerView: 6,
//     },
//     320: {
//       slidesPerView: 2,
//     },
//   },

loop: true,
wrapperClass: 'free__recom-wrapper',
slideClass: 'free__recom-slider-item',
slideActiveClass: 'active',
slidesPerView: 'auto',
watchOverflow: true,
autoHeight: true,
centeredSlides: true,





 
});





const swiper1 = new Swiper(".testing__swiper", {
	slidesPerView: 'auto',
	loop: true,
	

});
const swiper2 = new Swiper(".testing__swiper-two", {
	slidesPerView: 'auto',
	loop: true,
	
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	
});
const swiper3 = new Swiper(".testing__swiper-three", {
	loop: true,
	slidesPerView: 'auto',
	
	
});

const swipeAllSliders = (index) => {
  swiper1.slideTo(index);
  swiper2.slideTo(index);
  swiper3.slideTo(index);
}

swiper1.on('slideChange', () => swipeAllSliders(swiper1.activeIndex));
swiper2.on('slideChange', () => swipeAllSliders(swiper2.activeIndex));
swiper3.on('slideChange', () => swipeAllSliders(swiper3.activeIndex));
=======
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
>>>>>>> Stashed changes
