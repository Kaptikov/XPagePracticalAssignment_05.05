import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

let articleSwiper = new Swiper('.article__swiper', {
  modules: [Pagination, Navigation, EffectFade, Autoplay],
  // Optional parameters
  loop: true,
  // slidesPerView: 1,

  // direction: 'horizontal',

  // speed: 800,

  autoplay: true,

  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    clickable: true,
  },

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 44,
  //   },
  //   // when window width is >= 480px
  //   // 480: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 30
  //   // },
  //   // when window width is >= 640px
  //   524: {
  //     slidesPerView: 2,
  //     spaceBetween: 42,
  //   },
  //   767: {
  //     slidesPerView: 3,
  //     spaceBetween: 47,
  //   },
  // },
})
