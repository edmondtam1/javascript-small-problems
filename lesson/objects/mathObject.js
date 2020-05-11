// Exercise 1

function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

console.log(radiansToDegrees(3.1415));

// Exercise 2

var val = -180;
console.log(Math.abs(val));

// Exercise 3

var num = 16777216;
console.log(Math.sqrt(num));

// Exercise 4

console.log(Math.pow(16, 6));

// Exercise 5

var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a), Math.ceil(b), Math.round(c));

// Exercise 6

function randomInt(min, max) {
  if (min > max)[min, max] = [max, min];
  if (min === max) return min;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(3, 10));