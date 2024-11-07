let container = document.querySelector('.container')
// 保存20种颜色
let color = [
    "rgba(255, 165, 0, 0.7)",
    "rgba(255, 99, 71, 0.7)",
    "rgba(255, 215, 0, 0.7)",
    "rgba(255, 20, 147, 0.7)",
    "rgba(255, 165, 0, 0.7)",
    "rgba(255, 127, 36, 0.7)",
    "rgba(255, 255, 0, 0.7)",
    "rgba(255, 105, 180, 0.7)",
    "rgba(0, 128, 0, 0.7)",
    "rgba(0, 255, 0, 0.7)",
    "rgba(0, 0, 255, 0.7)",
    "rgba(0, 191, 255, 0.7)",
    "rgba(173, 216, 230, 0.7)",
    "rgba(255, 0, 0, 0.7)",
    "rgba(255, 140, 0, 0.7)",
    "rgba(255, 0, 255, 0.7)",
    "rgba(0, 255, 255, 0.7)",
    "rgba(255, 0, 128, 0.7)",
    "rgba(255, 165, 25, 0.7)",
    "rgba(255, 250, 205, 0.7)"
]

// acr:横线小格子个数, dwn:纵向小格子个数
function createElement(acr = 0, dwn = 0) {
    for (let i = 1; i <= dwn; i++) {
        for (let j = 1; j <= acr; j++) {
            let newBox = document.createElement('div')
            newBox.classList.add('item')
            newBox.addEventListener('mouseover', function () {
                let getColor = color[getRandColor()]
                newBox.style.transition = '0s ease'
                this.style.backgroundColor = `${getColor}`
                this.style.boxShadow = `${getColor} 0px 0px 2px`;
            })
            newBox.addEventListener('mouseleave', function () {
                newBox.style.transition = '2s ease'
                this.style.backgroundColor = `rgb(31, 32, 33)`
                this.style.boxShadow = 'none';
            })
            container.appendChild(newBox)
        }
    }
}

// 获取随机颜色
function getRandColor() {
    return Math.floor(Math.random() * 20);
}
createElement(20, 25)