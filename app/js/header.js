//элементы
const shopBtn = document.querySelector('.header__shop-button');
const registerPopUp = document.querySelector('.header__register-alert');
const profilePopUp = document.querySelector('.header__profile-bar');
const infoPopUp = document.querySelector('.header__info');
const registerCloseBtn = document.querySelector('.header__register-alert-button');
const profilePopUpCloseBtn = document.querySelector('.header__profile-bar-button');
const storeBtn = document.querySelector('.header__store');
const userBtn = document.querySelector('.header__user');
const infoBtn = document.querySelector('#info-btn');
const logOut = document.querySelector('.header__profile-bar-button');
const input = document.querySelector('.header__search-input');
const buttonsBar = document.querySelector('.header__buttons-bar');

const registerPopUpClass = 'header__register-alert--show';
const shopBtnClass = 'header__store--show';
const removeShopBtnClass = 'header__shop-button--remove';
const profilePopUpClass = 'header__profile-bar--show';
const infoPopupClass = 'header__info--show';
const inputClass = 'header__search-input--reg';
const buttonBarClass = 'header__buttons-bar--reg';

//добавляем показ register-popup
shopBtn.addEventListener('click', () => {
  registerPopUp.classList.toggle(registerPopUpClass);
})


//закрытие register-alert, смена блоков, 'login'

const updateHeaderStyles = () => {
  storeBtn.classList.toggle(shopBtnClass);
  shopBtn.classList.toggle(removeShopBtnClass);
  input.classList.toggle(inputClass);
  buttonsBar.classList.toggle(buttonBarClass);
}

registerCloseBtn.addEventListener('click', () => {
  registerPopUp.classList.remove(registerPopUpClass);
  updateHeaderStyles();
})

//'logout'
logOut.addEventListener('click', () => {
  registerPopUp.classList.remove(registerPopUpClass);
  updateHeaderStyles();
})

//показ profile-popup
userBtn.addEventListener('click', () => {
  profilePopUp.classList.toggle(profilePopUpClass);
})

profilePopUpCloseBtn.addEventListener('click', () => {
  profilePopUp.classList.remove(profilePopUpClass);
})

//показ info-popup

infoBtn.addEventListener('click', () => {
  infoPopUp.classList.toggle(infoPopupClass);
})



