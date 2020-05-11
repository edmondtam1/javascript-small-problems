function luhnValidation(string) {
  string = cleanInput(string);
  if (!string) return false;

  var checksum = getChecksum(string);
  return checksum % 10 === 0;
}

function createValidLuhn(string) {
  string = cleanInput(string);
  if (!string) return false;

  var checksum = getChecksum(string);
  if (checksum % 10 !== 0) {
    var newDigit = 10 - getChecksum(string + '0') % 10;
    string = string + String(newDigit);
  }

  return string.match(/(\d{1,4})/g).join(' ');
}

function getChecksum(string) {
  return string.split('').reverse().map((digit, index) => {
    var num = Number(digit);
    if (index % 2 === 1) {
      return num < 5 ? num * 2 : num * 2 - 9;
    } else {
      return num;
    }
  }).reduce((acc, num) => {
    return acc + num;
  })
}

function cleanInput(string) {
  if (typeof string !== 'string' || string.length === 0) return false;

  return string.replace(/\D/g, '');
}

// problem: write a program that takes an input of string or number and outputs a true/false based on whether it passes the luhn formula
// luhn formula: from the rightmost digit, double the value of every second digit
// for every doubled value > 10, subtract 9
// sum the digits together and take modulus 10
// if result is 0, return true otherwise return false

// test cases

console.log(
  // happy paths
  luhnValidation('1111'), // returns false
  luhnValidation('8763'), // returns true
  luhnValidation("2323 2005 7766 3554"), // returns true

  // input checks and edge cases
  luhnValidation(''), // returns false
  luhnValidation('8763 a b c'), // returns true
  luhnValidation('8 a 7 - 6 c 3'), // returns true
  luhnValidation(8763), // returns false
  luhnValidation({}), // returns false
  luhnValidation(['8763']), // returns false

  // additional digit
  createValidLuhn('2323 2005 7766 355'), // returns '2323 2005 7766 3554'
  createValidLuhn('1 1 1 1'), // returns '1111 4'
)

// data structure / algorithm
// string to array (reject other data structures)
// array --> reverse --> map (convert to Number and double every second digit) --> reduce