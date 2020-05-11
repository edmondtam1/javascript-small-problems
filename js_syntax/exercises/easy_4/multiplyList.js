function multiplyList(arr1, arr2) {
  var result = [];
  var i;

  for (i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }

  return result;
}

console.log(
  multiplyList([3, 5, 7], [9, 10, 11]) // [27, 50, 77]
)