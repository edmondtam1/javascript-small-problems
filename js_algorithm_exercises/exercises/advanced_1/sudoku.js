// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Example 1:
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true

// Example 2:
// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false



// examples
var sudokuBoard1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

var sudokuBoard2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(validSudoku(sudokuBoard1));
console.log(validSudoku(sudokuBoard2));

// data structure
// cannot modify arrays
// need to subdivide boxes into:
// rows (already done) (9)
// cols (9)
// squares (9)
// then apply "check" function on each box

// algo
// take array and divide into row, cols and square arrays
// check that each array has unique values (remove .)
// convert to just digits and join('')
// use regex to check duplicates
// or use sort function

// initial function
// function validSudoku(board) {
//   var BOX_INDICES = [0, 3, 6];
//   var SUDOKU_NUMBERS = 9;
//   var arrays = board.slice();
//   var col;
//   var row;

//   // add columns
//   for (col = 0; col < SUDOKU_NUMBERS; col++) {
//     var tempArray = [];
//     for (row = 0; row < SUDOKU_NUMBERS; row++) {
//       tempArray.push(board[row][col]);
//     }
//     arrays.push(tempArray);
//   }

//   // add boxes
//   BOX_INDICES.forEach(value1 => {
//     BOX_INDICES.forEach(value2 => {
//       arrays.push(getBoxes(board, value1, value2))
//     })
//   });

//   return arrays.map(array => {
//     var str = array.join('').replace(/\./g, '');
//     return /(.).*?\1/.test(str);
//   }).every(containsDuplicates => {
//     return containsDuplicates === false;
//   })
// }

// // adding boxes
// function getBoxes(board, minX, minY) {
//   var results = [];
//   var i;
//   var j;
//   var maxX = minX + 3;
//   var maxY = minY + 3;
//   for (i = minX; i < maxX; i++) {
//     for (j = minY; j < maxY; j++) {
//       results.push(board[i][j])
//     }
//   }
//   return results;
// }

function validSudoku(board) {
  var SUDOKU_NUMBER = 9;
  var rows = new Array(SUDOKU_NUMBER);
  var cols = new Array(SUDOKU_NUMBER);
  var boxes = new Array(SUDOKU_NUMBER);
  var row;
  var col;

  for (row = 0; row < SUDOKU_NUMBER; row++) {
    var currentBoxRow = Math.floor(row / 3);

    for (col = 0; col < SUDOKU_NUMBER; col++) {
      var currentBoxCol = Math.floor(col / 3);
      var currentBox = currentBoxCol + currentBoxRow * 3;
      var currentValue = board[row][col];

      if (currentValue === '.') continue;

      if (rows[row].includes(currentValue) ||
        cols[col].includes(currentValue) ||
        boxes[currentBox].includes(currentValue)) return false;

      rows[row].push(currentValue);
      cols[col].push(currentValue);
      boxes[currentBox].push(currentValue);
    }
  }

  return true;
}