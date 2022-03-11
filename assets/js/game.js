var timerEl = document.getElementById('timer')






function countdown(); {
  var timeLeft = 120;

  var timeInterval = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft --;
      timerEl.textContent = timeLeft;
    } else {
      timerEl.textContent = (' ');
      clearInterval
    }
  }, 1000);
}