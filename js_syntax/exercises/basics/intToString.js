function integerToString(num) {
  var result = '';

  do {
    var value = num % 10;
    result = value + result;
    num = Math.floor(num / 10);
  } while (num > 0)

  return result;
}

function signedIntegerToString(num) {
  if (num < 0) {
    return '-' + integerToString(-num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }
}

console.log(
  integerToString(4321), // "4321"
  integerToString(0), // "0"
  integerToString(5000), // "5000"
)

console.log(
  signedIntegerToString(-4321), // "4321"
  signedIntegerToString(0), // "0"
  signedIntegerToString(5000), // "5000"
)