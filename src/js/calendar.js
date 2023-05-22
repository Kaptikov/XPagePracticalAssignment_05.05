// JS Script
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar'

// const calendar = new VanillaCalendar('#calendar')
// calendar.init()

var today = new Date()
var year = today.getFullYear()
var month = today.getMonth() + 1
var day = today.getDate()

if (month < 10) {
  month = '0' + month
}

if (day < 10) {
  day = '0' + day
}

var formattedDate = year + '-' + month + '-' + day

var input = document.getElementById('calendar-input-div')
if (input) {
  input.innerHTML = formattedDate
} else {
  console.error('Элемент не найден')
}

// const toggleButton = document.getElementById('calendar-btn')
// const calendarDiv = document.getElementById('calendar')

// toggleButton.addEventListener('click', () => {
//   calendarDiv.classList.toggle('vanilla-calendar_hidden')
// })

const options = {
  settings: {
    lang: 'ru',
    visibility: {
      weekend: false,
      // today: false,
    },
    selection: {
      // day: true,
      // month: true,
      year: false,
    },
  },
  input: true,
  date: {
    today: new Date(today),
  },
  actions: {
    changeToInput(e, HTMLInputElement, dates, time, hours, minutes, keeping) {
      if (dates[0]) {
        HTMLInputElement.innerHTML = dates[0]

        calendar.HTMLElement.classList.add('vanilla-calendar_hidden')
      } else {
        HTMLInputElement.innerHTML = now
      }
    },
  },
  DOMTemplates: {
    default: `
      <div class="vanilla-calendar-header">
        <#ArrowPrev />
        <div class="vanilla-calendar-header__content">
          <#Month />
        </div>
        <#ArrowNext />
      </div>
      <div class="vanilla-calendar-wrapper">
        <div class="vanilla-calendar-content">
          <#Week />
          <#Days />
        </div>
      </div>
    `,
  },
}

const calendar = new VanillaCalendar('#calendar-input-div', options)
calendar.init()
