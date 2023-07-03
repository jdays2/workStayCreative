const sortBtn1 = document.querySelector('#sort-btn');
const sortPopUp1 = document.querySelector('#sort-popup');
const sortBtnIcon1 = document.querySelector('#sort-btn .header-block__sort-btn-icon');
const sortBtnHideClass = 'header-block__sort--hidden';
const sortBtnIconFlipClass = 'header-block__sort-btn-icon--flip';

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
sortBtn1.addEventListener('click', () => {
  sortPopUp1.classList.toggle('sort-popup--show');
	setCheckers(sortPopUp1);
  iconFlip1();
});

const sortBtn2 = document.querySelector('#sort-btn-2');
const sortPopUp2 = document.querySelector('#sort-popup-2');
const sortBtnIcon2 = document.querySelector('#sort-btn-2 .header-block__sort-btn-icon');

// Функция для переворота индикатора/icon в sort popup 2
const iconFlip2 = () => {
  sortBtnIcon2.classList.toggle(sortBtnIconFlipClass);
};

// Показать/скрыть sort popup 2
if(sortBtn2) {
	sortBtn2.addEventListener('click', () => {
		sortPopUp2.classList.toggle('sort-popup--show');
		setCheckers(sortPopUp2);
		iconFlip2();
	});
}


// Показать/скрыть filter popup
const filterBtn = document.querySelector('#filter-btn');
const filterPopUp = document.querySelector('#filter-popup');
const filterBtnIcon = document.querySelector('#filter-btn .header-block__filter-img');
const filterBtnActiveIcon = document.querySelector('#filter-btn .header-block__filter-img--alter');

const changeIcon = () => {
  filterBtnIcon.classList.toggle('header-block__filter-img--hidden');
  filterBtnActiveIcon.classList.toggle('header-block__filter-img--hidden');
};

if(filterBtn) {
	filterBtn.addEventListener('click', () => {
		setCheckers(filterPopUp);
		changeIcon();
	
		filterPopUp.classList.toggle('filter-popup__wrapper--show');
		sortBtn1.classList.toggle(sortBtnHideClass);
		sortBtn2.classList.toggle(sortBtnHideClass);
		if (sortPopUp1.classList.contains('sort-popup--show')) {
			sortPopUp1.classList.remove('sort-popup--show');
			iconFlip1();
		}
		if (sortPopUp2.classList.contains('sort-popup--show')) {
			sortPopUp2.classList.remove('sort-popup--show');
			iconFlip2();
		}
	});
}
