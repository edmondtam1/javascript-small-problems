// Slice function and tests

function slice(arr, begin, end) {
  var newArr = [];

  begin = Math.min(begin, arr.length);
  end = Math.min(end, arr.length);

  for (var i = begin; i < end; i++) {
    newArr[newArr.length] = arr[i];
  }

  return newArr;
}

console.log(slice([1, 2, 3], 1, 2), // [2]
  slice([1, 2, 3], 2, 0), // []
  slice([1, 2, 3], 5, 1), // []
  slice([1, 2, 3], 0, 5)); // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3)); // [2, 3]
console.log(arr); // [1, 2, 3])

// Splice function and tests

function splice(arr, start, deleteCount) {
  var newArr = [];
  start = Math.min(start, arr.length);
  deleteCount = Math.min(deleteCount, arr.length - start);

  argLength = arguments.length - 3;

  // Manage deletion

  for (var i = start; i < start + deleteCount; i++) {
    newArr[newArr.length] = arr[i];
  }

  for (var i = start; i < arr.length; i++) {
    arr[i] = arr[i + deleteCount];
  }

  arr.length = arr.length - deleteCount;
  console.log(`Arr is ${arr} with ${arr.length}`)

  // Insert the element if it exists
  if (argLength > 0) {
    for (var i = arr.length + argLength - 1; i >= start; i--) {
      arr[i + argLength] = arr[i];
    }

    for (var i = start; i < start + argLength; i++) {
      arr[i] = arguments[3 + i - start];
    }
  }

  arr.length = arr.length - argLength;
  return newArr;
}

console.log('Splice');

console.log(
  splice([1, 2, 3], 1, 2), // [2, 3]
  splice([1, 2, 3], 1, 3), // [2, 3]
  splice([1, 2, 3], 1, 0), // []
  splice([1, 2, 3], 0, 1), // [1]
  splice([1, 2, 3], 1, 0, 'a') // []
);

var arr = [1, 2, 3];
console.log(
  splice(arr, 1, 1, 'two')); // [2]
console.log(
  arr, // [1, "two", 3]
);

console.log(`Sigh`);
var arr = [1, 2, 3];
console.log(
  splice(arr, 1, 2, 'two', 'three'), // [2, 3]
  arr, // [1, "two", "three"]
);

var arr = [1, 2, 3];
console.log(
  splice(arr, 1, 0), // []
  splice(arr, 1, 0, 'a')); // []
console.log(
  arr // [1, "a", 2, 3]
);

var arr = [1, 2, 3];
console.log(
  splice(arr, 0, 0, 'a'), // []
  arr
);