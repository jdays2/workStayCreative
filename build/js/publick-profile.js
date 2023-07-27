"use strict";

const titles = document.querySelectorAll('.publick-profile .product-card__title-item');
const collectionsBlock = document.querySelector('#collections-block');
const likedBlock = document.querySelector('#liked-block');

const activePart = 'product-card__active-block';
const activeClass = 'product-card__title-item--active';

titles?.forEach((element) => {
	element.addEventListener('click', (e) => {
		if (!e.target.classList.contains(activeClass)) {
			const currentActive = document.querySelector('.' + activeClass);
			const currentActiveBlock = document.querySelector('.' + activePart);
			currentActive.classList.remove(activeClass);
			element.classList.add(activeClass);
			
			currentActiveBlock.classList.remove(activePart);
			switch (e.target.id) {
				case 'collections':
					collectionsBlock.classList.add(activePart);
					break;
				case 'liked':
					likedBlock.classList.add(activePart);
					break;
				default:
					break;
			}
		}
	});
});


//слайдер коллекций

const collectionSwiper = new Swiper('.collection-swiper', {
  spaceBetween: rem(5.5),
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
        rows: 4,
      }
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 6
      }
    }
  }
});