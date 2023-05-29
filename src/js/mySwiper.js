import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
  Autoplay,
  EffectCards,
} from 'swiper'

let articleSwiper = new Swiper('.article__swiper', {
  modules: [Pagination, Navigation, EffectFade, Autoplay],

  loop: true,
  slidesPerView: 1,

  speed: 800,

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

  speed: 800,

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

// let releasesSwiper1 = new Swiper('.releases__swiper', {
//   modules: [Navigation, EffectFade],
//   slidesPerView: 1,
//   loop: true,

//   // speed: 1200,

//   // spaceBetween: 49,

//   simulateTouch: false,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
// })

const slider = document.querySelector('.releases__swiper')

let releasesSwiper

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    releasesSwiper = new Swiper(slider, {
      modules: [Navigation, EffectFade, Autoplay],

      slideClass: 'releases__item',

      loop: true,
      slidesPerView: 1,
      // spaceBetween: 30,

      speed: 500,

      simulateTouch: false,

      effect: 'fade',

      fadeEffect: {
        crossFade: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 768) {
    // releasesSwiper.destroy()
    if (slider.classList.contains('swiper-initialized')) {
      slider.dataset.mobile = 'false'
      releasesSwiper.destroy()
    }
  }
}

if (
  window.hasOwnProperty('dataset') &&
  window.dataset.hasOwnProperty('mobile')
) {
  mobileSlider()
}

window.addEventListener('resize', () => {
  mobileSlider()
})
