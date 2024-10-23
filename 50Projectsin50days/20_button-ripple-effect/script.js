const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    if (!document.querySelector('span')) {
        const x = e.clientX
        const y = e.clientY

        const offsetX = e.offsetX
        const offsetY = e.offsetY
        let span = document.createElement('span')

        span.style.left = `${offsetX}px`
        span.style.top = `${offsetY}px`
        span.classList.add('circle')
        btn.appendChild(span)
        setTimeout(() => {
            span.remove()
        }, 500)
    }
})
