function wordToDigit(string) {
  var numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var regex = new RegExp('\\b(' + numberArray.join('|') + ')\\b', 'gi');
  return string.replace(regex, (word => numberArray.indexOf(word)));
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.'),
  // "Please call me at 5 5 5 1 2 3 4. Thanks."
  wordToDigit('The weight is done.'), // "The weight is done."
)