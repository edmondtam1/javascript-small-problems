function multisum(num) {
  var result = 0;
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

console.log(multisum(3), // 3
  multisum(5), // 8
  multisum(10), // 33
  multisum(1000), // 234168
);