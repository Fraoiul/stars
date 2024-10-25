const mycanvas = document.querySelector('.canvas')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const size = document.querySelector('.penSize')
const color = document.querySelector('.penColor')

const pen = mycanvas.getContext('2d')
let tmp = +size.innerHTML
let x, y
// 判断是否按下了鼠标
let isPressed = false
mycanvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

mycanvas.addEventListener('mouseup', () => {
    x = undefined
    y = undefined
    isPressed = false
})

mycanvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const curX = e.offsetX
        const curY = e.offsetY
        drawCircle(x, y)
        drawLine(x, y, curX, curY)
        x = curX
        y = curY
    }
})

// 为了画出的图像是连续的，所以使用画圆和自定义路径一起画
function drawCircle(x, y) {
    pen.lineWidth = tmp
    pen.beginPath();
    pen.arc(x, y, tmp, 0, Math.PI * 2)
    pen.fillStyle = color.value
    pen.fill()
}
function drawLine(x, y, curX, curY) {
    pen.beginPath()
    pen.moveTo(x, y)
    pen.lineTo(curX, curY)
    pen.strokeStyle = color.value
    pen.lineWidth = tmp * 2
    pen.stroke()
}

reset.addEventListener('click', () => {
    pen.clearRect(0, 0, mycanvas.width, mycanvas.height);
})
decrease.addEventListener('click', () => {
    if (tmp > 5) {
        tmp -= 5
        size.innerHTML = tmp
    }
})
increase.addEventListener('click', () => {
    if (tmp < 50) {
        tmp += 5
        size.innerHTML = tmp
    }
})