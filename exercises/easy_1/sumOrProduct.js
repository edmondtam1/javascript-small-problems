var int = Number(prompt('Please enter an integer greater than 0: '));
var op = prompt('Enter "s" to compute the sum or "p" to compute the product. ')

function sumOrProduct(integer, operator) {
  var result;
  var operatorWord;

  if (operator === 's') {
    result = computeSum(integer);
    operatorWord = 'sum';
  } else if (operator === 'p') {
    result = computeProduct(integer);
    operatorWord = 'product';
  }

  console.log(`The ${operatorWord} of the integers between 0 and ${integer} is ${result}.`)
}

function computeSum(integer) {
  var result = 0;
  for (var i = 1; i <= integer; i++) {
    result += i;
  }
  return result;
}

function computeProduct(integer) {
  var result = 1;
  for (var i = 1; i <= integer; i++) {
    result *= i;
  }
  return result;
}

sumOrProduct(int, op);