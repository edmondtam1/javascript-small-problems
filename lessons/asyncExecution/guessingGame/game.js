document.addEventListener('DOMContentLoaded', function() {
  var answer;
  var guesses;
  var input = document.querySelector("#guess");
  var form = document.querySelector("form");
  var link = document.querySelector('a');
  var paragraph = document.querySelector('p');
  var button = document.querySelector('input[type="submit"]');

  function newGame() {
    button.disabled = false;
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
  }

  function validGuess(str) {
    return Number(str) > 0 && Number(str) <= 100;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var guess;
    var message;
    if (validGuess(input.value)) {
      guess = Number(input.value);
    } else {
      message = "Please enter a valid number from 1 to 100";
      paragraph.textContent = message;
      return;
    }

    guesses++;
    if (guess > answer) {
      message = `The answer is lower than your guess of ${guess}`;
    } else if (guess < answer) {
      message = `The answer is higher than your guess of ${guess}`;
    } else if (guess === answer) {
      button.disabled = true;
      message = `Your guess is absolutely correct! It took you ${guesses} guesses`;
    } else {
      message = `You've input an invalid guess of ${guess}`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', function(e) {
    e.preventDefault();
    newGame();
  });

  newGame();
});