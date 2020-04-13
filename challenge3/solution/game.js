'use strict';

// Variables
let myNumber;
let count;

// HTML Elements
let helpDiv;
let fromInput;
let toInput;
let guessInput;

function load() {
  helpDiv = document.getElementById('help');
  fromInput = document.getElementById('game').from;
  toInput = document.getElementById('game').to;
  guessInput = document.getElementById('game').myGuess;

  window.defaultStatus = "JavaScript Guess-a-Number Game";
  helpDiv.innerHTML = "Please set range of numbers and press the Start button.";
  fromInput.focus();
}

function round(scale) {
  const dd = new Date();
  return ((Math.round(Math.abs(Math.sin(dd.getTime())) * 8.71 * scale) % scale));
}

function range() {
  const to = 1 + 1 * toInput.value;
  count = 0;
  myNumber = round(to);

  while (myNumber < fromInput.value) {
    myNumber = round(to);
  }
  helpDiv.innerText = "Please guess a number, enter it, and press Guess.";
}

function guess() {
  const myGuess = guessInput.value;
  if (myGuess === '') {
    helpDiv.innerText = "Please guess a number, enter it, and press Guess.";
    return;
  }

  count++;

  if (myGuess < myNumber) {
    helpDiv.innerText = 'My number is greater than ' + myGuess + '.';
  } else if (myGuess > myNumber) {
    helpDiv.innerText = 'My number is less than ' + myGuess + '.';
  } else {
    alert('It took you ' + count + ' attempts to guess this number');
  }
}
