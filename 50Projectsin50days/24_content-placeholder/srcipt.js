const cardHeader = document.querySelector('.cardHeader')
const title = document.querySelector('.title')
const main = document.querySelector('.main')
const photo = document.querySelector('.photo')
const uname = document.querySelector('.info .name')
const birthday = document.querySelector('.info .birthday')

const animatedBgs = document.querySelectorAll('.animated-bg')
function change() {
    cardHeader.innerHTML = '<img src="https://img01.jituwang.com/181117/256616-1Q11G04J080.jpg" alt = "">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    main.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    photo.innerHTML = '<img src="https://img2.woyaogexing.com/2024/05/17/94470744530a1e70!400x400.jpg" alt = "">'
    uname.innerHTML = 'John Doe'
    birthday.innerHTML = 'Oct 08, 2020'

    animatedBgs.forEach(animatedBg => {
        animatedBg.classList.remove('animated-bg')
    })
}

setTimeout(change, 2600)