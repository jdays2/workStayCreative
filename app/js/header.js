//элементы
const shopBtn = document.querySelector('.header__shop-button');
const registerPopUp = document.querySelector('.header__register-alert');
const profilePopUp = document.querySelector('.header__profile-bar');
const infoPopUp = document.querySelector('.header__info');
const registerCloseBtn = document.querySelector(
	'.header__register-alert-button',
);
const profilePopUpCloseBtn = document.querySelector(
	'.header__profile-bar-button',
);
const storeBtn = document.querySelector('.header__store');
const userBtn = document.querySelector('.header__user');
const infoBtn = document.querySelector('#info-btn');
const logOut = document.querySelector('.header__profile-bar-button');
const input = document.querySelector('.header__search-input');
const inputWrapper = document.querySelector('.header__search');
const buttonsBar = document.querySelector('.header__buttons-bar');
const categorysTitle = document.querySelectorAll('.header__categorys-title');
const categorysPopUpBnt = document.querySelector('#categorys-btn');
const categorysPopUp = document.querySelector('.header__categorys');

const registerPopUpClass = 'header__register-alert--show';
const shopBtnClass = 'header__store--show';
const removeShopBtnClass = 'header__shop-button--remove';
const profilePopUpClass = 'header__profile-bar--show';
const infoPopupClass = 'header__info--show';
const inputClass = 'header__search-input--reg';
const buttonBarClass = 'header__buttons-bar--reg';
const activeInpunClass = 'header__search--active';
const parentListClass = 'header__categorys-list';
const showParentListClass = 'header__categorys-list--show';
const categorysPopUpClass = 'header__categorys--show';
const itemClass = 'header__item--slide';
const activeItemClass = 'header__item--open';

//добавляем показ register-popup
shopBtn.addEventListener('click', () => {
	registerPopUp.classList.toggle(registerPopUpClass);
});

//закрытие register-alert, смена блоков, 'login'

const updateHeaderStyles = () => {
	storeBtn.classList.toggle(shopBtnClass);
	shopBtn.classList.toggle(removeShopBtnClass);
	input.classList.toggle(inputClass);
	buttonsBar.classList.toggle(buttonBarClass);
};

registerCloseBtn.addEventListener('click', () => {
	registerPopUp.classList.remove(registerPopUpClass);
	updateHeaderStyles();
});

//'logout'
logOut.addEventListener('click', () => {
	registerPopUp.classList.remove(registerPopUpClass);
	updateHeaderStyles();
});

//показ profile-popup
userBtn.addEventListener('click', () => {
	profilePopUp.classList.toggle(profilePopUpClass);
});

profilePopUpCloseBtn.addEventListener('click', () => {
	profilePopUp.classList.remove(profilePopUpClass);
});

//открыть, закрыть информация popup
infoBtn.addEventListener('click', () => {
	if (categorysPopUp.classList.contains(categorysPopUpClass)) {
		categorysPopUp.classList.remove(categorysPopUpClass);

    const otherWrapper = categorysPopUpBnt.parentNode;
    otherWrapper.classList.toggle(itemClass);
    otherWrapper.classList.toggle(activeItemClass);
	}
  const wrapper = infoBtn.parentNode;
  wrapper.classList.toggle(itemClass);
  wrapper.classList.toggle(activeItemClass);
	infoPopUp.classList.toggle(infoPopupClass);
});

//добавлять active-status на Input
input.addEventListener('focus', () => {
	inputWrapper.classList.add(activeInpunClass);
});

input.addEventListener('blur', () => {
	inputWrapper.classList.remove(activeInpunClass);
});

//показать, закрыть категории popup
categorysPopUpBnt.addEventListener('click', () => {
	if (infoPopUp.classList.contains(infoPopupClass)) {
		infoPopUp.classList.remove(infoPopupClass);

    const otherWrapper = infoBtn.parentNode;
    otherWrapper.classList.toggle(itemClass);
    otherWrapper.classList.toggle(activeItemClass);
	}
  const wrapper = categorysPopUpBnt.parentNode;
  wrapper.classList.toggle(itemClass);
  wrapper.classList.toggle(activeItemClass);
	categorysPopUp.classList.toggle(categorysPopUpClass);
});

//расскрыть, закрыть список категорий в popup
categorysTitle.forEach((element) => {
	element.addEventListener('click', () => {
		const list = element.nextElementSibling;
		list.classList.toggle(showParentListClass);
	});
});
