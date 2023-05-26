const realFileBtn = document.getElementById('real-file')
const customBtn = document.getElementById('custom-button')
const customTxt = document.getElementById('custom-text')

if (customBtn) {
  customBtn.addEventListener('click', function () {
    realFileBtn.click()
  })
} else {
  console.error('Элемент customBtn не найден')
}

if (realFileBtn) {
  realFileBtn.addEventListener('change', function () {
    if (realFileBtn.value) {
      customTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1]
    } else {
      customTxt.innerHTML = 'Прикрепите файл'
    }
  })
} else {
  console.error('Элемент realFileBtn не найден')
}

// customBtn.addEventListener('click', function () {
//   realFileBtn.click()

// })

// realFileBtn.addEventListener('change', function () {
//   if (realFileBtn.value) {
//     customTxt.innerHTML = realFileBtn.value.match(
//       /[\/\\]([\w\d\s\.\-\(\)]+)$/
//     )[1]
//   } else {
//     customTxt.innerHTML = 'Прикрепите файл'
//   }
// })
