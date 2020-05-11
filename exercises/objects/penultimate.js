function penultimate(string) {
  var arr = string.split(' ');
  return arr[arr.length - 2];
}

console.log(
  penultimate('last word'), // expected: "last"
  penultimate('Launch School is great!'), // expected: "is"
);