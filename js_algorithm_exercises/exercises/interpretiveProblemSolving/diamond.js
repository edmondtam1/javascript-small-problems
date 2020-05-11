function diamond(num, hollow) {
  if (num % 2 === 0) return undefined;
  var i;

  for (i = 0; i < num; i++) {
    var spaces = getSpaces(i, num);
    var stars = getStars(i, num, hollow);

    console.log(spaces + stars);
  }
}

function getSpaces(index, rows) {
  if (index > Math.floor(rows / 2)) {
    index = index - Math.floor(rows / 2);
  } else {
    index = Math.floor(rows / 2) - index;
  }
  return ' '.repeat(index);
}

function getStars(index, rows, hollow) {
  var count = index;
  if (count > Math.floor(rows / 2)) {
    count = 2 * Math.floor(rows / 2) - count;
  }

  count = (count + 1) * 2 - 1;
  if (hollow && index !== 0 && index !== (rows - 1)) {
    return '*' + ' '.repeat(count - 2) + '*';
  }

  return '*'.repeat(count);
}

// examples

console.log(
  // diamond(1),
  // diamond(3),
  // diamond(9),
  diamond(1, true),
  diamond(3, true),
  diamond(9, true),
)

// diamond(1);
// *

// diamond(3);
// logs
//  *
// ***
//  *

// diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *