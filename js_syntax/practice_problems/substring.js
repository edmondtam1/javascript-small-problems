// Uses starting index and end index

function substring(string, start, end) {
  // Manipulation for start and end
  if (start > end) {
    [start, end] = [end, start];
  }

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  var result = '';

  for (var i = start; i < Math.min(end, string.length); i++) {
    result += string[i];
  }

  return result;
}

var string = 'hello world';

console.log(
  substring(string, 2, 4), // "ll"
  substring(string, 4, 2), // "ll"
  substring(string, 0, -1), // ""
  substring(string, 2), // "llo world"
  substring(string, 'a'), // "hello world"
  substring(string, 8, 20), // "rld"
);