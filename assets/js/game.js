
//timeDisplayEl is the actual countdown
var timeDisplayEl = document.querySelector('#time');
//timeEl is the header element that contains the countdown
var timerEl = document.querySelector('#timer');
//scoreDisplayEl is where the score  variable is displayed
var scoreDisplayEl = document.querySelector('#score');
//scoreEl is the header that contains the score display
var scoreEl = document.querySelector('#scoreTracker');
// start button to begin the quiz
var startEl = document.querySelector('#start');
// optionEl 1-4, and questionEl are for the questions and their answers
var option1El = document.querySelector('#option1');
var option2El = document.querySelector('#option2');
var option3El = document.querySelector('#option3');
var option4El = document.querySelector('#option4');
var questionEl = document.querySelector('#question');
// answers variable is currently not in use, may be used to target optionsEl 1-4 if needed.
var answers = document.querySelector(".answers");
// highScoreDisplayEl targets the h2 element that displays the high scrore
var highScoreDisplayEl = document.querySelector('#high-score');
// options is used to target the parent container for the questions/answer
var options = document.querySelector(".options");
// saveScoreForm used to target the form provided at the end of the quiz
var saveScoreForm = document.querySelector('#save-score-form');
var saveButton = document.querySelector('#save-score');
var restartButton = document.querySelector('#restart');
var homeButton = document.querySelector('#return-home');
var button = document.getElementsByTagName("button");
var timeLeft = 40;
var score = 0;
var questionsObj = 0;
var storedScores = JSON.parse(localStorage.getItem('playerData')); 
if (storedScores === null) {
  storedScores = [];
}
var highScore = Math.max(...storedScores.map((o) => o.score), 0);
  
// console.log(highScore)
const questions = [

  {
    question: "question1 goes here",  
    answer1: "answer1 goes here", 
    data1: 'correct',
    answer2: "correct answer goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  }, 
  {
    question: "question2 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question3 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question4 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  }, 
  {
    question: "question5 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question6 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question7 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question8 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question9 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question10 goes here",
    answer1: "answer1 goes here",
    data1: 'correct',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  }
];

function hideElements() {
  option1El.setAttribute('style', 'display: none;');
  option2El.setAttribute('style', 'display: none;');
  option3El.setAttribute('style', 'display: none;');
  option4El.setAttribute('style', 'display: none;');
  scoreEl.setAttribute('style', 'display: none;');
  timerEl.setAttribute('style', 'display: none;');
  saveScoreForm.setAttribute('style', 'display: none;')
  highScoreDisplayEl.textContent = (`High Score ${highScore}`);
  restartButton.setAttribute('style', 'display: none;');
}

function startQuiz() {
  startEl.setAttribute('style', 'display: none;');
  option1El.setAttribute('style', 'display: visible;');
  option2El.setAttribute('style', 'display: visible;');
  option3El.setAttribute('style', 'display: visible;');
  option4El.setAttribute('style', 'display: visible;');
  scoreEl.setAttribute('style', 'display: visible;');
  timerEl.setAttribute('style', 'display: visible;');
  restartButton.setAttribute('style', 'display: visible;');
  homeButton.setAttribute('style', 'display: visible;');

  
  scoreTracker();
  generateQuestions();
  countdown();
  
  
}

// function loadScores(){

// }

function countdown() {

  var timeInterval = setInterval(function () {
        timeDisplayEl.textContent = timeLeft;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeDisplayEl.textContent = (' ');
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  hideElements();

  if (timeLeft <= 0) {
    displayMessage();
  }

  if (timeLeft >= 0) {
  timeLeft = 0;
  option1El.setAttribute('style', 'display: none;');
  option2El.setAttribute('style', 'display: none;');
  option3El.setAttribute('style', 'display: none;');
  option4El.setAttribute('style', 'display: none;');
  timerEl.setAttribute('style', 'display: none;');
  scoreEl.setAttribute('style', 'display: none;');
  questionEl.textContent = (' ')
  displayMessage2();
  } 
}


function scoreTracker() {
  if (score >= 0 && timeLeft > 0) {
    scoreEl.textContent = (`Current Score: ${score}`);
}}

function verifyAnswerHandler(event){
  var targetEl = event.target;
  var targetData = targetEl.getAttribute("class");

  if (targetData === 'correct' ) {
    score = score + 10;
      if (questionsObj < 9) {
        questionsObj++;
        generateQuestions();
        scoreTracker();
      } 
  }
  
  if (targetData === 'incorrect') {
    timeLeft = timeLeft - 10;
      if (questionsObj < 9) {
        questionsObj++;
        generateQuestions();
        scoreTracker();
      } 
  }
  
  if (questionsObj >= 9) {
    endQuiz();
  }
} 

function displayMessage() {
  questionEl.textContent = (`Times Up! Your score for this round is: ${score}`);
  saveScoreForm.setAttribute('style', 'display: visible;');
  // restartButton.setAttribute('style', 'display: visible;');
}

function displayMessage2() {
  questionEl.textContent = (`You have reached the end of the quiz! your score is: ${score}`);
  saveScoreForm.setAttribute('style', 'display: visible;');
  // restartButton.setAttribute('style', 'display: visible;');
}


function generateQuestions() {
  // generate text content of question
  if (timeLeft >= 1) {
    questionEl.textContent = questions[questionsObj].question;
    
    option1El.textContent = questions[questionsObj].answer1;
    option1El.setAttribute('class', questions[questionsObj].data1);

    option2El.textContent = questions[questionsObj].answer2;
    option2El.setAttribute('class', questions[questionsObj].data2);

    option3El.textContent = questions[questionsObj].answer3;
    option3El.setAttribute('class', questions[questionsObj].data3);

    option4El.textContent = questions[questionsObj].answer4;
    option4El.setAttribute('class', questions[questionsObj].data4);
  }
}



function saveScore(event) {

  var playerName = document.querySelector("#player-input").value;


  var playerData = {
    player: playerName,
    score: score,
  };

  localStorage.setItem('playerData', JSON.stringify([playerData]));

  storedScores.push(playerData);
  
  localStorage.setItem('playerData', JSON.stringify(storedScores))
} 

function restart(event) {
  window.location.reload();
}


restartButton.addEventListener('click', restart);

saveButton.addEventListener('click', saveScore);

startEl.addEventListener('click', startQuiz);

options.addEventListener('click', verifyAnswerHandler);

hideElements(); 
