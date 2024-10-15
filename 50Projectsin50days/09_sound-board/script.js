const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const buttons = document.querySelector('.btn')
sounds.forEach(sound => {
    let btn = document.createElement('button')
    btn.classList.add('button')
    btn.innerHTML = sound
    btn.addEventListener('click', () => {
        stopSingSong();
        document.getElementById(sound).play()
    })
    buttons.appendChild(btn)
})

// 先暂停正在放的歌曲
function stopSingSong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}