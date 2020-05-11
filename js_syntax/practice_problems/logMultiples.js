function logMultiples(number) {

  for (var i = Math.floor(100 / number) * number; i >= 0; i -= number) {
    if (i % 2 == 1) console.log(i);
  }
}

logMultiples(5);