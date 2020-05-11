function arraysEqual(arr1, arr2) {
  for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    // Can check for the type of arr1[i] or arr2[i] to loop arrays/objects

    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(arraysEqual([1], [1]), // true
  arraysEqual([1], [2]), // false
  arraysEqual([1, 2], [1, 2, 3]), // false
  arraysEqual([1, 'hi', true], [1, 'hi', true]), // true
  arraysEqual([1, 'hi', true], [1, 'hi', false]), // false
  arraysEqual([1, 'hi', true], [1, 'hello', true]), // false
  arraysEqual([1, 'hi', true], [2, 'hi', true]), // false
);