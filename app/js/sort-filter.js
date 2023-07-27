const sortBtn = document.querySelectorAll('#sort-btn');
const filterBtn = document.querySelector('#filter-btn');
const sortPopUp = document.querySelectorAll('.sort-popup');
const filterPopUp = document.querySelector('.filter-popup__wrapper');
const filterResetBtn = document.querySelector('.filter-popup__reset-btn');
const filterApplyBtn = document.querySelector('.filter-popup__apply-btn');
const filterBtnIcon = document.querySelector('.header-block__filter-img');
const filterBtnActiveIcon = document.querySelector(
	'.header-block__filter-img--alter',
);
const sortBtnIcon = document.querySelector('.header-block__sort-btn-icon');
const filterCloseBtn = document.querySelector('.filter-popup__close-btn');

const activeSortPopUpClass = 'sort-popup--show';
const activeFilterPopUpClass = 'filter-popup__wrapper--show';
const sortBtnHideClass = 'header-block__sort--hidden';
const sortBtnIconFlipClass = 'header-block__sort-btn-icon--flip';
const filterBtnHiddenIcon = 'header-block__filter-img--hidden';

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
	let width = window.innerWidth;
	if (width > 769) {
		newIcon.classList.toggle(filterBtnHiddenIcon);
		icon.classList.toggle(filterBtnHiddenIcon);
	}
};

//range slider
const priceSlider = document.getElementById('price-slider');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const minPriceOutput = document.getElementById('min-price-value');
const maxPriceOutput = document.getElementById('max-price-value');

if (priceSlider) {
	noUiSlider.create(priceSlider, {
		start: [0, 5000],
		connect: true,
		range: {
			min: 0,
			max: 10000,
		},
	});
}

const updatePriceOutput = (values, handle) => {
	const minPointer = document.querySelector('.noUi-handle-lower');
	if (handle === 0) {
		if (parseInt(values[handle]) === 0) {
			minPriceOutput.classList.add('filter-popup__price-value--min');
			minPointer.classList.add('noUi-handle-lower--min');
		} else {
			minPriceOutput.classList.remove('filter-popup__price-value--min');
			minPointer.classList.remove('noUi-handle-lower--min');
		}

		minPriceOutput.textContent = Math.round(values[handle]);
	}
	if (handle === 1) {
		maxPriceOutput.textContent = Math.round(values[handle]);
	}
};

if (priceSlider) {
	priceSlider.noUiSlider.on('update', updatePriceOutput);
}

//функция по выключению модалки
const removeFilterActiveClass = () => {
	filterPopUp.classList.toggle(activeFilterPopUpClass);

};

//функция по закрытию sort
const closeSortHandler = () => {
	const width = window.innerWidth;
	if (width > 769) {
		sortBtn.forEach((btn) => {
			btn.classList.toggle(sortBtnHideClass);
		});
		sortPopUp.forEach((element) => {
			if (element.classList.contains(activeSortPopUpClass)) {
				iconFlip();
				element.classList.remove(activeSortPopUpClass);
			}
		});
	}
};

//показать, скрыть popUp filter
if (filterBtn) {
	filterBtn.addEventListener('click', () => {
		// changeIcon(filterBtnIcon, filterBtnActiveIcon);
		removeFilterActiveClass()
		closeSortHandler();
	});
}

//закрытие
if (filterApplyBtn) {
	filterApplyBtn.addEventListener('click', removeFilterActiveClass);
}
//сброс input
if (filterResetBtn) {
	filterResetBtn.addEventListener('click', () => {
		priceSlider.noUiSlider.reset();
	});
}

//закрытие при мобилке
const mobileFilterCloseBtn = document.querySelector('.filter-popup__close-btn');

if (mobileFilterCloseBtn) {
	mobileFilterCloseBtn.addEventListener('click', () => {
		removeFilterActiveClass();
	});
}
