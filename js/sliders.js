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

var swiper8 = new Swiper(".swiper-mini", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 'auto',
  freemode: true,
  loop: false,
  slideToClickedSlide: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper7 = new Swiper(".swiper-photo", {
  loop: false,
  spaceBetween: 10,
  watchSlidesProgress: true,
  thumbs: {
    swiper: swiper8,
  },
});

const swiper9 = new Swiper('.swiper-6', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  }
});