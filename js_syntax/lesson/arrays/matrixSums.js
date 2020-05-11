function matrixSums(arr) {
  var result = [];
  var reducer = (accum, val) => accum + val;

  for (var i = 0; i < arr.length; i++) {
    result[result.length] = arr[i].reduce(reducer);
  }

  return result;
}

console.log(matrixSums([
  [2, 8, 5],
  [12, 48, 0],
  [12]
]));