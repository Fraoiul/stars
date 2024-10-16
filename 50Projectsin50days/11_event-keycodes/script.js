const container = document.querySelector('.container')
const key = document.querySelector('.key')
window.addEventListener('keyup', (e) => {
    while (container.firstChild) container.removeChild(container.lastChild)
    container.innerHTML = `
        <div class="key">
            <small>event.key</small>
            ${e.key === ' ' ? 'Space' : e.key}
        </div>
        <div class="key">
            <small>event.keyCode</small>
            ${e.keyCode}
        </div>
        <div class="key">
            <small>event.Code</small>
            ${e.code}
        </div>
    `
})