function gcd(first, second) {
  var remainder;

  if (first < second) {
    var temp = first;
    first = second;
    second = temp;
  }

  while (second !== 0) {
    remainder = second;
    second = first % second;
    first = remainder;
  }

  return first;
}

function gcdArray(array) {
  var answer = array[0];

  for (var i = 1; i < array.length; i++) {
    answer = gcd(answer, array[i]);
  }

  return answer;
}

// function gcd(first, second) {
//   var temp;

//   while (second !== 0) {
//     temp = second;
//     second = first % second;
//     first = temp;
//   }

//   console.log(first);
// }

console.log(gcdArray([100, 900, 400]));
console.log(gcdArray([1000, 9000, 4000]));
console.log(gcdArray([11110, 91200, 413140]));
console.log(gcd(4560, 91200));
console.log(gcd(3, 12));

// gcd(112380490, 10383204);
// gcd(12, 4); // 6
// gcd(48, 18); // 6
// gcd(15, 10); // 5
// gcd(9, 2); // 1