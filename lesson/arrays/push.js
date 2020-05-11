function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

var count = [0, 1, 2];
push(count, 3); // 4
console.log(count);