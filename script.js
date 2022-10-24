'use strict';

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const secretNumberBox = document.querySelector('.number');
const resetBtn = document.querySelector('.again');
const inputVal = document.querySelector('.guess');
const highscoreLabel = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let playing = true;

checkBtn.addEventListener('click', function () {
  const guess = Number(inputVal.value);

  if (!guess) {
    //when there is no input
    message.textContent = 'No Guess';
  } else if (guess === secretNumber) {
    //if score is secretNumber
    message.textContent = 'Correct Score';
    secretNumberBox.textContent = secretNumber;
    secretNumberBox.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    playing = false;

    if (score > highscore && playing) {
      //when guess is correct and score
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
  } else if (guess !== secretNumber && playing) {
    //if score is not secretNumber
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      scoreLabel.textContent = score;
    } else {
      score = 0;
      scoreLabel.textContent = score;
      message.textContent = 'Try again!';
    }
  }
});

resetBtn.addEventListener('click', function () {
  playing = true;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumberBox.textContent = '?';
  inputVal.value = '';
  message.textContent = 'Start guessing...';
  scoreLabel.textContent = score;
  secretNumberBox.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
