function interleave() {
  var i;
  var j;
  var result = [];

  for (i = 0; i < arguments[0].length; i++) {
    for (j = 0; j < arguments.length; j++) {
      result.push(arguments[j][i]);
    }
  }

  return result;
}

console.log(
  interleave([1, 2, 3], ['a', 'b', 'c']), // [1, "a", 2, "b", 3, "c"]
  interleave([1, 2, 3], ['a', 'b', 'c'], [true, false, NaN])
);