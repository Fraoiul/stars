const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const points = document.querySelectorAll('.point')
const line = document.querySelector('.line')
// 用idxOpint记录当前step
let index = 0
prev.addEventListener('click', () => {
    if (index >= 1) {
        points[index--].classList.remove('overPoint')
        if (index < 1) {
            prev.classList.remove('allow')
        } else if (index < 3 && index >= 1) {
            next.classList.add('allow')
        }
        line.style.width = (parseFloat(line.style.width)) - 98 + 'px'
    }
})
next.addEventListener('click', () => {
    if (index < 3) {
        points[++index].classList.add('overPoint')
        if (index >= 1 && index < 3) {
            prev.classList.add('allow')
        } else if (index >= 3) {
            next.classList.remove('allow')
        }
        // line.style.width += '98px'
        line.style.width = (parseFloat(line.style.width) || 0) + 98 + 'px'
    }
})