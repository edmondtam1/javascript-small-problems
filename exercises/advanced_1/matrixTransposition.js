function transpose(arr) {
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

  return newArray;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(
  transpose([
    [1, 2, 3, 4]
  ]), // [[1], [2], [3], [4]]
  transpose([
    [1],
    [2],
    [3],
    [4]
  ]), // [[1, 2, 3, 4]]
  transpose([
    [1]
  ]), // [[1]]

  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2]
  ]),
  // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
);