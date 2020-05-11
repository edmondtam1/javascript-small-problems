function triangle(num) {
  for (var i = 1; i <= num; i++) {
    console.log(' '.repeat(num - i) + '*'.repeat(i));
  }
}

triangle(5);
triangle(9);