function triangle(num1, num2, num3) {
  var arr = [num1, num2, num3];
  if (arr.reduce(sum) !== 180 || arr.some(containsZero)) return 'invalid';

  if (arr.some(containsRightAngle)) {
    return 'right';
  } else if (arr.some(containsObtuseAngle)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

function sum(acc, curr) {
  return acc + curr;
}

function containsZero(num) {
  return num === 0;
}

function containsRightAngle(num) {
  return num === 90;
}

function containsObtuseAngle(num) {
  return num > 90;
}

console.log(
  triangle(60, 70, 50), // "acute"
  triangle(30, 90, 60), // "right"
  triangle(120, 50, 10), // "obtuse"
  triangle(0, 90, 90), // "invalid"
  triangle(50, 50, 50), // "invalid"
)