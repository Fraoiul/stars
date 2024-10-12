const leftPicture = document.querySelector('.left')
const rightPicture = document.querySelector('.right')

leftPicture.addEventListener('mouseover', () => {
    rightPicture.classList.add('reduceWidth')
})

rightPicture.addEventListener('mouseover', () => {
    leftPicture.classList.add('reduceWidth')
})
leftPicture.addEventListener('mouseout', () => {
    rightPicture.classList.remove('reduceWidth')
})
rightPicture.addEventListener('mouseout', () => {
    leftPicture.classList.remove('reduceWidth')
})