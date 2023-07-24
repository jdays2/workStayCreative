'use strict';

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

<<<<<<< HEAD
loop: true,
wrapperClass: 'free__recom-wrapper',
slideClass: 'free__recom-slider-item',
slideActiveClass: 'active',
slidesPerView: 'auto',
watchOverflow: true,
autoHeight: true,
centeredSlides: true,





 
=======
const zeroFreeSwiper = new Swiper('.free__recom-zero-slider', {
	slidesPerView: 'auto',
	initialSlide: 1,
	
>>>>>>> 8e22245441bce6641d516af2303837592e863ae3
});





const swiper1 = new Swiper(".testing__swiper", {
	slidesPerView: 'auto',
<<<<<<< HEAD
	loop: true,
	
=======
	
	initialSlide: 2,
>>>>>>> 8e22245441bce6641d516af2303837592e863ae3

});
const swiper2 = new Swiper(".testing__swiper-two", {
	slidesPerView: 'auto',
	loop: true,
	
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	
});
<<<<<<< HEAD
const swiper3 = new Swiper(".testing__swiper-three", {
	loop: true,
=======
const firstFreeSwiper = new Swiper('.free__recom-first-slider', {
	
>>>>>>> 8e22245441bce6641d516af2303837592e863ae3
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