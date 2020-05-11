function missing(arr) {
  var result = [];

  for (var i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) === -1) result[result.length] = i;
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]), // [-1, 0, 2, 3, 4]
  missing([1, 2, 3, 4]), // []
  missing([1, 5]), // [2, 3, 4]
  missing([6])); // [])