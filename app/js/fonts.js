const sortBtn = document.querySelector('#sort-btn');
const checkers = document.querySelectorAll('#sort-checker')
const sortPopUp = document.querySelector('.sort-popup')

const activeCheckerClass = 'sort-popup__checker--active';
const activeSortPopUpClass = 'sort-popup--show';

//показать, скрыть popup
sortBtn.addEventListener('click', () => {
  sortPopUp.classList.toggle(activeSortPopUpClass);
})

//логика checker
checkers.forEach((element) => {
  element.addEventListener('click', () => {
    const checker = element.querySelector('.sort-popup__checker');
    checker.classList.toggle(activeCheckerClass);
  })
})