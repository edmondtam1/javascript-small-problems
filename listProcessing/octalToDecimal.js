function octalToDecimal(string) {
  var BASE_FACTOR = 8;
  return string.split('').map((element) => {
    return Number(element);
  }).reverse().reduce((total, value, index) => {
    return total + (value * BASE_FACTOR ** index);
  });
}

console.log(
  octalToDecimal('1'), // 1
  octalToDecimal('10'), // 8
  octalToDecimal('130'), // 88
  octalToDecimal('17'), // 15
  octalToDecimal('2047'), // 1063
  octalToDecimal('011'), // 9
);