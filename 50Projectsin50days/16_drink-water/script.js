const bigGlass = document.querySelector('.bigGlass')
const notAdd = document.querySelector('.notAdd')
const alreadyAdd = document.querySelector('.alreadyAdd')
const smallGlasses = document.querySelectorAll('.smallGlass')

// 获取小杯子个数
const smallGlassCount = smallGlasses.length
// 获取大杯子的高度
const bigGlassHeight = +bigGlass.clientHeight
// 获取每一小杯水能够填满的大杯子的高度
const everySmallGetHeight = bigGlassHeight / smallGlassCount
// 大杯子的容量
const bigCapacity = 2
smallGlasses.forEach((ele, idx) => {
    ele.addEventListener('click', () => {
        if (ele.classList.contains('added')) {
            ele.classList.remove('added')
            for (let i = idx + 1; i < smallGlassCount; i++) {
                smallGlasses[i].classList.remove('added')
            }
            let tmp = idx * everySmallGetHeight
            alreadyAdd.style.height = `${tmp}px`
            notAdd.style.height = `${bigGlassHeight - tmp}px`
            // 用已经喝掉的水 / 全部的水 = 和水比例
            let c = document.querySelectorAll('.added').length
            alreadyAdd.innerHTML = `${c / smallGlassCount * 100}%`
            // 修改还需要喝的水量
            let total = document.querySelector('.total')
            total.innerHTML = `${bigCapacity - c * (bigCapacity / smallGlassCount)}L`
        } else {
            ele.classList.add('added')
            for (let i = idx - 1; i >= 0; i--) {
                smallGlasses[i].classList.add('added')
            }
            let tmp = (idx + 1) * everySmallGetHeight
            alreadyAdd.style.height = `${tmp}px`
            notAdd.style.height = `${bigGlassHeight - tmp}px`
            // 
            let c = document.querySelectorAll('.added').length
            alreadyAdd.innerHTML = `${c / smallGlassCount * 100}%`
            // 修改还需要喝的水量
            let total = document.querySelector('.total')
            total.innerHTML = `${bigCapacity - c * (bigCapacity / smallGlassCount)}L`
        }
    })
})