let content = document.querySelectorAll('.content')

// 获取整个屏幕的高度
let screenHeight = window.innerHeight
// 整个屏幕高度减去content盒子的高度
screenHeight -= content[0].offsetHeight
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < content.length; i++) {
        if (content[i].getBoundingClientRect().top < screenHeight) {
            if (i % 2) {
                content[i].classList.remove('goLeft')
            } else {
                content[i].classList.remove('goRight')
            }
        } else {
            if (i % 2) {
                content[i].classList.add('goLeft')
            } else {
                content[i].classList.add('goRight')
            }
        }
    }
})


document.addEventListener('scroll', () => {
    for (let i = 0; i < content.length; i++) {
        if (content[i].getBoundingClientRect().top < screenHeight) {
            if (i % 2) {
                content[i].classList.remove('goLeft')
            } else {
                content[i].classList.remove('goRight')
            }
        } else {
            if (i % 2) {
                content[i].classList.add('goLeft')
            } else {
                content[i].classList.add('goRight')
            }
        }
    }
})