function shift(arr) {
  var val = arr[0];

  if (arr.length === 0) return undefined;

  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return val;
}

var count = [1, 2, 3];
console.log(shift(count), // 1
  count); // [ 2, 3 ]