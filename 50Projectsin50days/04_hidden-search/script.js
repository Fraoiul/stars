let btn = document.querySelector('button')
let ipt = document.querySelector('input')
let search = document.querySelector('.search')
btn.addEventListener('click', () => {
    search.classList.toggle('getWidth')
    ipt.focus()
})