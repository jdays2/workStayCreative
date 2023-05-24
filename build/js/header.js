//элементы
const shopBtn = document.querySelector('.header__shop-button');
const registerPopUp = document.querySelector('.header__register-alert');
const profilePopUp = document.querySelector('.header__profile-bar');
const registerCloseBtn = document.querySelector('.header__register-alert-button');
const profilePopUpCloseBtn = document.querySelector('.header__profile-bar-button');
const storeBtn = document.querySelector('.header__store');
const userBtn = document.querySelector('.header__user');

const registerPopUpClass = 'header__register-alert--show';
const shopBtnClass = 'header__store--show';
const removeShopBtnClass = 'header__shop-button--remove';
const profilePopUpClass = 'header__profile-bar--show';

//добавляем показ register-popup
shopBtn.addEventListener('click', () => {
  registerPopUp.classList.add(registerPopUpClass);
})


//закрытие register-alert, смена блоков

const updateHeaderStyles = () => {
  storeBtn.classList.toggle(shopBtnClass);
  shopBtn.classList.toggle(removeShopBtnClass);
}

registerCloseBtn.addEventListener('click', () => {
  registerPopUp.classList.remove(registerPopUpClass);
  updateHeaderStyles();
})

//показ profile-popup
userBtn.addEventListener('click', () => {
  profilePopUp.classList.add(profilePopUpClass);
})

profilePopUpCloseBtn.addEventListener('click', () => {
  profilePopUp.classList.remove(profilePopUpClass);
})



