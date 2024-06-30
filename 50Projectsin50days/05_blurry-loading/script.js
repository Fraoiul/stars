let bg = document.querySelector('.bg')
let text = document.querySelector('.text')
document.addEventListener('DOMContentLoaded', function () {
    // 透明度变化
    let transparencyChange = 99
    // 模糊值变化
    let blurChange = 20
    let n = setInterval(() => {
        if (transparencyChange <= 0) {
            clearInterval(n)
        }
        let opacityNum = getNum(transparencyChange)
        opacityNum = '0.' + opacityNum
        console.log(opacityNum)
        text.innerHTML = `${transparencyChange}%`
        transparencyChange--
        text.style.opacity = opacityNum
        blurChange -= 0.2
        bg.style.filter = `blur(${blurChange}px)`
    }, 20)
});

function getNum(num) {
    if (num < 10) {
        return '0' + num
    }
    return num
}