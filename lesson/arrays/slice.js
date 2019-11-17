function slice(arr, start, end) {
  var ans = [];

  if (!arr) return [];

  for (var i = start; i < end; i++) {
    ans[ans.length] = arr[i];
  }

  return ans;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2), slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));