const licensItems = document.querySelectorAll(
	'.product-card__price-license-item',
);
const licensList = document.querySelector('.product-card__price-license-list');
const handlers = document.querySelectorAll('.product-card__title-item');

const descriptionBlock = document.querySelector(
	'.product-card__description-block',
);
const getBlock = document.querySelector('.product-card__get-block');
const featuresBlock = document.querySelector('.product-card__features-block');

const rewies = document.querySelectorAll('.product-card__rewies-item');

const activeBlock = 'product-card__active-block';
const activeLicensItemClass = 'product-card__price-license-item--active';
const activeHandlerClass = 'product-card__title-item--active';
const rewiesPopUpShow = 'product-card__settings-popup--show';

//главный свайпер
const swiper = new Swiper('.mySwiper', {
	loop: true,
	slidesPerView: 6,
	watchSlidesProgress: true,
});

const swiper2 = new Swiper('.mySwiper2', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: rem(2),
	navigation: {
		nextEl: '.product-card__arrow-right',
		prevEl: '.product-card__arrow-left',
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

//смена отображения характеристик/описания и тд
handlers.forEach((element) => {
	element.addEventListener('click', (e) => {
		if (!e.target.classList.contains(activeHandlerClass)) {
			const currentActive = document.querySelector('.' + activeHandlerClass);
			const currentActiveBlock = document.querySelector('.' + activeBlock);
			currentActive.classList.remove(activeHandlerClass);
			element.classList.add(activeHandlerClass);

			currentActiveBlock.classList.remove(activeBlock);
			switch (e.target.id) {
				case 'features':
					featuresBlock.classList.add(activeBlock);
					break;
				case 'description':
					descriptionBlock.classList.add(activeBlock);
					break;
				case 'get':
					getBlock.classList.add(activeBlock);
					break;
				default:
					break;
			}
		}
	});
});

//слайдер для других работ автора
const anotherWorksSwiper = new Swiper('.another-works__swiper', {
	slidesPerView: 1,
	speed: 500,
	spaceBetween: rem(6),
	wrapperClass: 'another-works__swiper-wrapper',
	slideClass: 'another-works__slide',
	breakpoints: {
		769: {
			slidesPerView: 4,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.another-works__bullets',
	},
});

//слайдер для отзывов
const rewieSwiper = new Swiper('.product-card__swiper', {
	spaceBetween: rem(2),
	slidesPerView: 1,
	wrapperClass: 'product-card__swiper-wrapper',
	slideClass: 'product-card__slide',
	speed: 500,

	breakpoints: {
		769: {
			navigation: {
				prevEl: '.product-card__prev',
				nextEl: '.product-card__next',
			},

			pagination: {
				el: '.product-card__fraction',
				type: 'fraction',
				formatFractionCurrent: addZero,
				formatFractionTotal: addZero,
			},
			slidesPerView: 3,
		},
	},
});

//логика появления pop-up для отзывов

rewies.forEach((element) => {
	const toggleBtn = element.querySelector(
		'.product-card__rewies-item-settings',
	);
	const popUp = element.querySelector('.product-card__settings-popup');
	toggleBtn.addEventListener('click', () => {
		const currentWidth = window.innerWidth;
		if (currentWidth < 768) {
			popUp.classList.toggle(rewiesPopUpShow);
		}
	});
});
