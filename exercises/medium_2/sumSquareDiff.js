function sumSquareDifference(num) {
  var sumSquare = 0;
  var squareSum = 0;
  var i;

  for (i = 1; i <= num; i++) {
    sumSquare += i;
    squareSum += i ** 2;
  }

  sumSquare = sumSquare ** 2;

  return sumSquare - squareSum;
}


console.log(
  sumSquareDifference(3), // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sumSquareDifference(10), // 2640
  sumSquareDifference(1), // 0
  sumSquareDifference(100), // 25164150
)