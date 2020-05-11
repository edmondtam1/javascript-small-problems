function sequence(num) {
  var arr = [];
  var i;

  for (i = 0; i < num; i++) {
    arr.push(i + 1);
  }

  return arr;
}

console.log(
  sequence(5), // [1, 2, 3, 4, 5]
  sequence(3), // [1, 2, 3]
  sequence(1), // [1]
)