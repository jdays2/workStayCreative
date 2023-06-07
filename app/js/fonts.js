const sortBtn = document.querySelector('#sort-btn');
const checkers = document.querySelectorAll('#sort-checker');
const sortPopUp = document.querySelector('.sort-popup');

const activeCheckerClass = 'sort-popup__checker--active';
const activeSortPopUpClass = 'sort-popup--show';

//показать, скрыть popup
sortBtn.addEventListener('click', () => {
	sortPopUp.classList.toggle(activeSortPopUpClass);
});

//логика checker
checkers.forEach((element) => {
	element.addEventListener('click', () => {
		const checker = element.querySelector('.sort-popup__checker');
		checker.classList.toggle(activeCheckerClass);
	});
});

//range slider
var priceSlider = document.getElementById('price-slider');
var minPriceInput = document.getElementById('min-price');
var maxPriceInput = document.getElementById('max-price');

noUiSlider.create(priceSlider, {
		start: [0, 1000], // Начальные значения минимальной и максимальной цены
		connect: true,
		range: {
				'min': 0,
				'max': 2000 // Максимальное значение цены
		}
});

priceSlider.noUiSlider.on('update', function (values, handle) {
		if (handle === 0) {
				minPriceInput.value = values[handle];
		}
		if (handle === 1) {
				maxPriceInput.value = values[handle];
		}
});