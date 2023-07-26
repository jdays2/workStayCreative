"use strict";

const titleItems = document.querySelectorAll('.product-card__title-item');
const newsBlock = document.querySelector('#news-block');
const storeBlock = document.querySelector('#store-block');

const activePart = 'product-card__active-block';
const activeClass = 'product-card__title-item--active';

titleItems?.forEach((element) => {
	element.addEventListener('click', (e) => {
		if (!e.target.classList.contains(activeClass)) {
			const currentActive = document.querySelector('.' + activeClass);
			const currentActiveBlock = document.querySelector('.' + activePart);
			currentActive.classList.remove(activeClass);
			element.classList.add(activeClass);
			
			currentActiveBlock.classList.remove(activePart);
			switch (e.target.id) {
				case 'store':
					storeBlock.classList.add(activePart);
					break;
				case 'news':
					newsBlock.classList.add(activePart);
					break;
				default:
					break;
			}
		}
	});
});


const storeSwiper = new Swiper('.store__swiper', {
  spaceBetween: rem(6),
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
			slidesPerGroup: 12,
      spaceBetween: rem(6),
      grid: {
        fill: 'row',
        rows: 3,
      }
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 4
      }
    }
  }
});