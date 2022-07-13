const swiper1 = new Swiper('.swiper-main', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      pagination: false,
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
const swiper5 = new Swiper('.swiper-nav', {
  loop: false,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 12,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: false,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
    slidesPerView: 4,
    spaceBetween: 50,
    },
  }
});
const swiper6 = new Swiper('.swiper-subnav', {
  loop: false,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 8,
  init: true,
  breakpoints: {
    768: {
      init: false,
      spaceBetween: 0,
    },
  }
});