// Uses starting index and string length

function substr(string, start, length) {
  var result = '';

  start = start < 0 ? string.length + start : start;

  for (var i = start; i < Math.min(string.length, length + start); i++) {
    result += string[i];
  }

  return result;
}

var string = 'hello world';

console.log(
  substr(string, 2, 4), // "llo "
  substr(string, -3, 2), // "rl"
  substr(string, 8, 20), // "rld"
  substr(string, 0, -20), // ""
  substr(string, 0, 0), // ""
);