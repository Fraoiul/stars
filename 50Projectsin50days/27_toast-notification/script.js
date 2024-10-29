const addMsg = document.querySelector('.addNotification')
const showMsg = document.querySelector('.showNotification')

addMsg.addEventListener('click', addNotification)

const colors = ['rebeccapurple', 'green', 'red']
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

function addNotification() {
    const p = document.createElement('p')
    p.classList.add('message')
    let r1 = getRandom(0, 3)
    p.style.color = `${colors[r1]}`
    let r2 = getRandom(0, 4)
    p.innerHTML = `${messages[r2]}`

    showMsg.appendChild(p)
    setTimeout(() => {
        showMsg.removeChild(p)
    }, 3000)
}

function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}