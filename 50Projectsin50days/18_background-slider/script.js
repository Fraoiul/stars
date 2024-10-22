const body = document.body
const slides = Array.from(document.querySelectorAll('.slide'))
const rightBtn = document.getElementById('right')
const leftBtn = document.getElementById('left')


rightBtn.addEventListener('click', () => {
    slides.push(slides[0])
    slides.shift()
    render()
})

leftBtn.addEventListener('click', () => {
    slides.unshift(slides[slides.length - 1])
    slides.pop()
    render()
})

function render() {
    body.style.backgroundImage = slides[0].style.backgroundImage
    document.querySelector('.active').classList.remove('active')
    slides[0].classList.add('active')
}