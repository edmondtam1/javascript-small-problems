var total = 0;
var result = 'F';
var average;

for (var i = 1; i <= 3; i++) {
  total += Number(prompt(`Enter score ${i}: `))
}

average = total / 3;

if (average >= 90) {
  result = 'A'
} else if (average >= 70) {
  result = 'B'
} else if (average >= 50) {
  result = 'C'
}

var message = `Based on the average of your 3 scores your letter grade is "${result}".`

console.log(message)