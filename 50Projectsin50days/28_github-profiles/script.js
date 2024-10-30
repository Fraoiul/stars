const search = document.querySelector('.search')
search.addEventListener('keyup', getUserMsg)
const APIAddress = 'https://api.github.com/users'
async function getUserMsg(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        clearPage()
        try {
            const { data } = await axios(APIAddress + `/${this.value}`)
            createUserRegion(data)
            getRepos(this.value)
        } catch (error) {
            if (error.response.status == 404) {
                showErrorMSG('No profile with this username')
            }
        }
        this.value = ''
    }
}

function clearPage() {
    const main = document.querySelector('.main')
    if (main !== null) {
        document.body.removeChild(main)
    }
}

function createUserRegion(data) {
    let user = document.createElement('div')
    user.classList.add('main')
    const userID = data.name || data.login
    const userBio = data.bio ? `<p>${data.bio}</p>` : ''
    user.innerHTML = `
            <div class="card">
                <img src="${data.avatar_url}" alt="${data.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${userID}</h2>
                ${userBio}
                <ul>
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following} <strong>Following</strong></li>
                    <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        `
    document.body.appendChild(user)
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIAddress + '/' + username + '/repos?sort=created')
        addReposToCard(data)
    } catch (err) {
        showErrorMSG('Problem fetching repos')
    }
}


function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

function showErrorMSG(msg) {
    const errorMSG = document.createElement('div')
    errorMSG.classList.add('main')
    errorMSG.innerHTML = `
        <h1>${msg}</h1>
    `
    document.body.appendChild(errorMSG)
}