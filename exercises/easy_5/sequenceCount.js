function sequence(count, start) {
  if (count === 0) return [];
  var arr = [];
  var i;

  for (i = 1; i <= count; i++) {
    arr.push(i * start);
  }

  return arr;
}

console.log(
  sequence(5, 1), // [1, 2, 3, 4, 5]
  sequence(4, -7), // [-7, -14, -21, -28]
  sequence(3, 0), // [0, 0, 0]
  sequence(0, 1000000), // []
);