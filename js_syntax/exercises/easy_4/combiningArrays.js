function union() {
  var i;
  var result = [];

  for (i = 0; i < arguments.length; i++) {
    copyNonDupValues(result, arguments[i]);
  }

  return result;
}

function copyNonDupValues(resultArr, arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) === -1) resultArr.push(arr[i]);
  }
}

console.log(
  union([1, 3, 5], [3, 6, 9]) // [1, 3, 5, 6, 9]
);