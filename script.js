var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var questionEl = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var ans1Button = document.getElementById("ans1");
var ans2Button = document.getElementById("ans2");
var ans3Button = document.getElementById("ans3");
var ans4Button = document.getElementById("ans4");
let shuffledQuestions, currentQuestionIndex, currentAnswer;
startButton.addEventListener("click", startGame)
ans1Button.addEventListener("click", selectAnswer)
ans2Button.addEventListener("click", selectAnswer)
ans3Button.addEventListener("click", selectAnswer)
ans4Button.addEventListener("click", selectAnswer)

var count = 30;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);

function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() -.5)
  currentQuestionIndex = 0
  questionContainer.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  var next_question = shuffledQuestions[currentQuestionIndex];
  showQuestion(next_question);
  setNextAnswers(next_question);
  currentQuestionIndex++;
}

function setNextAnswers(question) {
  ans1Button.innerText = question.answer[0].text;
  ans2Button.innerText = question.answer[1].text;
  ans3Button.innerText = question.answer[2].text;
  ans4Button.innerText = question.answer[3].text;
  currentAnswer = question.correctAnswer;
}
function showQuestion(question) {
  questionEl.innerText = question.question
}

function selectAnswer() {
  if (this.innerText == currentAnswer) {
    alert("Correct!");
    setNextQuestion()
  }
  else {
    alert("Try again :(");
  }

}

var questions = [
  {
    question: 'What does DOM stand for?',
    answer: [
      { text: 'Document Object Model' },
      { text: 'Dividing Object Model' },
      { text: 'Display Object Model' },
      { text: 'Driving Object Model' }
    ],
    correctAnswer: 'Document Object Model'
  },
  {
    question: 'What is a loop used for?',
    answer: [
      { text: 'Looping through a sequence' },
      { text: 'Changing background color' },
      { text: 'Adding a link to your html' },
      { text: 'Creating a webpage' }
    ],
    correctAnswer: 'Looping through a sequence'
  },
  {
    question: 'What does HTML stand for?',
    answer: [
      { text: 'Hello There My Love' },
      { text: 'Howard Technical Military Library' },
      { text: 'HyperText Markup Language' },
      { text: 'Halloween Time Marks Lunacy' }
    ],
    correctAnswer: 'HyperText Markup Language'
  },
  {
    question: 'The condition in an if / else statement is enclosed within __.',
    answer: [
      { text: 'Quotes' },
      { text: 'Curly Brackets' },
      { text: 'Parentheses' },
      { text: 'Square Brackets' }
    ],
    correctAnswer: 'Parentheses'
  },
];