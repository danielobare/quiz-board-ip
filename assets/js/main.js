'use strict';

const quizData =
    [
        {
            question: "What is the short form of Hyper Text Markup Language?",
            a: "HMLT",
            b: "HTML",
            c: "MLHT",
            correct: 'b'
        },
        {
            question: "What is the other name for Javascript?",
            a: "Java Source",
            b: "ECMAscript",
            c: "I don't know",
            d: "JS",
            correct: 'd'
        },
        {
            question: "Is C++ a low-level programming language?",
            a: "Yes",
            b: "No",
            correct: 'b'
        },
    ];
const alphabets = ['a', 'b', 'c'];
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('label');
const submitBtn = document.getElementById('submit');
const answers = document.querySelectorAll('input'); 
const container = document.querySelector('.container');

let currentQuiz = 0;
let score = 0;
let answer;
let answerHasBeenSelected = false;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionElement.textContent = currentQuizData.question;

    options.forEach(function (option, index) {
        let optionNumber = alphabets[index];
        option.innerText = currentQuizData[optionNumber];
    });
}
function replay() {
    location.reload();
}
function validateResponse() {
    for (answer of answers) {
        if (answer.checked) {
            let answerValue = answer.id;
            if (answerValue === quizData[currentQuiz].correct) {
                score++;
            }
            answerHasBeenSelected = true;
            break;
        }
        else {
            answerHasBeenSelected = false;
        }
    }
}
submitBtn.addEventListener('click', function () {
    validateResponse();
    if (!answerHasBeenSelected)
    {
        alert("Choose an option!");
    }
    else
    {
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            container.innerHTML = `<h1 id = "scoreText"> Your Score: ${score}/${quizData.length} </h1>
                                    <meter min = "0" max = "100" value = "${(score * 100) / quizData.length}"></meter>
                                    <button type = "button" id = "replay" onclick = "replay()">Replay</button>`;
        }
    }
});