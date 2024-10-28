const container = document.querySelector('.container')
const rightPicture = document.querySelector('.rightPicture')
const leftColor = document.querySelector('.leftColor')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = rightPicture.querySelectorAll('div').length
let activeSlideIndex = 0

leftColor.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = container.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    rightPicture.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftColor.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}