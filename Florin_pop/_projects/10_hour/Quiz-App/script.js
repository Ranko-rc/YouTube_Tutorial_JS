const quizData = [
    {
        question: "How old i Florin?",
        a: "12",
        b: "17",
        c: "24",
        d: "100",
        correct: "c"
    },{
        question: "What is the most used programing language in 2026?",
        a: "C#",
        b: "JavaScript",
        c: "Kotlin",
        d: "Java",
        correct: "b"
    },{
        question: "Who is he President of US:",
        a: "Donald Trump",
        b: "Elon Musk",
        c: "Ronald Regan",
        d: "Bill Gates",
        correct: "a"
    },{
        question:  "What color is on the flag Czechia?",
        a: "Yellow",
        b: "Grey",
        c: "red",
        d: "white",
        correct: "c"
    }
];


const answersEl = document.querySelectorAll(".answer")
const quizEl = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const atextEl = document.getElementById("a_text")
const btextEl = document.getElementById("b_text")
const ctextEl = document.getElementById("c_text")
const dtextEl = document.getElementById("d_text")
const btnEl = document.getElementById("btn")


let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    atextEl.innerText = currentQuizData.a;
    btextEl.innerText = currentQuizData.b;
    ctextEl.innerText = currentQuizData.c;
    dtextEl.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answersEl.forEach((answerEl) =>{ 
        if(answerEl.checked) {
            answer = answerEl.id;
        } 
    });

    return answer;
}


function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


btnEl.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizEl.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>` ;
            alert("You finish !!!! I hope then you enjoy this Quest");
        }
    }
});
