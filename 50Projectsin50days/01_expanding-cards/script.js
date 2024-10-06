let card = document.querySelectorAll('.card')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        // 删除之前添加的show
        document.querySelector('.show').classList.remove('show')
        // 添加新的show
        card[i].classList.add('show')
    })

}
