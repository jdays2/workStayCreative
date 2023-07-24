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
