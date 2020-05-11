function centerOf(str) {
  var mid = Math.ceil(str.length / 2) - 1;
  var numOfChars = str.length % 2 === 0 ? 2 : 1;
  return str.slice(mid, mid + numOfChars);
}

console.log(
  centerOf('I Love Ruby'), // "e"
  centerOf('Launch School'), // " "
  centerOf('Launch'), // "un"
  centerOf('Launchschool'), // "hs"
  centerOf('x'), // "x"
  centerOf('asdfg'),
  centerOf(''),
  centerOf('asdf'),
)