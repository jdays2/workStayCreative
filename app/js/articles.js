"use strict";

const navItems = document.querySelectorAll('.articles__navigation-item')

const activeNavItem = 'articles__navigation-item--active';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки

    const blockID = anchor.getAttribute('href'); // Получаем идентификатор целевого блока из атрибута href ссылки
    let offset = rem(30); // Задайте желаемый отступ в пикселях

    const blockElement = document.querySelector(blockID); // Находим целевой блок по его идентификатору
    if (blockElement) {
      const top = blockElement.offsetTop - offset; // Вычисляем позицию скролла с учетом отступа
      window.scrollTo({
        top,
        behavior: 'smooth' // Добавляем плавный скроллинг
      });
    }
  });
});

//слайдер блок
const articleSwiper = new Swiper('.articles__swiper', {
  speed: 500,

  slidesPerView: 4,
  navigation: {
    prevEl: '.general__prev',
    nextEl: '.general__next',
  },
  pagination: {
    el: '.general__fraction',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
	breakpoints: {
		769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: rem(6)
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3)
    }
  }
});

//логика панельки навигации по статье (стили активной главы)
navItems.forEach((element) => {
  element.addEventListener('click', () => {
    if(!element.classList.contains(activeNavItem)) {
      const currentItem = document.querySelector('.'+activeNavItem);
      currentItem.classList.remove(activeNavItem);
      element.classList.add(activeNavItem)
    }
  })
})

