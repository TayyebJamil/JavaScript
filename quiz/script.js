const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Rome", "Berlin"],
    correctAnswer: 1
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Jupiter", "Mars", "Venus", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  for (let i = 0; i < q.choices.length; i++) {
    const choice = document.createElement("button");
    choice.textContent = q.choices[i];
    choice.className = "choice";
    choice.onclick = function() { checkAnswer(this) };
    choices.appendChild(choice);
  }
  document.getElementById("current-question").textContent = currentQuestion + 1;
}

function checkAnswer(btn) {
  const selectedAnswer = btn.textContent;
  const correctIndex = questions[currentQuestion].correctAnswer;
  if (selectedAnswer === questions[currentQuestion].choices[correctIndex]) {
    score++;
  }
  const choices = document.getElementsByClassName("choice");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }
  document.getElementById("next").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    document.getElementById("next").style.display = "none";
    const choices = document.getElementsByClassName("choice");
    for (let i = 0; i < choices.length; i++) {
      choices[i].disabled = false;
    }
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").textContent = "Quiz completed! Your score is " + score + " out of " + questions.length;
  document.getElementById("choices").innerHTML = "";
  document.getElementById("next").style.display = "none";
}

// Check the timestamp and load the appropriate question
function loadQuestionByTimestamp() {
  const timestamp = new Date().getTime(); // Get current timestamp
  const questionIndex = timestamp % questions.length; // Use modulo to select question
  currentQuestion = questionIndex;
  loadQuestion();
}

loadQuestionByTimestamp();
