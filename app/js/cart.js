const orderItems = document.querySelectorAll('.cart__item-wrapper');
const modalItems = document.querySelectorAll('.modal__item');
const modalList = document.querySelector('.modal__list');
const closeModalBtn = document.querySelector('.modal__close-btn');
const openModalBtn = document.querySelectorAll('.cart__item-license');
const modal = document.querySelector('.modal');

const modalOpenClass = 'modal__open';
const moveItemClass = 'cart__item--move';
const showItemInfoClass = 'cart__item-info--show';
const activeModalItemClass = 'modal__item--active';

//обработка удаления элемента при мобильном отображении + обработка 'hover'
orderItems.forEach((element) => {
	const moveItemBtn = element.querySelector('.cart__item-mob-close-btn');
	const item = element.querySelector('.cart__item');
	const itemInfoIcon = element.querySelector('.cart__item-info-icon');
	const itemInfo = element.querySelector('.cart__item-info');

	if (moveItemBtn) {
		item.addEventListener('click', (e) => {
			if (
				!e.target.classList.contains('cart__item-license') &&
				!e.target.classList.contains('cart__item-info-icon')
			) {
				item.classList.add(moveItemClass);
				if (itemInfo.classList.contains(showItemInfoClass)) {
					itemInfo.classList.remove(showItemInfoClass);
				}
			}

		
		});

		moveItemBtn.addEventListener('click', () => {
			item.classList.remove(moveItemClass);
		});
	}

	if (itemInfoIcon) {
		itemInfoIcon.addEventListener('mouseover', () => {
			if (window.screen.width > 768) {
				itemInfo.classList.add(showItemInfoClass);
			}
		});
		itemInfoIcon.addEventListener('mouseout', () => {
			if (window.screen.width > 768) {
				itemInfo.classList.remove(showItemInfoClass);
			}
		});
	}

	if(!itemInfoIcon) {
		return
	}
	itemInfoIcon.addEventListener('touchstart', () => {
		if (window.screen.width < 769) {
			if (item.classList.contains(moveItemClass)) {
				item.classList.remove(moveItemClass);
				return;
			}
			itemInfo.classList.toggle(showItemInfoClass);
		}
	});
});
