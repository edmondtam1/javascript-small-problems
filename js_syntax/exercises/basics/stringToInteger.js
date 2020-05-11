var DIGITS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};

function stringToInteger(str) {
  if (/[^\-\+0-9]/.test(str)) return undefined;
  var sign;
  var result = 0;
  var factor = 1;
  if (['-', '+'].includes(str[0])) {
    sign = str[0];
    str = str.split('').splice(1).join('');
  } else {
    sign = '+';
  }

  for (var i = str.length - 1; i >= 0; i--) {
    result += DIGITS[str[i]] * factor;
    factor *= 10;
  }

  if (sign === '-') result *= '-1';

  return result;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('+4321'));
console.log(stringToInteger('-4321'));
console.log(stringToInteger('329'));