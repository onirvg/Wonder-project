const button = document.querySelector('.faq_btn')
const answer = document.querySelector('.faq__answer')


button.addEventListener('click', () => {
    button.classList.toggle('active')

    if(button.classList.contains('active')){
        button.setAttribute('aria-expanded','true')
        answer.setAttribute('tabindex','0')
    }
    else{
        button.setAttribute('aria-expanded','false')
        answer.setAttribute('tabindex','-1')
    }
})