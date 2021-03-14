const swiper = new Swiper('.swiper-container', {
  init: false,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 500,
  observer: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 5,
    }
  },

  zoom: {
    maxRatio: 1.2,
    minRation: 1,
  },
});


swiper.on('init', () => {
  swiper.zoom.in();
});
swiper.init();
swiper.on('slideChangeTransitionStart', () => {
  swiper.zoom.out();
});
swiper.on('slideChangeTransitionEnd', () => {
  if (swiper.zoom.scale === 1) {
    swiper.zoom.in();
  }
});