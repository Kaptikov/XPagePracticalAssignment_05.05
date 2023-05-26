window.addEventListener('scroll', function () {
  var header = document.querySelector('.header__container')
  header.classList.toggle('sticky', window.scrollY > 0)
})
