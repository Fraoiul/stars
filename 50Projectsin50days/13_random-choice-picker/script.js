const textInput = document.getElementById('textarea')
let tags = document.getElementById('tags')
// 让textarea自动聚焦
textInput.focus()

textInput.addEventListener('keyup', (e) => {
    if (e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'Shift'
        && e.key !== 'Control' && e.key !== 'Alt' && e.key !== ',') {
        if (e.key === 'Enter') {
            // 如果按下回车了，不换行(阻止默认行为)，暂时禁止输入
            e.preventDefault()
            textInput.readOnly = true
            let preTime = new Date().getTime()
            let r = getRanom(tags.children.length)
            tags.children[r].classList.add('selected')
            let time = setInterval(() => {
                document.querySelector('.selected').classList.remove('selected')
                let r = getRanom(tags.children.length)
                tags.children[r].classList.add('selected')
                let nowTime = new Date().getTime()
                // 五秒钟之后给出结果
                if (nowTime - preTime >= 5000) {
                    clearInterval(time)
                    textInput.readOnly = false
                }
            }, 100)

        } else if (textInput.readOnly === false) {
            // 因为HTML中，多个空格会被视为一个空格，所以这里不需要对输入的字符串进行去空格操作
            // 可以将 white-space 属性设置为 pre 或 pre-wrap，这样页面会保留多个空格的显示,white-space属性默认值为normal
            // 但是要去掉开头和结果的空格
            let arr = textInput.value.trim().split(',')
            tags.innerHTML = ''
            if (arr[0] !== '' && arr[0] !== ' ') {
                arr.forEach(element => {
                    if (element != '') {
                        let showResult = document.createElement('span')
                        showResult.innerHTML = element
                        tags.appendChild(showResult)
                    }
                });
            }
        }
    }
})

// 获取随机数函数
function getRanom(number) {
    return Math.floor(Math.random() * number)
}