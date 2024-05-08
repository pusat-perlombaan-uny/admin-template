const brand_swiper1 = new Swiper(".brand-slider-1", {
  slidesPerView: 6,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 18,
    },
  },
});

const brand_swiper2 = new Swiper(".brand-slider-2", {
  slidesPerView: 6,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 18,
    },
  },
});

const review_swiper = new Swiper(".review-slider-1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 2,
    },
  },
});

const review_swiper_2 = new Swiper(".review-slider-2", {
  loop: true,
  spaceBetween: 30,
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const plan_swiper1 = new Swiper(".plan-slider-1", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

const plan_swiper2 = new Swiper(".plan-slider-2", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    530: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

const home_slider1 = new Swiper(".home-slide-1", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    530: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

var review_swiper_nav = new Swiper(".review-nav", {
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

const brand_swiper4 = new Swiper(".brand-slider-4", {
  slidesPerView: 6,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 18,
    },
  },
});

var swiper2 = new Swiper(".review-slider-3", {
  spaceBetween: 10,
  thumbs: {
    swiper: review_swiper_nav,
  },
});

const category_slider_1 = new Swiper(".category-slider-1", {
  slidesPerView: 7,
  spaceBetween: 22,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
  },
});

const creator_slider_1 = new Swiper(".creator-slider-1", {
  slidesPerView: 8,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    385: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    520: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});

const newest_slider_1 = new Swiper(".newest-slider-1", {
  slidesPerView: 5,
  spaceBetween: 12,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".slidePrev-btn",
    nextEl: ".slideNext-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 28,
    },
  },
});

const collection_swiper = new Swiper(".collection-slider-1", {
  grabCursor: true,
  spaceBetween: 40,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1560: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});
