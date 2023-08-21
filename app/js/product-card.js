const licensItems = document.querySelectorAll(
	'.product-card__price-license-item',
);
const mainSliderItems = document.querySelectorAll(
	'.product-card__item-main-img',
);
const licensList = document.querySelector('.product-card__price-license-list');
const handlers = document.querySelectorAll(
	'.product-card .product-card__title-item',
);
const bookmarksBtns = document.querySelectorAll('#add-to-bookmarks');
const sendFeedbackBtn = document.querySelector('#send-feedback');
const provideFeedbackBtn = document.querySelector('#provide-feedback');
const provideFeedbackModal = document.querySelector('.modal--new-review');
const createCollectionBtn = document.querySelector('#create-new-collection');
const createCollectionModal = document.querySelector('.modal--new-collection');
const confirmRevieModal = document.querySelector('.modal--confirm-review');
const addToBookmarksModal = document.querySelector('.modal--add-to-collection');
const modalListBtn = document.querySelector('#modal-list-btn');
const descriptionBlock = document.querySelector(
	'.product-card__description-block',
);

const complainModal = document.querySelector('.modal--set-complain');
const complainConfirmModal = document.querySelector('.modal--confirm-complain');
const settingsPopUpBtn = document.querySelectorAll(
	'.product-card__settings-popup',
);
const rewiesItemSettings = document.querySelectorAll(
	'.product-card__rewies-item-settings',
);
const sendComplainBtn = document.querySelector('#send-complain');

const modalFormList = document.querySelector('.modal__form-popup-wrapper');
const getBlock = document.querySelector('.product-card__get-block');
const featuresBlock = document.querySelector('.product-card__features-block');

const rewies = document.querySelectorAll('.product-card__rewies-item');

const closeBtn = document.querySelectorAll('.modal__close');
const modalSlider = document.querySelector('.modal--slider');
const modalInputElement = document.querySelector('.modal__form-input--list');

const modalQuestionBtn = document.querySelector('#set-question');
const modalQuestionConfirm = document.querySelector('.modal--confirm-question');
const modalQuestion = document.querySelector('.modal--question');
const modalQuestionConfirmBtn = document.querySelector('#send-question');
const modalFiles = document.querySelector('.modal--files');
const modalFilesBtn = document.querySelector('#files-info');

const activeBlock = 'product-card__active-block';
const activeLicensItemClass = 'product-card__price-license-item--active';
const activeHandlerClass = 'product-card__title-item--active';
const rewiesPopUpShow = 'product-card__settings-popup--show';
const activeModalFormList = 'modal__form-popup-wrapper--active';
const openModal = 'active';
const activeModalInput = 'modal__form-input--list-active';

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
if (licensItems) {
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
}
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

//логика появления pop-up для отзывов
if (rewies) {
	rewies.forEach((element) => {
		const toggleBtn = element.querySelector(
			'.product-card__rewies-item-settings',
		);
		const popUp = element.querySelector('.product-card__settings-popup');
		toggleBtn.addEventListener('click', () => {
			console.log(window.screen.width);
			const currentWidth = window.screen.width;
			if (currentWidth < 769) {
				popUp.classList.toggle(rewiesPopUpShow);
			}
		});
	});
}

//показ модалки для главного слайдера
if (mainSliderItems) {
	mainSliderItems.forEach((element) => {
		element.addEventListener('click', (e) => {
			if (e.target.id === 'main-slider-img') {
				modalSlider.classList.add(openModal);
			}
		});
	});
}
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
if (bookmarksBtns) {
	bookmarksBtns.forEach((element) => {
		element.addEventListener('click', (e) => {
			if (e.currentTarget.id === 'add-to-bookmarks') {
				addToBookmarksModal.classList.add(openModal);
			}
		});
	});
}
//показ создания новой коллекции modal
if (createCollectionBtn) {
	createCollectionBtn.addEventListener('click', () => {
		createCollectionModal.classList.add(openModal);
	});
}

