function average(arr) {
  var result = 0;

  result = arr.reduce((result, val) => result + val);

  return Math.floor(result / arr.length);
}

console.log(
  average([1, 5, 87, 45, 8, 8]), // 25
  average([9, 47, 23, 95, 16, 52]), // 40
)