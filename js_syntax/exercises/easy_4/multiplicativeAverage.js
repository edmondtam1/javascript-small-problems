function showMultiplicativeAverage(arr) {
  var result = 1;
  var i;

  for (i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return (result / arr.length).toFixed(3);
}

console.log(
  showMultiplicativeAverage([3, 5]), // "7.500"
  showMultiplicativeAverage([2, 5, 7, 11, 13, 17]), // "28361.667"
);