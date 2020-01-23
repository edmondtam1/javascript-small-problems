function rotate90(arr) {
  // if (!Array.isArray(arr) || arr.length === 0) return undefined;
  // var cols = arr[0].length;
  // var rows = arr.length;
  // var newArray = [];
  // var col;
  // var row;

  // for (col = 0; col < cols; col++) {
  //   newArray.push(new Array(rows));
  // }

  // for (row = 0; row < rows; row++) {
  //   for (col = 0; col < cols; col++) {
  //     var distance = getDistanceFromEdge(row, rows, col, cols);
  //     var newPos = getNewPosition(row - distance, rows - (distance * 2),
  //       col - distance, cols - (distance * 2));
  //     newArray[newPos[0] + distance][newPos[1] + distance] = arr[row][col];
  //   }
  // }

  // return newArray;

  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  var newArray = [];
  var rows = arr.length;
  var cols = arr[0].length;
  var row;
  var col;

  for (col = 0; col < cols; col++) {
    var newRow = [];
    for (row = 0; row < rows; row++) {
      newRow.push(arr[row][col]);
    }
    newArray.push(newRow);
  }

  for (row = 0; row < cols; row++) {
    newArray[row].reverse();
  }

  return newArray;
}

function getNewPosition(row, rows, col, cols) {
  var newRow;
  var newCol;
  rows--;
  cols--;
  if (row === 0) {
    newCol = rows;
    newRow = col;
  } else if (col === cols) {
    newCol = rows - row;
    newRow = cols;
  } else if (row === (rows)) {
    newCol = 0;
    newRow = col;
  } else if (col === 0) {
    newRow = 0;
    newCol = rows - row;
  }

  return [newRow, newCol];
}

function getDistanceFromEdge(row, rows, col, cols) {
  rows--;
  cols--;

  return Math.min(row, col, rows - row, cols - col);
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

var matrix4 = [
  [1, 2, 3, 4],
  [6, 8, 0, 9],
  [7, 5, 10, 11],
]

var newMatrix4 = rotate90(matrix4);

console.log(newMatrix4); // [[7, 6, 1], [5, 8, 2], [10, 0, 3], [11, 9, 4]]

// 5x5
var matrix5 = [
  [1, 2, 3, 4, 5],
  [6, 8, 0, 9, 13],
  [7, 5, 10, 11, 16],
  [23, 25, 20, 21, 24],
  [31, 39, 38, 36, 37],
]

var newMatrix5 = rotate90(matrix5);

console.log(newMatrix5);

// 6x7
var matrix6 = [
  [1, 2, 3, 4, 5, 6, 7],
  [6, 8, 0, 9, 13, 3, 2],
  [7, 5, 10, 11, 16, 13, 15],
  [23, 25, 20, 21, 24, 26, 27],
  [31, 39, 38, 36, 37, 32, 34],
  [42, 43, 41, 49, 47, 46, 45],
]

var newmatrix6 = rotate90(matrix6);

console.log(newmatrix6);

// for 3x3 matrix
// (0,0) => (0,2)
// (0,1) => (1,2)
// (0,2) => (2,2)
// (1,2) => (2,1)
// (2,2) => (2,0)
// (1,0) => (0,1)
// (1,2) => (2,1)

// data structure
// m x n matrix => n x m matrix

// algo
// take first row and make it last column
// take last column and make it last row
// take last row and make it first column
// take first column and make it first row
// everything else stays the same
//   if there are multiple inner rows/cols then repeat function