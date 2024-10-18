const counters = document.querySelectorAll('.counter')

window.addEventListener('load', () => {
    counters.forEach((ele, idx) => {
        let target = +ele.getAttribute('target')
        let step = target / 200
        let count = 0
        let time = setInterval(() => {
            count += step
            if (count >= target) clearInterval(time)
            counters[idx].innerHTML = Math.ceil(count)
        }, 10)
    })
})