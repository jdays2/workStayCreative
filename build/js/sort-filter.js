<<<<<<< HEAD
"use strict";

const sortBtn = document.querySelector('.header-block__sort');
const filterBtn = document.querySelector('#filter-btn');
const sortPopUp = document.querySelector('.sort-popup');
const filterPopUp = document.querySelector('.filter-popup__wrapper');
const filterResetBtn = document.querySelector('.filter-popup__reset-btn');
const filterApplyBtn = document.querySelector('.filter-popup__apply-btn');
const filterBtnIcon = document.querySelector('.header-block__filter-img');
const filterBtnActiveIcon = document.querySelector(
	'.header-block__filter-img--alter',
=======
const sortBtn1 = document.querySelector('#sort-btn');
const sortPopUp1 = document.querySelector('#sort-popup');
const sortBtnIcon1 = document.querySelector(
	'#sort-btn .header-block__sort-btn-icon',
>>>>>>> b5da6f171c40092974f77dcb5ff7d88fa6a95827
);
const sortBtnHideClass = 'header-block__sort--hidden';
const sortBtnIconFlipClass = 'header-block__sort-btn-icon--flip';
const priceSlider = document.querySelector('.price-slider');

// Функция для переворота индикатора/icon в sort popup 1
const iconFlip1 = () => {
	sortBtnIcon1.classList.toggle(sortBtnIconFlipClass);
};

// Логика checker
const setCheckers = (popup) => {
	const checkers = popup.querySelectorAll('.checker');

	checkers.forEach((element) => {
		if (element.closest('.sort-popup') === popup) {
			element.addEventListener('click', () => {
				element.classList.toggle('checker--active');
			});
		}
	});
};

// Показать/скрыть sort popup 1
if (sortBtn1) {
	sortBtn1.addEventListener('click', () => {
		sortPopUp1.classList.toggle('sort-popup--show');
		setCheckers(sortPopUp1);
		iconFlip1();
	});
}

const sortBtn2 = document.querySelector('#sort-btn-2');
const sortPopUp2 = document.querySelector('#sort-popup-2');
const sortBtnIcon2 = document.querySelector(
	'#sort-btn-2 .header-block__sort-btn-icon',
);

// Функция для переворота индикатора/icon в sort popup 2
const iconFlip2 = () => {
	sortBtnIcon2.classList.toggle(sortBtnIconFlipClass);
};

// Показать/скрыть sort popup 2
if (sortBtn2) {
	sortBtn2.addEventListener('click', () => {
		sortPopUp2.classList.toggle('sort-popup--show');
		setCheckers(sortPopUp2);
		iconFlip2();
	});
}

// Показать/скрыть filter popup
const filterBtn = document.querySelector('#filter-btn');
const filterPopUp = document.querySelector('#filter-popup');
const filterBtnIcon = document.querySelector(
	'#filter-btn .header-block__filter-img',
);
const filterBtnActiveIcon = document.querySelector(
	'#filter-btn .header-block__filter-img--alter',
);

const changeIcon = () => {
	filterBtnIcon.classList.toggle('header-block__filter-img--hidden');
	filterBtnActiveIcon.classList.toggle('header-block__filter-img--hidden');
};

if (filterBtn) {
	filterBtn.addEventListener('click', () => {
		setCheckers(filterPopUp);
		changeIcon();

		filterPopUp.classList.toggle('filter-popup__wrapper--show');
		if (sortPopUp2 && sortPopUp1.classList.contains('sort-popup--show')) {
			sortPopUp1.classList.remove('sort-popup--show');
			iconFlip1();
		}
		if (sortPopUp2 && sortPopUp2.classList.contains('sort-popup--show')) {
			sortPopUp2.classList.remove('sort-popup--show');
			iconFlip2();
		}
	});
}

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

<<<<<<< HEAD
priceSlider.noUiSlider.on('update', updatePriceOutput);

//показать, скрыть popUp filter
filterBtn.addEventListener('click', () => {
	setCheckers();
	changeIcon(filterBtnIcon, filterBtnActiveIcon);

	filterPopUp.classList.toggle(activeFilterPopUpClass);
	sortBtn.classList.toggle(sortBtnHideClass);
	if (sortPopUp.classList.contains(activeSortPopUpClass)) {
		sortPopUp.classList.remove(activeSortPopUpClass);
	}
});

//кнопка сброса cheker в filter popup
filterResetBtn.addEventListener('click', () => {
	priceSlider.noUiSlider.reset();
	const checkers = filterPopUp.querySelectorAll('.checker');

	checkers.forEach((element) => {
		if (element.classList.contains(activeCheckerClass)) {
			element.classList.remove(activeCheckerClass);
		}
	});
});

//закрытие и 'применение' параметров
filterApplyBtn.addEventListener('click', () => {
	changeIcon(filterBtnIcon, filterBtnActiveIcon);
	filterPopUp.classList.remove(activeFilterPopUpClass);
	sortBtn.classList.toggle(sortBtnHideClass);
	if (sortPopUp.classList.contains(activeSortPopUpClass)) {
		sortPopUp.classList.remove(activeSortPopUpClass);
	}
});

filterCloseBtn.addEventListener('click', () => {
	changeIcon(filterBtnIcon, filterBtnActiveIcon);
	filterPopUp.classList.remove(activeFilterPopUpClass);
	sortBtn.classList.toggle(sortBtnHideClass);
	if (sortPopUp.classList.contains(activeSortPopUpClass)) {
		sortPopUp.classList.remove(activeSortPopUpClass);
	}
});
=======
if (priceSlider) {
	priceSlider.noUiSlider.on('update', updatePriceOutput);
}
>>>>>>> b5da6f171c40092974f77dcb5ff7d88fa6a95827
