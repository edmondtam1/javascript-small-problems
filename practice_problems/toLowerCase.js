function toLowerCase(string) {
  var result = '';
  var CONVERSION_OFFSET = 32;

  for (var i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i])) {
      asciiNumeric = string.charCodeAt(i) + CONVERSION_OFFSET;
      result += String.fromCharCode(asciiNumeric);
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'), // "alphabet"
  toLowerCase('123'), // "123"
  toLowerCase('abcDEF') // "abcdef"
);