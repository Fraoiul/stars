let faTimes = document.querySelector('.fa-times')
let faBars = document.querySelector('.fa-bars')
let menu = document.querySelector('.menu')
let main = document.querySelector('#main')
let nav = document.querySelector('nav')
faTimes.addEventListener('click', () => {
    menu.style.transform = 'rotate(0deg)';
    main.style.transform = 'rotate(0deg)'
    nav.classList.remove('showNav')
});

faBars.addEventListener('click', () => {
    // 由于mune在main里面，所以旋转main的同时会旋转menu
    // 所以这里只需要设置menu旋转70度即可
    menu.style.transform = 'rotate(-70deg)';
    main.style.transform = 'rotate(-20deg)'
    nav.classList.add('showNav')
})