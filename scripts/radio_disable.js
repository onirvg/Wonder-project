const radiobtn_back = document.getElementById('one-way')
const back_day = document.querySelector('.back-day')
const radiobtn_to = document.getElementById('round-trip')

function toggleArrivalDay() {
if (radiobtn_back.checked){
    back_day.disabled = true;
    back_day.value = '';
}
else{
    back_day.disabled = false;
}
}

radiobtn_back.addEventListener('change',toggleArrivalDay);
radiobtn_to.addEventListener('change',toggleArrivalDay);

toggleArrivalDay();