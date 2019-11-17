function firstNOf(arr, count) {
  var ans = [];

  for (var i = 0; i < count; i++) {
    ans[ans.length] = arr[i];
  }

  return ans;
}

function lastNOf(arr, count) {
  var normalisedCount = arr.length - count < 0 ? 0 : count;
  return slice(arr, normalisedCount, arr.length);
}

function slice(arr, start, end) {
  var ans = [];

  if (!arr) return [];

  for (var i = start; i < end; i++) {
    ans[ans.length] = arr[i];
  }

  return ans;
}


var digits = [4, 8, 15, 16, 23, 42];

console.log(firstNOf(digits, 3)); // returns [4, 8, 15]
console.log(lastNOf(digits, 3)); // returns [16, 23, 42]
console.log(lastNOf(digits, 8)); // returns [4, 8, 15, 16, 23, 42]