function asciiValue(str) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i);
  }
  return result;
}


console.log(asciiValue('Four score'), // 984
  asciiValue('Launch School'), // 1251
  asciiValue('a'), // 97
  asciiValue('')); // 0