function sortDescending(arr) {
  var ans = arr.slice();
  return ans.sort(function (a, b) {
    return b - a;
  });
}



var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array); // returns [42, 23, 16, 15, 8, 4]
console.log(result); // logs    [42, 23, 16, 15, 8, 4]
console.log(array); // logs    [23, 4, 16, 42, 8, 15]