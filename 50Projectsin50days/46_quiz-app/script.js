const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]
// 记录分数
let score = 0
let main = document.querySelector('.main')
let title = document.querySelector('.title')
let questionList = document.querySelector('.questionList')
let labels = document.querySelectorAll('.questionList li label')
let lists = document.querySelectorAll('.questionList li .answer')
let submit = document.querySelector('#submit')
let i = 0
loadQuiz()
function loadQuiz() {
    getQuestion(i)
    submit.addEventListener('click', clickEvent)
}
// 提交按钮回调
function clickEvent() {
    if (submit.innerText === 'Submit') {
        // 记录当前题是否勾选
        let isTure = false
        lists.forEach(ele => {
            if (ele.checked) {
                if (ele.id === quizData[i].correct) {
                    // 答对之后分数加一
                    score++
                }
                ele.checked = false
                isTure = true
            }
        })
        if (i === 3 && isTure === true) {
            title.innerText = `You answered ${score}/4 questions correctly`
            // main.removeChild(questionList)
            questionList.style.display = 'none';
            submit.innerText = 'Reload'
        } else if (isTure === true) {
            getQuestion(++i)
        }
    } else {
        questionList.style.display = 'block';
        score = 0
        i = 0
        submit.innerText = 'Submit'
        getQuestion(i)
    }
}
// 获取问题
function getQuestion(i) {
    title.innerText = quizData[i].question
    labels[0].innerText = quizData[i].a
    labels[1].innerText = quizData[i].b
    labels[2].innerText = quizData[i].c
    labels[3].innerText = quizData[i].d
}