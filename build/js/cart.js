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
			if (!e.target.classList.contains('cart__item-license')){
				item.classList.add(moveItemClass);
			}
		});

		moveItemBtn.addEventListener('click', () => {
			item.classList.remove(moveItemClass);
		});
	}

	if (itemInfoIcon) {
		itemInfoIcon.addEventListener('mouseover', () => {
			itemInfo.classList.add(showItemInfoClass);
		});
		itemInfoIcon.addEventListener('mouseout', () => {
			itemInfo.classList.remove(showItemInfoClass);
		});
	}
});

//выбор активного элемента в модальном окне
modalItems.forEach((element) => {
	let itemClass = element.classList;

	const removePrevios = () => {
		const ativeItem = modalList.querySelector('.' + activeModalItemClass);
		ativeItem.classList.remove(activeModalItemClass);
	};

	element.addEventListener('click', () => {
		if (!itemClass.contains(activeModalItemClass)) {
			removePrevios();
			itemClass.add(activeModalItemClass);
		}
	});
});

//открыть modal
openModalBtn.forEach((element) => {
	element.addEventListener('click', () => {
		modal.classList.add(modalOpenClass);
	});
});

//закрыть modal
closeModalBtn.addEventListener('click', () => {
	modal.classList.remove(modalOpenClass);
});
