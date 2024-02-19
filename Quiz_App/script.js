"use strict";
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for the element Oxygen?",
        answers: [
            { text: "O", correct: true },
            { text: "O2", correct: false },
            { text: "O3", correct: false },
            { text: "Om", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById('nextButton');
const questionNum = document.getElementById("question-counter");


let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    // nextButton.innerHTML = "Next";
    currentQuestionIndex = 0;
    score = 0;
    
    showQuestion();
    resetBtn.style.display = "none";
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    questionNum.innerHTML = questionNo + " of 5 questions";
    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "answer";
        radioBtn.value = answer.text;
        radioBtn.dataset.correct = answer.correct.toString();
        radioBtn.addEventListener("change", selectAns);
        label.appendChild(radioBtn);
        label.appendChild(document.createTextNode(answer.text));
        answerButtons.appendChild(label);
        
    });
    
}
let currentq=[];
let isCorrect;
let selectedBtn;
let selectedAnswerValue;
let iCorrect;
const resetBtn = document.getElementById('resetButton');
function selectAns(e){
    resetBtn.style.display = "block";
    Array.from(answerButtons.children).forEach(label => {
        const radioBtn = label.firstChild;
        radioBtn.disabled = true;

   
    });
}
function selectAnswer(e) {
     selectedBtn = e.target;
     selectedAnswerValue = selectedBtn.value;
    isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.parentNode.classList.add("correct");
        score++;
    } else {
        selectedBtn.parentNode.classList.add("incorrect");
        currentq.push(currentQuestionIndex);
    }
      
    // Remove the event listener from all radio buttons to prevent multiple triggers
    // Array.from(answerButtons.querySelectorAll('input[type="radio"]')).forEach(radioBtn => {
    //     radioBtn.removeEventListener("change", selectAnswer);
    // });
     
    // // Disable all other radio buttons once an answer is selected
    // Array.from(answerButtons.children).forEach(label => {
    //     const radioBtn = label.firstChild;
    //     radioBtn.disabled = true;

    // });

    // // Set resetBtn.style.display to true when a radio button is selected
    // resetBtn.style.display = "block";
}
 
document.getElementById('resetButton').addEventListener('click', function() {
    // Clear the selected answer by unchecking all radio buttons
    // var answerInputs = document.getElementsByName('answer');
    // for (var i = 0; i < answerInputs.length; i++) {
    //     answerInputs[i].checked = false;
    //     answerInputs[i].disabled = false; // Enable all radio buttons
   
        
    // }
    // rstState()
    //  Clear the isCorrect value
    // isCorrect = undefined;
     
    resetState()
    showQuestion();
    // Hide the reset button again
    resetBtn.style.display = "none";
    // iCorrect = selectedAnswerValue.dataset.correct === "true";
    // if(iCorrect){
    //     score--;
    // }
});
// function rstState() {
//     nextButton.style.display = "block";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//         score=0;
//     }
    
// }
 
function resetState() {
    // nextButton.style.display = "block";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}
let time = 60; // Set initial time to 1 minute (60 seconds)
const timerElement = document.getElementById('time');
// const nextButton = document.getElementById('nextButton');


const timerInterval = setInterval(() => {
    time--;
    if (time >= 0) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        // nextButton.style.display = "block";
    }
    if (time === 0) {
        showScore();
        clearInterval(timerInterval); // Stop the timer
         // Disable the "Next" button
        
         

    }
}, 1000);
function showScore() {
    resetState();
    clearInterval(timerInterval); // Stop the timer when reset button is clicked
    time = 20; // Reset the timer to 20 seconds
    timerElement.textContent = "0:00";
    resetBtn.style.display = "none";
    
    
    
 
    
  

    // Update the user's score and total questions
    document.getElementById('userScore').textContent = score;
    document.getElementById('totalQuestions').textContent = questions.length;

    // Update the incorrect answers list
    const incorrectAnswersList = document.getElementById('incorrectAnswersList');
    incorrectAnswersList.innerHTML = '';
    questionElement.innerHTML ='';

    if (currentq.length >= 0) {
        for (let i = 0; i < currentq.length; i++) {
            const currentQuestion = questions[currentq[i]];
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${i + 1}.</strong> ${currentQuestion.question}`;
            currentQuestion.answers.forEach(answer => {
                if (answer.correct) {
                    listItem.innerHTML += `<br> - ${answer.text}`;
                }
            });
            incorrectAnswersList.appendChild(listItem);
        }
    }

    // Hide the next button
    nextButton.style.display = 'none';
    
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
    resetState();
}
 
function handleNextButton() {
    // Check if any radio button is checked to determine whether to move to the next question
    const anyAnswerSelected = Array.from(document.querySelectorAll('input[name="answer"]')).some(input => input.checked);

    if (!anyAnswerSelected) {
        // Display an error message or take any other appropriate action
        alert("Please select an answer before moving to the next question.");
        return;
    }

    selectAnswer({ target: document.querySelector('input[name="answer"]:checked') });

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
    resetBtn.style.display = "none";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});
startQuiz();