//
const ratingStars = document.querySelectorAll('#modal-rating-star');

let selectedRating = 0; // Переменная для хранения выбранного рейтинга

// Добавляем обработчики событий для звезд
if (ratingStars) {
	ratingStars.forEach((star, index) => {
		star.addEventListener('mouseover', () => {
			// Выделяем звезды до текущей звезды включительно
			for (let i = 0; i <= index; i++) {
				ratingStars[i].classList.add('product-card__price-rating-item--full');
			}
		});

		star.addEventListener('mouseout', () => {
			// Убираем выделение со всех звезд
			ratingStars.forEach((star) => {
				star.classList.remove('product-card__price-rating-item--full');
			});

			// Выделяем звезды до выбранного рейтинга включительно
			for (let i = 0; i < selectedRating; i++) {
				ratingStars[i].classList.add('product-card__price-rating-item--full');
			}
		});

		star.addEventListener('click', () => {
			selectedRating = index + 1;

			// Визуальное отображение выбранного рейтинга
			ratingStars.forEach((star, i) => {
				if (i <= index) {
					star.classList.add('product-card__price-rating-item--full');
				} else {
					star.classList.remove('product-card__price-rating-item--full');
				}
			});
		});
	});
}

//показ модального окна с отзывом
if (provideFeedbackBtn) {
	provideFeedbackBtn.addEventListener('click', () => {
		provideFeedbackModal.classList.add(openModal);
	});
}

//показ модального окна с подтверждением отправки отзыва
if (sendFeedbackBtn) {
	sendFeedbackBtn?.addEventListener('click', () => {
		provideFeedbackModal.classList.remove(openModal);
		confirmRevieModal.classList.add(openModal);
	});
}

//показ списка для выбора конкретной жалобы (ее темы)
if (modalListBtn) {
	modalListBtn.addEventListener('click', () => {
		modalInputElement.classList.toggle(activeModalInput);
		modalFormList.classList.toggle(activeModalFormList);
	});
}
//изменение placeholder для инпута modal, при выборе активной темы жалобы
const radioButtons = document.querySelectorAll(
	'.modal__form-popup-box input[type="radio"]',
);

if (radioButtons) {
	radioButtons.forEach((radioButton) => {
		radioButton.addEventListener('change', () => {
			if (radioButton.checked) {
				const labelText = radioButton.nextElementSibling.textContent.trim();
				modalListBtn.placeholder = labelText;
			}
		});
	});
}
//показ modal c отправкой жалобы
if (rewiesItemSettings) {
	rewiesItemSettings.forEach((element) => {
		element.addEventListener('click', (e) => {
			if (window.screen.width > 769) {
				complainModal.classList.add(openModal);
			}
		});
	});
}
if (settingsPopUpBtn) {
	settingsPopUpBtn.forEach((element) => {
		element.addEventListener('click', (e) => {
			if (window.screen.width < 769) {
				complainModal.classList.add(openModal);
			}
		});
	});
}

//показ modal с оповещением об удачной отправке жалобы
if (sendComplainBtn) {
	sendComplainBtn.addEventListener('click', () => {
		complainModal.classList.remove(openModal);
		complainConfirmModal.classList.add(openModal);
	});
}

//показ modal с вопросом
if (modalQuestionBtn) {
	modalQuestionBtn.addEventListener('click', () => {
		modalQuestion.classList.add(openModal);
	});
}
//показ modal с оповещением об удачной отправке вопроса
if (modalQuestionConfirmBtn) {
	modalQuestionConfirmBtn.addEventListener('click', () => {
		modalQuestion.classList.remove(openModal);
		modalQuestionConfirm.classList.add(openModal);
	});
}

//показ модал с просмотром информации о файле
if (modalFilesBtn) {
	modalFilesBtn.addEventListener('click', () => {
		modalFiles.classList.add(openModal);
	});
}
