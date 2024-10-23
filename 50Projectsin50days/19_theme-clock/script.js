const HNeedle = document.querySelector('.HNeedle')
const MNeedle = document.querySelector('.MNeedle')
const SNeedle = document.querySelector('.SNeedle');
const time = document.querySelector('.time')
const date = document.querySelector('.date');
const changeDome = document.querySelector('.changeMode')
const day = document.querySelector('.day')
const body = document.body

const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
function setTimer() {
    const nowTimeDate = new Date()
    date.innerHTML = ``
    // 获取时
    let hour = nowTimeDate.getHours()
    // 获取分
    let minute = nowTimeDate.getMinutes()
    // 获取秒
    let second = nowTimeDate.getSeconds();

    // 计算时针偏移量
    let hourShifting = (hour * 30) + ((minute / 60) * 30)
    // 计算分针偏移量
    let minuteShifting = (minute * 6) + ((second / 60) * 6)
    // 计算秒针偏移量
    let secondShifting = second * 6
    HNeedle.style.transform = `rotate(${hourShifting}deg)`
    MNeedle.style.transform = `rotate(${minuteShifting}deg)`
    SNeedle.style.transform = `rotate(${secondShifting}deg)`
    let flag = ''
    if (hour >= 12) {
        flag = 'PM'
    } else {
        flag = 'AM'
    }
    time.innerHTML = `${hour % 12}:${minute} ${flag}`

    // 获取周
    let week = nowTimeDate.getDay()
    // 获取月份
    let month = nowTimeDate.getMonth()
    // 获取日
    let d = nowTimeDate.getDate()
    date.innerHTML = `${dayOfWeek[week - 1].toUpperCase()},${months[month].toUpperCase()}`
    day.innerHTML = `${d}`
}
// 一上来先让函数执行一次
setTimer()

setInterval(setTimer, 1000)

changeDome.addEventListener('click', (e) => {
    changeDome.classList.toggle('darkMode')
    HNeedle.classList.toggle('darkMode')
    MNeedle.classList.toggle('darkMode')
    time.classList.toggle('darkMode')
    day.classList.toggle('darkMode')
    if (body.classList.contains('darkMode')) {
        body.classList.remove('darkMode')
        e.target.innerHTML = 'Dark mode'
    } else {
        body.classList.add('darkMode')
        e.target.innerHTML = 'Light mode'
    }
})