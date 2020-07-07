var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var questionEl = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)


function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = question.sort(() => Math.random() -.5)
  currentQuestionIndex = 0
  questionContainer.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
}

function selectAnswer() {

}

var question = [
  {
    question: 'What does DOM stand for?',
    answer: [
      { text: 'Document Object Model', correct: true },
      { text: 'Dividing Object Model', correct: false },
      { text: 'Display Object Model', correct: false },
      { text: 'Driving Object Model', correct: false }
    ]
  }
];
