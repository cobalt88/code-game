var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start');
var option1El = document.querySelector('#option1');
var option2El = document.querySelector('#option2');
var option3El = document.querySelector('#option3');
var option4El = document.querySelector('#option4');
var questionEl = document.querySelector('#question');
var timeLeft = 40
var score = 0;


function countdown() {

  var timeInterval = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft --;
      timerEl.textContent = timeLeft;
    } else {
      timerEl.textContent = (' ');
      clearInterval(timeInterval);
      displayMessage();
      option1El.setAttribute('style', 'display: none;')
      option2El.setAttribute('style', 'display: none;')
      option3El.setAttribute('style', 'display: none;')
      option4El.setAttribute('style', 'display: none;')
      
    }
  }, 1000);
}


startEl.addEventListener('click', function() {
  startEl.setAttribute('style', 'display: none;');
  countdown();
  quizQuestions();
})

function displayMessage() {
  questionEl.textContent = (`Times Up! Your score for this round is: ${score}`);
}

function displayMessage2 () {
  questionEl.textContent = ("You have reached the end of the quiz! your score is:", + score);
}

function quizQuestions() {
question1();
question2();
}


function question1() {
  questionEl.textContent = ('Question 1');
  option1El.textContent = ('answer option 1');
  option2El.textContent = ('answer option 2');
  option3El.textContent = ('answer option 3');
  option4El.textContent = ('answer option 4');

  if (document.querySelector('#option1').clicked) {
    option1El = true;
  }

  if (document.querySelector('#option2').clicked) {
    option2El = true;
  }

  if (document.querySelector('#option3').clicked) {
    option3El = true;
  }

  if (document.querySelector('#option4').clicked) {
    option4El = true;
  }

  if (option1El) {
    score = score + 1;
  } else if (option2El || option3El || option4El) {
    score = score - 10;
  }

}

function question2() {
  questionEl.textContent = ('Question 1');
  option1El.textContent = ('answer option 1');
  option2El.textContent = ('answer option 2');
  option3El.textContent = ('answer option 3');
  option4El.textContent = ('answer option 4');

  if (document.querySelector('#option1').clicked) {
    option1El = true;
  }

  if (document.querySelector('#option2').clicked) {
    option2El = true;
  }

  if (document.querySelector('#option3').clicked) {
    option3El = true;
  }

  if (document.querySelector('#option4').clicked) {
    option4El = true;
  }

  if (option1El) {
    score = score + 1;
  } else if (option2El || option3El || option4El) {
    score = score - 10;
  }

}

