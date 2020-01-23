function triangle(num1, num2, num3) {
  var nums = [num1, num2, num3].sort((a, b) => {
    return a > b ? 1 : -1;
  })

  if (nums[0] + nums[1] < nums[2] || nums[0] === 0) {
    return 'invalid';
  } else if (nums[0] === nums[1] && nums[1] === nums[2]) {
    return 'equilateral';
  } else if (nums[0] === nums[1] || nums[1] === nums[2]) {
    return 'isosceles';
  } else if (nums[0] ** 2 + nums[1] ** 2 === nums[2] ** 2) {
    return 'right angle';
  } else if (nums[0] !== nums[1] && nums[1] !== nums[2]) {
    return 'scalene';
  }
}

console.log(
  triangle(3, 3, 3), // "equilateral"
  triangle(3, 3, 1.5), // "isosceles"
  triangle(3, 4, 5), // "right angle"
  triangle(3, 4, 6), // "scalene"
  triangle(0, 3, 3), // "invalid"
  triangle(3, 1, 1), // "invalid"
)

// DS & algo
// check: all nums are same => equilateral
// 2 nums are same => isosceles
// a ** 2 + b ** 2 = c ** 2 => scalene
// 1 side === 0 => invalid
// short + middle < longest => invalid