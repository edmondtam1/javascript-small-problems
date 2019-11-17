function reverseSentence(str) {
  var words = str.split(' ');
  return words.reverse().join(' ');
}

console.log(
  reverseSentence(''), // ""
  reverseSentence('Hello World'), // "World Hello"
  reverseSentence('Reverse these words'), // "words these Reverse"
)