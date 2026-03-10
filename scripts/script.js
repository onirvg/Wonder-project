import { createCalendar as generateCalendar, getDates } from './modules/calendar.js'
import { getPassengersCounter} from './modules/addPassengers.js'
import { getCity } from './modules/cities.js'



generateCalendar()

function getById(id){
  return document.getElementById(id)
}

const roundTrip = document.getElementById('round-trip');
const oneWayTrip = document.getElementById('one-way')
const backDate = document.getElementById('back-day')

function updateTrip() {
if (oneWayTrip.checked) {
    backDate.classList.add("hidden")
}
else{
    backDate.classList.remove("hidden")
}
}

roundTrip.addEventListener("change",updateTrip)
oneWayTrip.addEventListener("change",updateTrip)

updateTrip()

const questionBoxes = document.querySelectorAll('.faq__question-box')

questionBoxes.forEach(item => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('faq__answer--visible')
    item.children[1].classList.toggle('faq_btn--clicked')
  })
})

