"use strict";


const rem = function (rem) {
      if ($(window).width() > 768) {
          return 0.005208335 * $(window).width() * rem;
      } else {
          return (100/390) * (0.1 * $(window).width()) * rem;
      }
};



  const mainSwiper = new Swiper('.main__swiper', {
    effect: 'coverflow',
    grabCursor: true,
    
    slidesPerView: 1,
    coverflowEffect: {
      rotate: -2,
      stretch: "-80%",
      depth: 300,
      modifier: -1,
      slideShadows: false
     
    },
  
  
   
});

const cleansingSlider = new Swiper('.popular-users__swiper', {
  slidesPerView: 2,
  speed: 500,
  spaceBetween: rem(2),
  wrapperClass: 'popular-users__swiper-wrapper',
  slideClass: 'popular-users__slide',
  breakpoints: {

    748: {
     
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
    el: '.popular-users__bullets',
  },

 
});



const popularFontSwiper = new Swiper('.popular-fonts__swiper', {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: rem(2),
  wrapperClass: 'popular-fonts__swiper-wrapper',
  slideClass: 'popular-fonts__slide',
  breakpoints: {

    748: {
     
      slidesPerView: 3,
      


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
    el: '.popular-fonts__bullets',
  },

 
});


const popularGraphSwiper = new Swiper('.popular-graph__swiper', {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: rem(2),
  wrapperClass: 'popular-graph__swiper-wrapper',
  slideClass: 'popular-graph__slide',
  breakpoints: {

    748: {
     
      slidesPerView: 3,
      


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
    el: '.popular-graph__bullets',
  },

 
});





const adviceSwiper = new Swiper('.advice__swiper', {
  spaceBetween: rem(2),
  slidesPerView: 1,
  wrapperClass: 'advice__swiper-wrapper',
  slideClass: 'advice__slide',
  speed: 500,
  navigation: {
    prevEl: '.advice__prev',
    nextEl: '.advice__next',
  },


  
  pagination: {
    el: ".advice__fraction",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero
  },



  


  breakpoints: {

    748: {
     
      slidesPerView: 4,
      


    },

  },


});



// const lkSwiper = new Swiper('.lk-m__start-swiper', {
 
//   slidesPerView: 1,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   },
//   wrapperClass: 'lk-m__start-swiper-wrapper',
//   slideClass: 'lk-m__start-slide',
//   speed: 500,
//   navigation: {
//     prevEl: '.lk-m__start-prev',
//     nextEl: '.lk-m__start-next',
//   },


// });



function addZero(num) {
  return (num > 9) ? num : '0' + num;
}
