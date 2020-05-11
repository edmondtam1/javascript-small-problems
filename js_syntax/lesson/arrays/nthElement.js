function nthElementOf(arr, index) {
  if (index >= arr.length) return undefined;

  while (index < 0) index = arr.length + index;

  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(
  nthElementOf(digits, 3), // returns 16
  nthElementOf(digits, 8), // what does this return?
  nthElementOf(digits, -399), // what does this return?
  nthElementOf(digits, -1)); // what does this return?