const orderItems = document.querySelectorAll('.cart__item-wrapper');

const moveItemClass = 'cart__item--move';

orderItems.forEach((element) => {
	const moveItemBtn = element.querySelector('.cart__item-mob-close-btn');
	const item = element.querySelector('.cart__item');

	if (moveItemBtn) {
		item.addEventListener('click', () => {
			item.classList.add(moveItemClass);
		});

		moveItemBtn.addEventListener('click', () => {
			item.classList.remove(moveItemClass);
		});
	}
});
