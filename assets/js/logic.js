const firstEl = document.querySelector('#first');
const secondEl = document.querySelector('#second');
const thirdEl = document.querySelector('#third');
const fourthEl = document.querySelector('#fourth');
const fifthEl = document.querySelector('#fifth');

//load the stringified array from local storage and parse it back into an unstringified array.
var storedScores = JSON.parse(localStorage.getItem('playerData')); 
if (storedScores === null) {
  storedScores = [];
}

//  sort the storedScores array in decending order according the value of the score property,
storedScores.sort((a,b) => {
    return b.score - a.score;
  })

  // leaderboard
firstEl.textContent = (`Player: ${storedScores[0].player}, Score: ${storedScores[0].score} points`)
secondEl.textContent = (`Player: ${storedScores[1].player}, Score: ${storedScores[1].score} points`)
thirdEl.textContent = (`Player: ${storedScores[2].player}, Score: ${storedScores[2].score} points`)
fourthEl.textContent = (`Player: ${storedScores[3].player}, Score: ${storedScores[3].score} points`)
fifthEl.textContent = (`Player: ${storedScores[4].player}, Score: ${storedScores[4].score} points`)