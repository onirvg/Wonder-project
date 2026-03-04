import { createCalendar as generateCalendar, getDates } from './modules/calendar.js'
import { getPassengersCounter} from './modules/addPassengers.js'



generateCalendar()


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


