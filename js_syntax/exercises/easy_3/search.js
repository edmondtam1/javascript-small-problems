num1 = prompt('Enter the 1st number:');
num2 = prompt('Enter the 2nd number:');
num3 = prompt('Enter the 3rd number:');
num4 = prompt('Enter the 4th number:');
num5 = prompt('Enter the 5th number:');
num6 = prompt('Enter the last number:');

var arr = [num1, num2, num3, num4, num5];

// if (arr.includes(num6)) {
//   console.log(`The number ${num6} appears in [${arr.join(', ')}].`)
// } else {
//   console.log(`The number ${num6} does not appear in [${arr.join(', ')}].`)
// }

if (arr.some(function (el) {
    return el > 10;
  })) {
  console.log(`The number ${num6} appears in [${arr.join(', ')}].`)
} else {
  console.log(`The number ${num6} does not appear in [${arr.join(', ')}].`)
}