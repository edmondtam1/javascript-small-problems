function pop(arr) {
  value = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return value;
}

var count = [1, 2, 3];
console.log(pop(count), // 3
  count); // [ 1, 2 ]