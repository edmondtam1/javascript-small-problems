function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}


var str = 'We put comprehension and mastery above all else';
console.log(
  startsWith(str, 'We'), // true
  startsWith(str, 'We put'), // true
  startsWith(str, ''), // true
  startsWith(str, 'put') // false
)
var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));