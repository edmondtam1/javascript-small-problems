var $message = $("#message"),
  $tree = $("#tree"),
  $letters = $("#spaces"),
  $guesses = $("#guesses"),
  $replay = $("#replay"),
  $apples = $("#apples"),
  $body = $("body"),
  game;

var randomWord = function() {
  var words = ["abacus", "quotient", "octothorpe", "proselytize", "stipend"];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word), 1);
    return word;
  };
}();

function Game() {
  this.word = randomWord();
  this.incorrect = [];
  this.guessLetters = [];
  this.guessLimit = 6;
  if (!this.validWord()) return this;

  this.word = this.word.split("");
  this.init();
}

Game.prototype = {
  validWord: function() {
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return false;
    }
    return true;
  },

  createBlanks: function() {
    if (!this.validWord()) return this;
    var spaces = (new Array(this.word.length + 1)).join("<span></span>");
    $letters.find("span").remove();
    $letters.append(spaces);
    $replay.hide();
    this.$spaces = $("#spaces span");
  },

  displayMessage: function(text) {
    $message.text(text);
    $message.show();
  },

  resetGame: function(e) {
    if (e) {
      e.preventDefault();
    }
    $apples.removeClass().addClass("guess_0");
    $body.removeClass();
    $("#guesses span").remove();
    $message.hide();
    $(document).keypress(keypressHandler);
    this.createBlanks();
  },

  newGame: function(e) {
    if (e) e.preventDefault();
    game = new Game();
    game.resetGame();
  },

  bind: function() {
    this.resetGame = this.resetGame.bind(this);
    this.validWord = this.validWord.bind(this);
  },

  init: function() {
    this.bind();
    this.resetGame();
  }
}

function getIndices(arr, str) {
  var i = 0;
  var result = [];
  while (i < arr.length) {
    if (arr[i] === str) {
      result.push(i);
    }
    i++;
  }
  return result;
}

function endGame(message) {
  game.displayMessage(message);
  $(document).off('keypress');
  $replay.show();
}

function hasValue() {
  return $(this).text().length > 0;
}

function keypressHandler(e) {
  var key = e.key;
  if (key.match(/[a-z]/gi) && !game.guessLetters.includes(key)) {
    game.guessLetters.push(key);
    $guesses.append(`<span>${key}</span>`);
    var indices = getIndices(game.word, key);

    if (indices.length === 0) {
      game.incorrect.push(key);
      $apples.removeClass().addClass(`guess_${game.incorrect.length}`);
      if (game.incorrect.length >= game.guessLimit) {
        $("body").addClass("lose");
        endGame("Sorry! You're out of guesses");
      }
    } else {
      var $spans = $("#spaces span");
      indices.forEach(function(i) {
        $($spans[i]).text(key);
      });
      if ($spans.filter(hasValue).length === $spans.length) {
        $("body").addClass('win');
        endGame("You win!");
      }
    }
  }
}

var game = new Game();
$(document).keypress(keypressHandler);
$replay.click(game.newGame);