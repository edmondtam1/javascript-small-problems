function generatePattern(num) {
  var string = ''

  for (var i = 1; i <= num; i++) {
    if (i < 10) {
      string += String(i);
    } else if (i >= 10) {
      string += String(i % 10);
    }
    console.log(string + '*'.repeat(num - i))
  }
}

generatePattern(0)