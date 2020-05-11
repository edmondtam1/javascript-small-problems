function pop(array) {
  var poppedElement = array[array.length - 1];
  array.splice(array.length - 1);

  return poppedElement;
}

function push(array) {
  var length = arguments.length;
  var i;

  for (i = 1; i < length; i += 1) {
    array[array.length] = arguments[i];
  }

  return array.length;
}
var array = [1, 2, 3];
console.log(
  pop(array), // 3
  (array), // [1, 2]
  pop([]), // undefined
  pop([1, 2, ['a', 'b', 'c']])); // ["a", "b", "c"]

// push
var array = [1, 2, 3];
console.log(
  push(array, 4, 5, 6), // 6
  (array), // [1, 2, 3, 4, 5, 6]
  push([1, 2], ['a', 'b']), // 3
  push([], 1), // 1
  push([])); // 0)