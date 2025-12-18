const btnpls = document.getElementById('plus_btn');
const btnmns = document.getElementById('minus_btn');
const counter = document.querySelector('.main__counter');
let num = 1;

btnpls.addEventListener('click', () => {
    num++;
    counter.innerHTML = num;
})

btnmns.addEventListener('click', () => {
    if(num > 1) {
        num--;
        counter.innerHTML = num;
    }
})