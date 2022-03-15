var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start');
var option1El = document.querySelector('#option1');
var option2El = document.querySelector('#option2');
var option3El = document.querySelector('#option3');
var option4El = document.querySelector('#option4');
var questionEl = document.querySelector('#question');
var answers = document.querySelector(".answers")
// let options = document.querySelector([])
var timeLeft = 40
var score = 0;
questionsObj = 0;
const questions = [

  {
    question: "question1 goes here",
    answer1: "answer1 goes here",
    answer2: "correct answer goes here",
    answer3: "answer3 goes here",
    answer4: "answer4 goes here",
    correctAnswer: option1El,
  }, 
  {
    question: "question2 goes here",
    answer1: "answer1 goes here",
    answer2: "answer2 goes here",
    answer3: "answer3 goes here",
    answer4: "answer4 goes here",
    correctAnswer: option2El,
  },
  {
    question: "question3 goes here",
    answer1: "answer1 goes here",
    answer2: "answer2 goes here",
    answer3: "answer3 goes here",
    answer4: "answer4 goes here",
    correctAnswer: option3El
  },
  {
    question: "question4 goes here",
    answer1: "answer1 goes here",
    answer2: "answer2 goes here",
    answer3: "answer3 goes here",
    answer4: "answer4 goes here",
    correctAnswer: option4El
  }
]



function countdown() {

  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
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


startEl.addEventListener('click', function () {
  startEl.setAttribute('style', 'display: none;');
  // displayQuestions();
  countdown();
  generateQuestions();
  
})

// function displayQuestions() {
//   option1El.setAttribute('style', 'display: ;')
//   option2El.setAttribute('style', 'display: none;')
//   option3El.setAttribute('style', 'display: none;')
//   option4El.setAttribute('style', 'display: none;')
// }

function displayMessage() {
  questionEl.textContent = (`Times Up! Your score for this round is: ${score}`);
}

function displayMessage2() {
  questionEl.textContent = ("You have reached the end of the quiz! your score is:", + score);
}


function generateQuestions() {
  // generate text content of question
    questionEl.textContent = questions[questionsObj].question;
    option1El.textContent = questions[questionsObj].answer1;
    option2El.textContent = questions[questionsObj].answer2;
    option3El.textContent = questions[questionsObj].answer3;
    option4El.textContent = questions[questionsObj].answer4;

  
    var solution = questions[questionsObj].correctAnswer;
    


    answers.addEventListener("click", function checkAnswer() {
      if (EventTarget === solution) {
        score = score + 10;
        questionsObj++;
      } else { 
        score = score - 10;
        timeLeft = timeLeft - 10;
        questionsObj++;
      }

      console.log(score)
      })

    // var correctAnswer = questions[0].solution;

    // correctAnswer.addEventListener("click", solution)

    // var inCorrectAnswer = questions[0].solution;

    // inCorrectAnswer.addEventListener("click", solution);

}

// var correctAnswer = questions[0].solution;

//     correctAnswer.addEventListener("click", solution);



// function checkAnswer () {
//   if 
// }
// function solution(){
//   score = score + 10;
//   questionsObj = questionsObj + 1;
// }



// function question1() {
//   questionEl.textContent = ('Question 1');
//   option1El.textContent = ('answer option 1');
//   option2El.textContent = ('answer option 2');
//   option3El.textContent = ('answer option 3');
//   option4El.textContent = ('answer option 4');


//   const button = document.querySelectorAll("button");

//     button.addEventListener("click", function(){
//       console.log("This works!")
//       console.log(this)
//     })


// option1El.addEventListener('click', function() {
//   score = score + 1;
//   console.log(this);

// });

// if (option1El) {
//   score = score + 1;
// } else {
//   score = score - 10;
// }



// function question2() {
//   questionEl.textContent = ('Question 1');
//   option1El.textContent = ('answer option 1');
//   option2El.textContent = ('answer option 2');
//   option3El.textContent = ('answer option 3');
//   option4El.textContent = ('answer option 4');

//   if (document.querySelector('#option1').clicked) {
//     option1El = true;
//   }

//   if (document.querySelector('#option2').clicked) {
//     option2El = true;
//   }

//   if (document.querySelector('#option3').clicked) {
//     option3El = true;
//   }

//   if (document.querySelector('#option4').clicked) {
//     option4El = true;
//   }

//   if (option1El) {
//     score = score + 1;
//   } else if (option2El || option3El || option4El) {
//     score = score - 10;
//   }

// }

