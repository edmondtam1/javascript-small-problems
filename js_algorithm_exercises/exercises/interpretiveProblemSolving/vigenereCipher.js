var LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
var UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ALPHABET_NUM = 26;

function vigenereCipher(string, keyword) {
  var mappingArray = keyword.toLowerCase().split('').map(char => {
    return LOWER_CASE.indexOf(char);
  });

  var mapLength = mappingArray.length;
  var mapIndex = 0;

  return string.split('').map((char) => {
    if (/[a-z]/i.test(char)) {
      var rotation = mappingArray[mapIndex % mapLength];
      mapIndex = mapIndex % mapLength + 1;
    } else {
      return char;
    }

    if (LOWER_CASE.indexOf(char) !== -1) {
      return getEncryptedChar(char, LOWER_CASE, rotation);
    } else if (UPPER_CASE.indexOf(char) !== -1) {
      return getEncryptedChar(char, UPPER_CASE, rotation);
    }
  }).join('');
}

function getEncryptedChar(char, alphabet, rotation) {
  return alphabet[(alphabet.indexOf(char) + rotation) % ALPHABET_NUM]
}

console.log(
  vigenereCipher("Pineapples don't go on pizzas!", 'meat'), // 'Bmnxmtpeqw dhz'x gh ar pbldal!'
  vigenereCipher("Pineapples don't go on pizzas!", 'A'), // 'Pineapples don't go on pizzas!'
  vigenereCipher("Pineapples don't go on pizzas!", 'Aa'), // 'Pineapples don't go on pizzas!'
  vigenereCipher("Pineapples don't go on pizzas!", 'cab'), // 'Riogaqrlfu dpp't hq oo riabat!'
  vigenereCipher('Dog', 'rabbit') // 'Uoh'
)