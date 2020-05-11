function indexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3), // 2
  indexOf([1, 2, 3], 4)); // -1