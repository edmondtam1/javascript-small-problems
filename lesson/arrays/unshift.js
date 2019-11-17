function unshift(arr, val) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = val;
  return arr.length
}

var arr = [1, 2, 3];
console.log(unshift(arr, 0));
console.log(arr);