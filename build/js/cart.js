const orderItems = document.querySelectorAll('.cart__item-wrapper');
const modalItems = document.querySelectorAll('.modal__item');
const modalList = document.querySelector('.modal__list');
const closeModalBtn = document.querySelector('.modal__close-btn');
const openModalBtn = document.querySelectorAll('.cart__item-license');
const cartItems = document.querySelectorAll('.cart__product-item');

const modalOpenClass = 'modal__open';
const moveItemClass = 'cart__item--move';
const showItemInfoClass = 'cart__item-info--show';
const activeModalItemClass = 'modal__item--active';
const activeAnimationClass = 'active';

//обработка удаления элемента при мобильном отображении + обработка 'hover'
if (orderItems) {
	orderItems.forEach((element) => {
		const item = element.querySelector('.cart__item');
		const itemInfoIcon = element.querySelector('.cart__item-info-icon');
		const itemInfo = element.querySelector('.cart__item-info');

		item.addEventListener('click', (e) => {
			if (
				!e.target.classList.contains('cart__item-license') &&
				!e.target.classList.contains('cart__item-info-icon')
			) {
				if (itemInfo && itemInfo.classList.contains(showItemInfoClass)) {
					itemInfo.classList.remove(showItemInfoClass);
				}
			}
		});

		if (itemInfoIcon) {
			itemInfoIcon.addEventListener('mouseover', () => {
				if (window.innerWidth > 768) {
					itemInfo.classList.add(showItemInfoClass);
				}
			});

			itemInfoIcon.addEventListener('mouseout', () => {
				if (window.innerWidth > 768) {
					itemInfo.classList.remove(showItemInfoClass);
				}
			});

			itemInfoIcon.addEventListener('touchstart', () => {
				item.classList.toggle(activeAnimationClass);
				if (window.innerWidth < 769) {
					if (item.classList.contains(moveItemClass)) {
						return;
					}
					itemInfo.classList.toggle(showItemInfoClass);
				}
			});
		}
	});
}

//обработка показа модального окошка с выбором лицензии
if (cartItems) {
	cartItems.forEach((item) => {
		const popupShowClass = 'cart__item-popup--show';
		const licensePopup = item.querySelector('.cart__item-popup');
		const licenseBtn = item.querySelector('.cart__item-license');

		licenseBtn.addEventListener('click', () => {
			licensePopup.classList.toggle(popupShowClass);
		});
	});
}

if (orderItems) {
	orderItems.forEach((element) => {
		const handleMobileSwipe = () => {
			let touchStartX = 0;
			let touchEndX = 0;
			const minSwipeDistance = 60;

			element.addEventListener('touchstart', (event) => {
				touchStartX = event.touches[0].clientX;
				touchEndX = 0;
			});

			element.addEventListener('touchmove', (event) => {
				touchEndX = event.touches[0].clientX;
			});

			element.addEventListener('touchend', (event) => {
				if (touchStartX !== 0 && touchEndX !== 0) {
					handleSwipe(element, event);
					console.log(touchStartX, touchEndX);
				}
				touchStartX = 0;
				touchEndX = 0;
			});

			function handleSwipe(elem, event) {
				const swipeDistance = touchEndX - touchStartX;
				const item = elem.querySelector('.cart__item');

				if (swipeDistance < -minSwipeDistance) {
					if (
						!event.target.classList.contains('cart__item-info-icon') &&
						!event.target.classList.contains('cart__item-license')
					) {
						if (
							!item.classList.contains(moveItemClass) &&
							item.classList.contains(activeAnimationClass)
						) {
							console.log(swipeDistance);
							item.classList.add(moveItemClass);
							item.classList.remove(activeAnimationClass);
						}
					}
				} else if (swipeDistance > minSwipeDistance) {
					// Обработка свайпа вправо
					// Добавьте здесь необходимые действия для свайпа вправо
					if (
						!event.target.classList.contains('cart__item-info-icon') &&
						!event.target.classList.contains('cart__item-license')
					) {
						if (
							item.classList.contains(moveItemClass) &&
							!item.classList.contains(activeAnimationClass)
						) {
							console.log(swipeDistance);
							item.classList.remove(moveItemClass);
							item.classList.add(activeAnimationClass);
						}
					}
				}
			}
		};

		handleMobileSwipe();
	});
}
