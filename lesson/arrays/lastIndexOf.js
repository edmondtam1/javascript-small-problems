function lastIndexOf(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3), // 2
  lastIndexOf([1, 2, 3], 4)); // -1