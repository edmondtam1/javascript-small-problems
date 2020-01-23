function sumOfSums(arr) {
  var result = 0;
  var i;

  for (i = 0; i < arr.length; i++) {
    result += arr.slice(0, i + 1).reduce((sum, curr) => {
      return sum + curr;
    });
  }

  return result;
}

console.log(
  sumOfSums([3, 5, 2]), // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  sumOfSums([1, 5, 7, 3]), // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  sumOfSums([4]), // 4
  sumOfSums([1, 2, 3, 4, 5]), // 35
)