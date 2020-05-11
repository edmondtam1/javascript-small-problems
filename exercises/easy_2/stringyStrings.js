function stringy(num) {
  var result = ''

  for (var i = 0; i < num; i++) {
    i % 2 == 1 ? result += '0' : result += '1';
  }

  return result;
}

console.log(stringy(6), // "101010"
  stringy(9), // "101010101"
  stringy(4), // "1010"
  stringy(7)); // "1010101"