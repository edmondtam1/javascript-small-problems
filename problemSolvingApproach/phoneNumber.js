var DEFAULT_VALUE = '0000000000';

function phoneNumber(string) {
  string = validateString(string);
  if (string.length === 11 && string[0] === '1') {
    return string.slice(1);
  } else if (string.length === 10) {
    return string;
  } else {
    return DEFAULT_VALUE;
  }
}

function validateString(string) {
  string = string.replace(/[-. ()]/gi, '');
  if (string.length < 10 || string.length > 11 || (/\D/g).test(string)) {
    return DEFAULT_VALUE;
  } else {
    return string;
  }
}

// examples / test cases

console.log(
  phoneNumber(''), // return '0000000000'
  phoneNumber('12345a'), // return '0000000000'
  phoneNumber('123456789012'), // return '0000000000'
  phoneNumber('!'), // return '0000000000'
  phoneNumber('1234567890'), // return '1234567890'
  phoneNumber('123-456 789.0'), // return '1234567890'
  phoneNumber('1123-456 789.0'), // return '1234567890'
  phoneNumber('1123-456 (789).0'), // return '1234567890'
  phoneNumber('0123-456 789.0'), // return '0000000000'
);

// data structures
// validate string and replace valid non-digit characters - can be done as array

// algorithm
// clean string - return '0000000000' if not valid input
// check the number of digits
// if 11, check first digit is 1 and return remaining digits
// if 10, return remaining digits