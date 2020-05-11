function totalArea(array) {
  // map array elements to the array's area
  // reduce areas to one total area

  var newArray = array.map((element) => {
    return element[0] * element[1];
  })

  return newArray.reduce((prev, current) => {
    return prev + current;
  });
}

function totalSquareArea(array) {
  var newArray = array.filter((element) => {
    if (element[0] === element[1]) return element;
  })

  return totalArea(newArray);
}

var rectangles = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2]
];

console.log(totalArea(rectangles)); // 141

console.log(totalSquareArea(rectangles)); // 121