function combinedArray(even, odd) {
  var ans = [];

  for (var i = 0; i < even.length; i++) {
    ans[ans.length] = even[i];
    ans[ans.length] = odd[i];
  }

  return ans;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));