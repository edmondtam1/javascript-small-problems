function repeater(str) {
  return str.split('').map((i) => String(i) + String(i)).join('');
}

// function doubleConsonants(str) {
//   var CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
//   var result = '';
//   var i;
//   var char;

//   for (i = 0; i < str.length; i++) {
//     char = CONSONANTS.includes(str[i].toLowerCase()) ? str[i] + str[i] : str[i];
//     result += char;
//   }

//   return result;
// }

function doubleConsonants(string) {
  return string.replace(/([^aeiou\d\W_])/ig, "$&$&");
}

console.log(
  repeater('Hello'), // "HHeelllloo"
  repeater('Good job!'), // "GGoooodd  jjoobb!!"
  repeater(''), // ""
)

console.log(
  doubleConsonants('String'), // "SSttrrinngg"
  doubleConsonants('Hello-World!'), // "HHellllo-WWorrlldd!"
  doubleConsonants('July 4th'), // "JJullyy 4tthh"
  doubleConsonants(''), // ""
)