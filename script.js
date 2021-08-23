'use strict';

const secretNumber =Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', (e) => {
  e.preventDefault();
  const guessValue = Number(document.querySelector('.guess').value);

  if (!guessValue){
    displayMessage("No Value! ⚠")
  } else if (guessValue === secretNumber) {
    displayMessage("Correct Number");

    document.querySelector('.number').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none'

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1){
      displayMessage(guessValue > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("You lost the game! 😥")
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.score').textContent = score;
  displayMessage("Start guessing...")
  document.querySelector('.number').textContent = "?";
  document.querySelector('.check').style.display = 'block'
  document.querySelector('.number').style.width = '15rem';
});
