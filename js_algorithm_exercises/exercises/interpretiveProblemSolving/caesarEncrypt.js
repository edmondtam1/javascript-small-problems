var LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
var UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ALPHABET_NUM = 26;

function caesarEncrypt(string, num) {
  return string.split('').map(char => {
    if (LOWER_CASE.indexOf(char) !== -1) {
      return getEncryptedChar(char, LOWER_CASE, num);
    } else if (UPPER_CASE.indexOf(char) !== -1) {
      return getEncryptedChar(char, UPPER_CASE, num);
    } else {
      return char;
    }
  }).join('');
}

function getEncryptedChar(char, alphabet, rotation) {
  return alphabet[(alphabet.indexOf(char) + rotation) % ALPHABET_NUM]
}

console.log(
  // simple shift
  caesarEncrypt('A', 0), // "A"
  caesarEncrypt('A', 3), // "D"

  // wrap around
  caesarEncrypt('y', 5), // "d"
  caesarEncrypt('a', 47), // "v"

  // all letters
  caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25),
  // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
  caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5),
  // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

  // many non-letters
  caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2),
  // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
);