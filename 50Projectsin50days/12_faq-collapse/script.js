const btn = document.querySelectorAll('.faq-toggle')
const faq = document.querySelectorAll('.faq')
btn.forEach((ele, idx) => {
    ele.addEventListener('click', () => {
        if (faq[idx].classList.contains('active')) {
            console.log('1')
            faq[idx].classList.remove('active')
        } else {
            console.log('2')
            faq[idx].classList.add('active')
        }
    })

})