function rotateArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  // var newArray = [];
  // var i;

  // for (i = 1; i < arr.length; i++) {
  //   newArray.push(arr[i]);
  // }
  // newArray.push(arr[0]);

  return arr.slice(1).concat(arr[0]);
}

console.log(
  rotateArray([7, 3, 5, 2, 9, 1]), // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']), // ["b", "c", "a"]
  rotateArray(['a']), // ["a"]
  rotateArray([1, 'a', 3, 'c']), // ["a", 3, "c", 1]
  rotateArray([{
      a: 2
    },
    [1, 2], 3
  ]), // [[1, 2], 3, { a: 2 }]
  rotateArray([]), // []

  // return `undefined` if the argument is not an array
  rotateArray(), // undefined
  rotateArray(1), // undefined
);

// the input array is not mutated
var array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
console.log(
  array, // [1, 2, 3, 4]
)