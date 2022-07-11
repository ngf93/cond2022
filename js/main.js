const swiper1 = new Swiper('.swiper-main', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
  }
});
const swiper2 = new Swiper('.swiper-2', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});
const swiper3 = new Swiper('.swiper-products', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    575: {
      spaceBetween: 30,
    },
  }
});
const swiper4 = new Swiper('.swiper-brands', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
});