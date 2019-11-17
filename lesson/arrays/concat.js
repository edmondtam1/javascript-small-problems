function concat(arr1, arr2) {
  var result = [];

  for (var i = 0; i < arr1.length; i++) {
    result[result.length] = arr1[i];
  }

  for (var i = 0; i < arr2.length; i++) {
    result[result.length] = arr2[i];
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ])