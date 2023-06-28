const licensItems = document.querySelectorAll(
	'.product-card__price-license-item',
);
const mainSliderItems = document.querySelectorAll(
	'.product-card__item-main-img',
);
const licensList = document.querySelector('.product-card__price-license-list');
const handlers = document.querySelectorAll('.product-card__title-item');
const bookmarksBtns = document.querySelectorAll('#add-to-bookmarks');
const createCollectionBtn = document.querySelector("#create-new-collection");
const createCollectionModal = document.querySelector('.modal--new-collection')
const addToBookmarksModal = document.querySelector('.modal--add-to-collection');

const descriptionBlock = document.querySelector(
	'.product-card__description-block',
);
const getBlock = document.querySelector('.product-card__get-block');
const featuresBlock = document.querySelector('.product-card__features-block');

const rewies = document.querySelectorAll('.product-card__rewies-item');

const closeBtn = document.querySelectorAll('.modal__close');
const modalSlider = document.querySelector('.modal--slider');

const activeBlock = 'product-card__active-block';
const activeLicensItemClass = 'product-card__price-license-item--active';
const activeHandlerClass = 'product-card__title-item--active';
const rewiesPopUpShow = 'product-card__settings-popup--show';
const openModal = 'modal--open';

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

//modal свайпер

const modalSwipper = new Swiper('.product-card__popup-swiper', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: rem(20),
	navigation: {
		nextEl: '.item-popup__next',
		prevEl: '.item-popup__prev',
	},
	pagination: {
		el: '.item-popup__fraction',
		type: 'fraction',
	},
});

// Слушаем событие изменения активного слайда во втором свайпере
swiper2.on('slideChange', function () {
	const activeSlideIndex = swiper2.activeIndex;
	modalSwipper.slideTo(activeSlideIndex); // Перемещаем модальный свайпер к активному слайду
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
	pagination: {
		el: '.product-card__pagination',
		type: 'bullets',
	},

	breakpoints: {
		769: {
			navigation: {
				prevEl: '.product-card__prev',
				nextEl: '.product-card__next',
			},
			slidesPerView: 3,
			pagination: {
				el: '.product-card__fraction',
				type: 'fraction',
				formatFractionCurrent: addZero,
				formatFractionTotal: addZero,
			},
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

//показ модалки для главного слайдера
mainSliderItems.forEach((element) => {
	element.addEventListener('click', (e) => {
		if (e.target.id === 'main-slider-img') {
			modalSlider.classList.add(openModal);
		}
	});
});

//смежный обработчик для всех закрывающих кнопок в модалках
if (closeBtn) {
	closeBtn.forEach((element) => {
		element.addEventListener('click', () => {
			const parent = element.parentElement.parentElement;
			parent.classList.remove(openModal);
		});
	});
}

//показ добавление в закладки modal
bookmarksBtns.forEach((element) => {
	element.addEventListener('click', (e) => {
		if (e.currentTarget.id === 'add-to-bookmarks') {
			addToBookmarksModal.classList.add(openModal);
		}
	});
});


//показ создания новой коллекции modal
createCollectionBtn.addEventListener('click', () => {
	createCollectionModal.classList.add(openModal)
})