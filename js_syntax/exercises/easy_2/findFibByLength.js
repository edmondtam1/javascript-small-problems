function findFibonacciIndexByLength(num) {
  var currentFib = 1;
  var nextFib = 1;
  var index = 1;

  while (String(currentFib).length < num) {
    currentFib = nextFib + currentFib;
    [currentFib, nextFib] = [nextFib, currentFib];
    index += 1;
  }

  return index;
}

console.log(
  findFibonacciIndexByLength(2),
  findFibonacciIndexByLength(10),
  findFibonacciIndexByLength(16),
  findFibonacciIndexByLength(17) // This cannot be properly calculated by JS
);