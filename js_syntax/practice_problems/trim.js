function trim(str) {
  var result = '';
  var start = 0;
  var end = 0;

  if (str === '') return '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      start = i;
      break;
    }
  }

  for (var j = str.length - 1; j > start; j--) {
    if (str[j] !== ' ') {
      end = j;
      break;
    }
  }

  for (start; start <= end; start++) {
    if (start === end) break;
    result += str[start];
  }

  return result;
}

console.log(trim(''));
console.log(trim('    '));
console.log(trim('  dfdfd  dfdfd dfdf  '));
console.log(trim('dfdf dfdfd  '));