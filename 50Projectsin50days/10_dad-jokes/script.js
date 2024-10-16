const joke = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

btn.addEventListener('click', generateJoke);
generateJoke()


// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         }
//     }
//     // 使用fetch API发送网络请求获取joke
//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             joke.innerHTML = data.joke
//         })
// }

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke.innerHTML = data.joke
}