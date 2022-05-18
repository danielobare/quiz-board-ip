'use strict';
const quizData =
    [
        {
            question: "What is the short form of Hyper Text Markup Language?",
            a: "HMLT",
            b: "HTML",
            c: "MLHT",
            d: "EcHTEMEL",
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
            c: "I don't know",
            d: "both",
            correct: 'a'
        },
        {
            question: "Why do you need to learn coding?",
            a: "To learn how to think",
            b: "To pass my exams",
            c: "I don't know",
            d: "Earn a high salary",
            correct: 'a'
        },
        {
            question: "When was abacus first invented?",
            a: "1959",
            b: "1436",
            c: "Between 300 to 500 BC",
            d: "1753",
            correct: 'c'
        },
        {
            question: "Who is the CEO of MPesa?",
            a: "Peter Ndegwa",
            b: "Michael Joseph",
            c: "Lopokoiyit Sitoyo",
            d: "Sylvia Mulinge",
            correct: 'c'
        },
        {
            question: "In which year and country in Africa, was Amazon Web Services set up?",
            a: "2019, South Africa",
            b: "2021, Kenya",
            c: "2022, Kenya",
            d: "2019, Kenya",
            correct: 'c'
        }
    ];
const alphabets = ['a', 'b', 'c', 'd'];
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
                                    <button type = "button" id = "replay" onclick = "replay()">Redo quiz</button>`;
        }
    }
});
