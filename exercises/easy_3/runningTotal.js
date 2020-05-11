// function runningTotal(arr) {
//   var sum = 0;
//   var newArr = [];
//   for (num of arr) {
//     sum += num;
//     newArr.push(sum);
//   }

//   return newArr;
// }

function runningTotal(arr) {
  var sum = 0;

  return arr.map(x => sum += x);
}

console.log(
  runningTotal([2, 5, 13]), // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]), // [14, 25, 32, 47, 67]
  runningTotal([3]), // [3]
  runningTotal([]), // []
);