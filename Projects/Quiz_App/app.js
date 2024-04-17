"use strict";

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const questionNum = document.getElementById("question-counter");

// Variables for tracking quiz state
let currentQuestionIndex = 0;
let score = 0;
let questions = []; // Array to store fetched questions

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    fetchTriviaQuestions(); // Fetch questions from OTDB API
    resetBtn.style.display = "none";
}

// Function to fetch questions from OTDB API
async function fetchTriviaQuestions() {
    try {
        const response = await fetch(
            "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
        );
        const data = await response.json();
        if (data.response_code === 0) {
            questions = data.results.map((result) => {
                return {
                    question: result.question,
                    correct_answer: result.correct_answer,
                    incorrect_answers: result.incorrect_answers
                };
            });
            showQuestion();
        } else {
            console.error("Failed to fetch questions from OTDB API.");
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

// Function to display a question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    questionNum.innerHTML = questionNo + " of " + questions.length + " questions";

    const allAnswers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
    
    // Shuffle the answers to display them in a random order
    const shuffledAnswers = shuffleArray(allAnswers);

    shuffledAnswers.forEach((answer) => {
        const label = document.createElement("label");
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "answer";
        radioBtn.value = answer;
        radioBtn.dataset.correct = answer === currentQuestion.correct_answer;
        radioBtn.addEventListener("change", selectAns);
        label.appendChild(radioBtn);
        label.appendChild(document.createTextNode(answer));
        answerButtons.appendChild(label);
    });
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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

// Event handler for selecting an answer
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
 
}
 
// Event handler for resetting the state
document.getElementById('resetButton').addEventListener('click', function() {    
    resetState()
    showQuestion();
    resetBtn.style.display = "none";
   
});

// Function to reset the state
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}

// Timer related variables
let time = 600; // Set initial time to 1 minute (60 seconds)
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
    // Reset state and clear timer
    resetState();
    clearInterval(timerInterval); // Stop the timer when the reset button is clicked
    time = 20; // Reset the timer to 20 seconds
    timerElement.textContent = "0:00";
    resetBtn.style.display = "none";

    // Update the user's score and total questions
    document.getElementById('userScore').textContent = score;
    document.getElementById('totalQuestions').textContent = questions.length;

    // Update the incorrect answers list
    const incorrectAnswersList = document.getElementById('incorrectAnswersList');
    incorrectAnswersList.innerHTML = 'Your <strong>incorrect answers</strong> are:';
    questionElement.innerHTML ='';
    
    if (currentq.length > 0) {
        for (let i = 0; i < currentq.length; i++) {
            const currentQuestion = questions[currentq[i]];
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${i + 1}.</strong> ${currentQuestion.question}`;
            listItem.innerHTML += `<br> - <span style="color: green;">${currentQuestion.correct_answer}</span>`;

            // listItem.innerHTML += `<br> - ${currentQuestion.incorrect_answers}`;

            incorrectAnswersList.appendChild(listItem);
        }
    }

    // Hide the next button
    nextButton.style.display = 'none';
    nextButton.textContent = 'Play Again';

    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
    resetState();
}
 
// Function to handle the next button click
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
function goToHome() {
    // You can customize this based on your home page URL or any other logic
    window.location.href = '/index.html'; // Replace with your home page URL
}