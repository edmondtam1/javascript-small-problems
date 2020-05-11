function rotateRightmostDigits(num, rotation) {
  var numString = String(num);
  var mid = numString.length - (rotation - 1);
  var rotatedSection = numString.slice(mid).concat(numString[mid - 1]);

  return Number(numString.slice(0, mid - 1).concat(rotatedSection));
}

// console.log(
//   rotateRightmostDigits(735291, 1), // 735291
//   rotateRightmostDigits(735291, 2), // 735219
//   rotateRightmostDigits(735291, 3), // 735912
//   rotateRightmostDigits(735291, 4), // 732915
//   rotateRightmostDigits(735291, 5), // 752913
//   rotateRightmostDigits(735291, 6), // 352917
// )

function maxRotation(num) {
  var i;
  var result = String(num);
  var resultLength = result.length;

  for (i = 0; i < resultLength; i++) {
    result = rotateRightmostDigits(result, resultLength - i);
  }

  return Number(result);
}

console.log(
  maxRotation(735291), // 321579
  maxRotation(3), // 3
  maxRotation(35), // 53
  maxRotation(105), // 15 -- the leading zero gets dropped
  maxRotation(8703529146), // 7321609845
)