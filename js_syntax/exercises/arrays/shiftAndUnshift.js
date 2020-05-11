function shift(arr) {
  if (arr.length === 0) return undefined;

  var value = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return value;
}

function unshift(arr) {
  var length = arguments.length - 1;

  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i + length] = arr[i];
  }

  for (var j = 1; j < arguments.length; j++) {
    arr[j - 1] = arguments[j];
  }

  return arr.length;
}

console.log(shift([1, 2, 3]), // 1
  shift([]), // undefined
  shift([
    [1, 2, 3], 4, 5
  ]), // [1, 2, 3]

  unshift([1, 2, 3], 5, 6), // 5
  unshift([1, 2, 3]), // 3
  unshift([4, 5], [1, 2, 3])); // 3

var testArray = [1, 2, 3];
console.log(
  shift(testArray), // 1
  'hi',
  testArray); // [2, 3]
// unshift(testArray, 5), // 3
// testArray); // [5, 2, 3])