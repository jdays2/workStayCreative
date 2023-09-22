const mainSliderItems = document.querySelectorAll(
	'.product-card__item-main-img',
);
const allModals = document.querySelectorAll('.modal');
const rewies = document.querySelectorAll('.product-card__rewies-item');
const bookmarksBtns = document.querySelectorAll('#add-to-bookmarks');
const sendFeedbackBtn = document.querySelector('#send-feedback');
const provideFeedbackBtn = document.querySelector('#provide-feedback');
const provideFeedbackModal = document.querySelector('.modal--new-review');
const createCollectionBtn = document.querySelector('#create-new-collection');
const createCollectionModal = document.querySelector('.modal--new-collection');
const confirmRevieModal = document.querySelector('.modal--confirm-review');
const addToBookmarksModal = document.querySelector('.modal--add-to-collection');
const modalListBtn = document.querySelector('#modal-list-btn');
const complainModal = document.querySelector('.modal--set-complain');
const complainConfirmModal = document.querySelector('.modal--confirm-complain');
const settingsPopUpBtn = document.querySelectorAll(
	'.product-card__settings-popup',
);
const rewiesItemSettings = document.querySelectorAll(
	'.product-card__rewies-item-settings',
);
const sendComplainBtn = document.querySelector('#send-complain');
const modalFormList = document.querySelector('.modal__form-select-list');
const closeBtn = document.querySelectorAll('.modal__close');
const modalSlider = document.querySelector('.modal--slider');
const modalInputElement = document.querySelector('.modal__form-input--list');

const modalQuestionBtn = document.querySelector('#set-question');
const modalQuestionConfirm = document.querySelector('.modal--confirm-question');
const modalQuestion = document.querySelector('.modal--question');
const modalQuestionConfirmBtn = document.querySelector('#send-question');
const modalFiles = document.querySelector('.modal--files');
const modalFilesBtn = document.querySelector('#files-info');

const activeHandlerClass = 'product-card__title-item--active';
const activeModalFormList = 'modal__form-popup-wrapper--active';
const openModal = 'active';
const activeModalInput = 'modal__form-input--list-active';

//смежный обработчик для всех закрывающих кнопок в модалках
if (closeBtn) {
	closeBtn.forEach((element) => {
		element.addEventListener('click', () => {
			const parent = element.parentElement.parentElement;
			parent.classList.remove(openModal);
		});
	});
}

//смежный обработчик закрытия модалки при клике вне ее контента. Обработчик блокировки скрола.
if (allModals) {
	allModals.forEach((modal) => {
		modal.addEventListener('click', (e) => {
			if (e.target === modal && modal.classList.contains('active')) {
				modal.classList.remove('active');
			}
		});
	});

	function handleModalClassChanges(mutationsList, observer) {
		mutationsList.forEach((mutation) => {
			if (
				mutation.type === 'attributes' &&
				mutation.attributeName === 'class'
			) {
				const modal = mutation.target;
				if (modal.classList.contains('active')) {
					document.body.style.overflow = 'hidden';
				} else {
					document.body.style.overflow = 'auto';
				}
			}
		});
	}

	allModals.forEach((modal) => {
		const observer = new MutationObserver(handleModalClassChanges);
		observer.observe(modal, { attributes: true });
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
	const activeClass = 'active';
	modalListBtn.addEventListener('click', () => {
		modalInputElement.classList.toggle(activeModalInput);
		modalFormList.classList.toggle(activeClass);
	});
}

//изменение placeholder для инпута modal, при выборе активной темы жалобы
const selectItems = modalFormList.querySelectorAll('label');

if (selectItems) {
	const activeClass = 'active';
	selectItems.forEach((item) => {
		const input = item.querySelector('input');
		input.addEventListener('input', () => {
			if (input.checked) {
				const message = item.querySelector('p');
				const labelText = message.textContent.trim();
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

//логика появления pop-up для отзывов
if (rewies) {
	rewies.forEach((element) => {
		const toggleBtn = element.querySelector(
			'.product-card__rewies-item-settings',
		);
		const popUp = element.querySelector('.product-card__settings-popup');
		toggleBtn.addEventListener('click', () => {
			const currentWidth = window.screen.width;
			if (currentWidth < 769) {
				popUp.classList.toggle(rewiesPopUpShow);
			}
		});
	});
}
