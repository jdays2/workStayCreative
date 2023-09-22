const handlers = document.querySelectorAll(
	'.product-card .product-card__title-item',
);
const descriptionBlock = document.querySelector(
	'.product-card__description-block',
);

const getBlock = document.querySelector('.product-card__get-block');
const featuresBlock = document.querySelector('.product-card__features-block');

const activeBlock = 'product-card__active-block';
const rewiesPopUpShow = 'product-card__settings-popup--show';

//главный свайпер
const swiper = new Swiper('.mySwiper', {
	slidesPerView: 'auto',
	spaceBetween: rem(2),
	watchSlidesProgress: true,
	navigation: {
		nextEl: '.product-card__arrow-right',
		prevEl: '.product-card__arrow-left',
	},
});

const swiper2 = new Swiper('.mySwiper2', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: rem(2),

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

//смена отображения характеристик/описания и тд
if (handlers) {
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
}

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
	slidesPerGroup: 1,
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
			slidesPerGroup: 3,
			pagination: {
				el: '.product-card__fraction',
				type: 'fraction',
				formatFractionCurrent: addZero,
				formatFractionTotal: addZero,
			},
		},
	},
});
