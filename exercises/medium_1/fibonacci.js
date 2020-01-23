// recursive solution

// function fibonacci(num) {
//   if (num <= 2) return 1;
//   return (fibonacci(num - 1) + fibonacci(num - 2));
// }

// procedural solution

// function fibonacci(num) {
//   if (num <= 2) return 1;
//   var first = 1;
//   var second = 1;
//   var count = 3;

//   while (count <= num) {
//     var temp = first;
//     first += second;
//     second = temp;
//     count++;
//   }

//   return first;
// }

// memoized recursive solution

var fibonacci = function (num) {
  var storedValues = {
    1: 1,
    2: 1
  };

  return (function fibo(num) {
    if (num <= 2) return 1;
    if (storedValues[num]) {
      return storedValues[num];
    } else {
      storedValues[num] = fibo(num - 1) + fibo(num - 2);
      return storedValues[num];
    }
  })(num);
};

console.log(
  fibonacci(1), // 1
  fibonacci(2), // 1
  fibonacci(3), // 2
  fibonacci(4), // 3
  fibonacci(5), // 5
  fibonacci(12), // 144
  fibonacci(20), // 6765
  fibonacci(50), // 12586269025
  fibonacci(75), // 2111485077978050

)