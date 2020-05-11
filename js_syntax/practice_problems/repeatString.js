function repeat(string, times) {
  var validREGEX = /^[0-9]*$/i;

  if (!validREGEX.test(times)) return undefined;

  var result = '';

  while (times > 0) {
    result += string;
    times -= 1;
  }

  return result;
}

console.log(repeat('hi', '33'));
console.log(repeat('hi', '-1'));
console.log(repeat('hi', 'a'));
console.log(repeat('hi', false));