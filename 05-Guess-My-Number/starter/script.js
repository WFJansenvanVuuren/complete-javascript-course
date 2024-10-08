'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

//An Event is something that happens on a webpage (mouse click, mouse moving , key press, etc.)
// With an .addEventListener we can wait for a certain event to happened and then react to it.
// We use an event listener to attach an event handeler(function)
// With .addEventListener we do not call the function, Javascript will call the function when the event happens.

//                                                            👇event handeler
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number';
    displayMessage(' 🚫 No Number ');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayNumber(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;
    displayBackground('#60b347');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    displayWidth('30rem');
    // document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // console.log(highscore);

    //When guess is too high
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? '👆 Too High!' : '👇 Too Low!');
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '👆 Too High!' : '👇 Too Low!';
    score--;
    displayScore(score);
    // document.querySelector('.score').textContent = score;
  } else {
    displayMessage('🏳️ You lose!');
    // document.querySelector('.message').textContent = '🏳️ You lose!';
  }
});

//When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '👇 Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '🏳️ You lose!';
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayNumber('?');
  // document.querySelector('.number').textContent = '?';
  displayBackground('#222');
  displayWidth('15rem');
  // document.querySelector('.number').style.width = '15rem';
  displayScore(score);
  // document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
