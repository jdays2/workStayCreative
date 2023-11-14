const sortBtn = document.querySelectorAll('#sort-btn');
const sortPopUp = document.querySelectorAll('.sort-popup');
const sortBtnIcon = document.querySelector('.header-block__sort-btn-icon');

const activeSortPopUpClass = 'sort-popup--show';
const sortBtnHideClass = 'header-block__sort--hidden';
const sortBtnIconFlipClass = 'header-block__sort-btn-icon--flip';

//функция по перевороту индикатора/icon sort popup
const iconFlip = () => {
	sortBtnIcon.classList.toggle(sortBtnIconFlipClass);
};

//показать, скрыть popup sort
if (sortBtn) {
	sortBtn.forEach((btn, idBtn) => {
		btn.addEventListener('click', () => {
			sortPopUp.forEach((modal, idModal) => {
				if (idBtn === idModal) {
					modal.classList.toggle(activeSortPopUpClass);
					iconFlip();
				}
			});
		});
	});
}

//функция по смене изображений кнопок filter
const changeIcon = (icon, newIcon) => {
	newIcon.classList.toggle(filterBtnHiddenIcon);
	icon.classList.toggle(filterBtnHiddenIcon);
};

//range slider
// Получаем все слайдера на странице
const filterBlocks = document.querySelectorAll('.filter-block');

// Проходим по каждому элементу слайдера
filterBlocks.forEach((element) => {
	const priceSlider = element.querySelector('#price-slider');
	const minValue = priceSlider?.getAttribute('data-min-value');
	const maxValue = priceSlider?.getAttribute('data-max-value');
	const startValue = priceSlider?.getAttribute('data-start-value');
	const startPoint = priceSlider?.getAttribute('data-start-point');
	const minPriceOutput = document.querySelectorAll('.filter-block__price-value.min-price');
	const maxPriceOutput = document.querySelectorAll('.filter-block__price-value.max-price');

	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [+startValue, +startPoint],
			connect: true,
			range: {
				min: +minValue,
				max: +maxValue,
			},
		});
	}

	const updatePriceOutput = (values, handle) => {
		const minPointer = priceSlider.querySelectorAll('.noUi-handle-lower');
		if (handle === 0) {
			if (parseInt(values[handle]) === 0) {
				minPriceOutput.forEach((e) =>
					e.classList.add('filter-popup__price-value--min'),
				);
				minPointer.forEach((e) => {
					e.classList.add('noUi-handle-lower--min');
				});
			} else {
				minPriceOutput.forEach((e) =>
					e.classList.remove('filter-popup__price-value--min'),
				);
				minPointer.forEach((e) => {
					e.classList.remove('noUi-handle-lower--min');
				});
			}
			minPriceOutput.forEach((item) => {
				item.value =
					Math.round(values[handle]) > 0
						? `${Math.round(values[handle])}₽`
						: '';
			});
		}
		if (handle === 1) {
			maxPriceOutput.forEach((item) => {
				item.value = `${Math.round(values[handle])}₽`;
			});
		}
	};

	if (priceSlider) {
		priceSlider.noUiSlider.on('update', updatePriceOutput);
	}
});

//функция по закрытию sort
const closeSortHandler = () => {
	const width = window.innerWidth;
	if (width < 769) {
		return;
	}
	sortBtn.forEach((btn) => {
		btn.classList.toggle(sortBtnHideClass);
	});
	sortPopUp.forEach((element) => {
		if (element.classList.contains(activeSortPopUpClass)) {
			iconFlip();
			element.classList.remove(activeSortPopUpClass);
		}
	});
};

//обработка filter-block
const filterItems = document.querySelectorAll('.filter-block__item');
const activeClass = 'active';
if (filterItems) {
	filterItems.forEach((item) => {
		const showBtn = item.querySelector('.filter-block__white-btn');

		const list = item.querySelector('.filter-block__list');

		if (showBtn) {
			showBtn.addEventListener('click', (e) => {
				e.preventDefault();
				let width = window.innerWidth;
				if (width > 768) {
					if (!item.classList.contains(activeClass)) {
						item.classList.add(activeClass);
						showBtn.value = 'Свернуть';
					} else {
						item.classList.remove(activeClass);
						showBtn.value = 'Посмотреть все';
						if (list) {
							list.scrollTop = 0;
						}
					}
				}
			});
		}
	});
}

//закрытие фильтра детального при мобилке
const closeFilterBtn = document.querySelector('#close-det-filter');
const modal = document.querySelector('.modal--filter-det');
if (closeFilterBtn && modal) {
	const activeClass = 'active';
	closeFilterBtn.addEventListener('click', () => {
		modal.classList.remove(activeClass);
	});
}

//сброс всех заданных настроек filter-block
const resetBtn = document.querySelectorAll('#reset-filter');
const inputs = document.querySelectorAll('input[type="checkbox"]');
const searchInputs = document.querySelectorAll('input[type="text"]');

if (resetBtn && inputs) {
	resetBtn.forEach((element) => {
		element.addEventListener('click', () => {
			inputs.forEach((element) => {
				element.checked = false;
			});
			searchInputs.forEach((element) => {
				element.value = '';
			});
			const priceSlider = document.querySelectorAll('#price-slider');
			priceSlider.forEach((element) => {
				const startPoint = element.getAttribute('data-start-point');
				element.noUiSlider.updateOptions({
					start: [0, +startPoint],
				});
			});
		});
	});
}

//открытие модалки filter
const filterBtn = document.querySelector('#filter-btn');
const filter = document.querySelector('.modal--filter');

if (filterBtn && filter) {
	filterBtn.addEventListener('click', () => {
		filter.classList.add(activeClass);
	});
}

//открытие детальной модалки filter
const filterDetBtns = document.querySelectorAll('#filter-det-btn');
const filterDet = document.querySelector('.modal--filter-det');

if (filterDet && filterDetBtns) {
	filterDetBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			filterDet.classList.add(activeClass);
		});
	});
}
