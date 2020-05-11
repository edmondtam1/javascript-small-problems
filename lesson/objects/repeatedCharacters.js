function repeatedCharacters(str) {
  var newStr = str.toLowerCase();
  var result = {};

  for (var char of newStr) {
    if (!result[char]) {
      result[char] = 0;
    }
    result[char] += 1;
  }

  for (var item in result) {
    if (result[item] < 2) {
      delete result[item];
    }
  }

  return result;
}

console.log(
  repeatedCharacters('Programming'), // { r: 2, g: 2, m: 2 }
  repeatedCharacters('Combination'), // { o: 2, i: 2, n: 2 }
  repeatedCharacters('Pet'), // {}
  repeatedCharacters('Paper'), // { p: 2 }
  repeatedCharacters('Baseless'), // { s: 3, e: 2 }
)