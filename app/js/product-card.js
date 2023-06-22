
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 6,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
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
