function mirrorArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result[i] = arr[i];
    result[arr.length * 2 - 1 - i] = arr[i];
  }

  return result;
}

console.log(mirrorArray([1, 2, 3]));
console.log(([1, 2, 3].reverse()));