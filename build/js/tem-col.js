const temColNeonSwiper = new Swiper(".tem-col__swiper--neon", {
	spaceBetween: rem(6),
  wrapperClass: 'general__swiper-wrapper',
  slideClass: 'general__slide',
  speed: 500,
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
      spaceBetween: rem(6),
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 6
      }
    }
  }
});

const temColRandevuSwiper = new Swiper(".tem-col__swiper--randevu", {
	spaceBetween: rem(6),
  wrapperClass: 'general__swiper-wrapper',
  slideClass: 'general__slide',
  speed: 500,
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
      spaceBetween: rem(6),
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 6
      }
    }
  }
});

const temColMonthSwiper = new Swiper(".tem-col__swiper--month", {
	spaceBetween: rem(6),
  wrapperClass: 'general__swiper-wrapper',
  slideClass: 'general__slide',
  speed: 500,
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
      spaceBetween: rem(6),
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 6
      }
    }
  }
});

const temColSportSwiper = new Swiper(".tem-col__swiper--sport", {
	spaceBetween: rem(6),
  wrapperClass: 'general__swiper-wrapper',
  slideClass: 'general__slide',
  speed: 500,
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
      spaceBetween: rem(6),
    },
    320: {
      slidesPerView: 1,
      spaceBetween: rem(3.5),
      grid: {
        fill: 'row',
        rows: 6
      }
    }
  }
});