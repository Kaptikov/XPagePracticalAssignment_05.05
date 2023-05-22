const burger = document?.querySelector('[data-burger]')
// const burgerBtn = document?.querySelector('[data-burger__btn]')
const menu = document?.querySelector('[data-menu]')
const logo = document?.querySelector('[data-logo]')
const menuTxt = document?.querySelector('[data-menuTxt]')
const menuItems = menu?.querySelectorAll('a')
const body = document.body

burger?.addEventListener('click', () => {
  body.classList.toggle('stop--scroll')
  // burger?.classList.toggle('burger--active')
  burger?.classList.toggle('burger-btn--active')
  menu?.classList.toggle('header__burger--visible')
})

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop--scroll')
    burger?.classList.remove('burger-btn--active')
    menu?.classList.remove('header__burger--visible')
  })
})
