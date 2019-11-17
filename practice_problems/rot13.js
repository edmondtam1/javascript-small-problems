function rot13(string) {
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (LOWER.indexOf(string[i]) >= 0) { // If character is a lower case letter
      result += getRot13Char(string[i], LOWER);
    } else if (UPPER.indexOf(string[i]) >= 0) { // If character is an upper case letter
      result += getRot13Char(string[i], UPPER);
    } else {
      result += string[i];
    }
  }

  return result;
}

function getRot13Char(letter, charCase) {
  var ROTATION_VALUE = 13;
  var ALPHABET_LETTERS = 26;
  var newIndex = (charCase.indexOf(letter) + ROTATION_VALUE) % ALPHABET_LETTERS;
  return charCase[newIndex];
}

console.log(rot13(''));
console.log(rot13('...?!?!?!0934asdf;lkj'));
console.log(rot13(rot13('...?!?!?!0934asdf;lkj')));