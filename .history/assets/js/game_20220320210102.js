
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

// highScoreDisplayEl targets the h2 element that displays the high score
var highScoreDisplayEl = document.querySelector('#high-score');

// options is used to target the parent container for the questions/answer
var options = document.querySelector(".options");

// saveScoreForm used to target the form provided at the end of the quiz
var saveScoreForm = document.querySelector('#save-score-form');
var saveButton = document.querySelector('#save-score');
var restartButton = document.querySelector('#restart');
var homeButton = document.querySelector('#return-home');
var button = document.getElementsByTagName("button");

// starting timer, the quiz will last a maximum of this variables value in seconds. 
var timeLeft = 120;

// starting score that is updated after each answer is selected
var score = 0;

/* this variable is used by the generate questions function to know wich object to pull from the array and is updated by the verifyAnsweHandler
do not change this variable */
var questionsObj = 0;

//pulls local storage information and turns it into an array or objects. 
var storedScores = JSON.parse(localStorage.getItem('playerData'));
if (storedScores === null) {
  storedScores = [];
}


// sorts the recently created array from local storage into decending order based on player score value. 
storedScores.sort((a, b) => {
  return b.score - a.score;
})

/* questions array. To change the questions and or answer simply write in the placeholder stings. if you would like to change the strings to assign new property valuse
to se an answer to correct, change its corresponding data value to correct, for incorrect change its corresponding data property to incorrect.
if you would like to increase the number of questions simply copy paste a new object into the array base on one on the following blank template:
if you would like to decrease the number of questions either comment out or remove the unused objects from the array. 

  {
    question: "question1 goes here",
    answer1: "answer1 goes here (currently set to correct(",
    data1: 'correct',
    answer2: "correct answer goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },

  no need to change any other settings as the functions that run the quiz already account for the array.length

*/

const questions = [
  {
    question: "question1 goes here",
    answer1: "answer1 goes here (currently set to correct(",
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
    data1: 'incorrect',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here (currenly set to correct)",
    data3: 'correct',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question3 goes here",
    answer1: "answer1 goes here (currently set to correct)",
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
    data1: 'incorrect',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here (currently set to correct",
    data4: 'correct',
  },
  {
    question: "question5 goes here",
    answer1: "answer1 goes here currently set to correct",
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
    data1: 'incorrect',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here curretly set to correct",
    data4: 'correct',
  },
  {
    question: "question7 goes here",
    answer1: "answer1 goes here",
    data1: 'incorrect',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here currently set to correct",
    data3: 'correct',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question8 goes here",
    answer1: "answer1 goes here",
    data1: 'incorrect',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here currently set to correct",
    data3: 'correct',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  },
  {
    question: "question9 goes here",
    answer1: "answer1 goes here",
    data1: 'incorrect',
    answer2: "answer2 goes here",
    data2: 'incorrect',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here currently set to correct",
    data4: 'correct',
  },
  {
    question: "question10 goes here",
    answer1: "answer1 goes here",
    data1: 'incorrect',
    answer2: "answer2 goes here currently set to correct",
    data2: 'correct',
    answer3: "answer3 goes here",
    data3: 'incorrect',
    answer4: "answer4 goes here",
    data4: 'incorrect',
  }
];

// this variable is used by the verify answer handler, it is in global scopse to allow it to be used by future additions if needed. 
var arrLength = 0
if (questions.length > 0) {
  arrLength = questions.length - 1;
};

// hides restart and home buttons when the page is loaded.
restartButton.setAttribute('style', 'display: none;');
homeButton.setAttribute('style', 'display: none;');

// this is the first function to execute, it hines most of the elements in the HTML that will be displayed after the start button is initialized
function hideElements() {
  option1El.setAttribute('style', 'display: none;');
  option2El.setAttribute('style', 'display: none;');
  option3El.setAttribute('style', 'display: none;');
  option4El.setAttribute('style', 'display: none;');
  scoreEl.setAttribute('style', 'display: none;');
  timerEl.setAttribute('style', 'display: none;');
  saveScoreForm.setAttribute('style', 'display: none;')
}

//as soon as the start button is clicked this is the next function to execute. It displays the elements responsible for the quiz itself
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

//the timer function or countdown function. if the timer runs out before you finish answering the questions the quiz is over,
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

// function to end the quiz
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

// real time score tracker based on the players answers
function scoreTracker() {
  if (score >= 0 && timeLeft > 0) {
    scoreEl.textContent = (`Current Score: ${score}`);
  }
}

// the verify answer handler checks the class attributes of the questions that are loaded from the array. 
function verifyAnswerHandler(event) {
  var targetEl = event.target;
  var targetData = targetEl.getAttribute("class");

  console.log(arrLength);

  if (targetData === 'correct') {
    score = score + 10;
  }

  if (targetData === 'incorrect') {
    timeLeft = timeLeft - 10;
  }

    if (questionsObj < arrLength) {
      questionsObj++
      generateQuestions();
      scoreTracker();
    } else if (questionsObj === arrLength) {
      endQuiz();
    }
}

// this message should only display if the the timer runs out before you reach the ned of the quiz
function displayMessage() {
  questionEl.textContent = (`Times Up! Your score for this round is: ${score}`);
  saveScoreForm.setAttribute('style', 'display: visible;');
}

//this message will only display if you reach the end of the quiz before the timer runs out. 
function displayMessage2() {
  questionEl.textContent = (`You have reached the end of the quiz! your score is: ${score}`);
  saveScoreForm.setAttribute('style', 'display: visible;');
}

function generateQuestions() {
  // generate text content of question by itterating over the text of the buttons using data pulled from the questions array. 
  // each question pull 2 pieces of information, the text string that will be the questin or answer, and the data property assigned to that object to determine if the answer is correct or incorrect. 
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


// save score and playername to local storage, this is not automatic, it will only save if the player clicks the save button. 
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

// function for the restart button to take you back to the start of the quiz via reloading the page.
function restart(event) {
  window.location.reload();
}

// event listeners for the various buttons 
restartButton.addEventListener('click', restart);

saveButton.addEventListener('click', saveScore);

startEl.addEventListener('click', startQuiz);

options.addEventListener('click', verifyAnswerHandler);

hideElements(); 
