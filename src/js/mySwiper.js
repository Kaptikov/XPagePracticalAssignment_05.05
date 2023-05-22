import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
  Autoplay,
} from 'swiper'

let articleSwiper = new Swiper('.article__swiper', {
  modules: [Pagination, Navigation, EffectFade, Autoplay],

  loop: true,
  slidesPerView: 1,

  speed: 1500,

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  simulateTouch: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },

  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
  },
})

let development = new Swiper('.development__swiper', {
  modules: [Navigation, EffectCoverflow],
  slidesPerView: 3,

  speed: 1200,

  spaceBetween: 49,

  simulateTouch: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'coverflow',

  coverflowEffect: {
    rotate: 0,
    scale: 0.8,
    stretch: 0,
    depth: 0,
    modifier: 0,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 0,
        scale: 0.9,
        stretch: 45,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    996: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 49,
    },
  },
})

// const slider = document.querySelector('.swiper-container')

// let releasesSwiper

// function mobileSlider() {
//   if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
//     releasesSwiper = new Swiper(slider, {
//       slidesPerView: 1,
//       spaceBetween: 10,
//       loop: true,
//       slideClass: 'releases__item',
//     })

//     slider.dataset.mobile = 'true'
//   }

//   if (window.innerWidth > 600) {
//     slider.dataset.mobile = 'false'
//     if (slider.classList.contains('.swiper-container-initialized')) {
//       releasesSwiper.destroy()
//     }
//   }
// }

// mobileSlider()

// window.addEventListener('resize', () => {
//   mobileSlider()
// })
