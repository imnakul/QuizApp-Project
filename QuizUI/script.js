const quizData = [
    { question: "Q1) When was the first known use of the word 'quiz'?",
        a:"1781", b:"1771", c:"1871", d:"1881" , correct:"b" } ,
    {
        question: "Q2) Which built-in function can get information from the user?",
        a:"input", b:"get", c:"print", d:"write", correct:"c"  } ,
    {
        question: "Q3) Which keyword do you use to loop over a given list of elements?",
        a:"for", b:"while", c:"each", d:"loop", correct:"a"  } ,
    {
        question: "Q4) What's the purpose of the built-in zip() function?" ,
        a:"To iterate over two or more sequences at the same time",
        b: "To combine several strings into one",
        c: "To compress several files into one archive",
        d: "To get information from the user", correct:"d"  }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question; // try putting innerHTML , innerText and textContent

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer  = getSelected()
     if(answer){
         if( answer === quizData[currentQuiz].correct) {
             score++;
         }
         currentQuiz++;
         if(currentQuiz < quizData.length) {
             loadQuiz()
         }
         else {
             quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>
                 <button onclick="location.reload()">Reload</button>`;
         }
     }
} )