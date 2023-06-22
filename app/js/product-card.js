const licensItems = document.querySelectorAll('.product-card__price-license-item');
const licensList = document.querySelector('.product-card__price-license-list');

const activeLicensItemClass = 'product-card__price-license-item--active'
//главный свайпер
const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 6,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: rem(2),
  navigation: {
    nextEl: ".product-card__arrow-right",
    prevEl: ".product-card__arrow-left",
  },
  thumbs: {
    swiper: swiper,
  },
});

//изменение активного элемента в выборе лицензии
licensItems.forEach((element) => {
	let itemClass = element.classList;

	const removePrevios = () => {
		const ativeItem = licensList.querySelector('.' + activeLicensItemClass);
		ativeItem.classList.remove(activeLicensItemClass);
	};

	element.addEventListener('click', () => {
		if (!itemClass.contains(activeLicensItemClass)) {
			removePrevios();
			itemClass.add(activeLicensItemClass);
		}
	});
});
