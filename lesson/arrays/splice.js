function splice(arr, start, num) {
  var newArr = [];

  for (var i = start; i < arr.length; i++) {
    if (i < start + num) {
      push(newArr, arr[i]);
    }

    arr[i] = arr[i + num];
  }

  arr.length = arr.length - newArr.length;
  return newArr;
}

function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  splice(count, 2, 5), // [ 3, 4, 5, 6, 7 ]
  count, )