function star(num) {
  if (typeof num !== 'number' || num < 7) return undefined;
  var i;
  var mid = Math.floor(num / 2);

  for (i = 0; i < mid; i++) {
    console.log(starRow(i, mid));
  }

  console.log('*'.repeat(num));

  for (i = mid - 1; i >= 0; i--) {
    console.log(starRow(i, mid));
  }
}

function starRow(index, num) {
  return ' '.repeat(index) + '*' + ' '.repeat(num - 1 - index) + '*' + ' '.repeat(num - 1 - index) + '*';
}

console.log(
  star(7),
  // logs
  // *  *  *
  //  * * *
  //   ***
  // *******
  //   ***
  //  * * *
  // *  *  *
  star(9),
  // logs
  // *   *   *
  //  *  *  *
  //   * * *
  //    ***
  // *********
  //    ***
  //   * * *
  //  *  *  *
  // *   *   *
)