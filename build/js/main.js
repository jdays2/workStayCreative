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


const controlAdviceSwiper = new Swiper('.control-panel__advice-swiper', {
  spaceBetween: rem(2),
  slidesPerView: 1,
  wrapperClass: 'control-panel__advice-swiper-wrapper',
  slideClass: 'control-panel__advice-slide',
  speed: 500,
  breakpoints: {

    748: {
     
      slidesPerView: 3,
      spaceBetween: rem(0),


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



const adviceSalesSwiper = new Swiper('.lk-sales__advice-swiper', {
  spaceBetween: rem(6),
  slidesPerView: 1,
  wrapperClass: 'lk-sales__advice-swiper-wrapper',
  slideClass: 'lk-sales__advice-slide',
  speed: 500,
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
    el: '.lk-sales__advice-bullets',
  },


  


});



const tagInput = document.querySelector(".tag-input");
const tagArea = document.querySelector(".tag-area");
const ul = document.querySelector(".tag-area ul");
const label = document.querySelector(".label");

let tags = [];

function addEvent(element) {
  tagArea.addEventListener("click", () => {
  element.focus();
  });

  element.addEventListener("focus", () => {
  tagArea.classList.add("active");
  label.classList.add("label-active");
  });

  element.addEventListener("blur", (e) => {
  tagArea.classList.remove("active");
  if (element.value === "" && tags.length === 0) {
  label.classList.remove("label-active");
  }
  if (!element.value.match(/^\s+$/gi) && element.value !== "") {
  tags.push(e.target.value.trim());
  element.value = "";
  renderTags();
  }
  });

  element.addEventListener("keydown", (e) => {
  console.log(e);
  const value = e.target.value;
  if (
  (e.keyCode === 32 ||
  e.keyCode === 13 ||
  value[value.length - 1] === " ") &&
  !value.match(/^\s+$/gi) &&
  value !== ""
  ) {
  tags.push(e.target.value.trim());
  element.value = "";
  renderTags();
  }
  if (e.keyCode === 8 && value === "") {
  tags.pop();
  renderTags();
  }
  });
}
addEvent(tagInput);

function renderTags() {
  ul.innerHTML = "";
  tags.forEach((tag, index) => {
  createTag(tag, index);
  });
  const input = document.createElement("input");
  input.type = "text";
  input.className = "tag-input";
  addEvent(input);
  ul.appendChild(input);
  input.focus();
  setTimeout(() => (input.value = ""), 0);
}

function createTag(tag, index) {
  const li = document.createElement("li");
  li.className = "tag";
  const text = document.createTextNode(tag);
  const span = document.createElement("span");
  span.className = "cross";
  span.dataset.index = index;
  span.addEventListener("click", (e) => {
  tags = tags.filter((_, index) => index != e.target.dataset.index);
  renderTags();
  });
  li.appendChild(text);
  li.appendChild(span);
  ul.appendChild(li);
}



function addZero(num) {
  return (num > 9) ? num : '0' + num;
}

















