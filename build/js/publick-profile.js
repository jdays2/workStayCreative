'use strict';

const titles = document.querySelectorAll(
	'.publick-profile .product-card__title-item',
);
const collectionsBlock = document.querySelector('#collections-block');
const likedBlock = document.querySelector('#liked-block');

const activePart = 'product-card__active-block';
const activeClass = 'product-card__title-item--active';

if (titles) {
	titles.forEach((element) => {
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
}