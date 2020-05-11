function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  var array2Copy = array2.slice();

  for (var i = 0; i < array1.length; i++) {
    var index = array2Copy.indexOf(array1[i]);
    if (index >= 0) {
      array2Copy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}


console.log(areArraysEqual([1, 2, 3], [1, 2, 3]), // true
  areArraysEqual([1, 2, 3], [3, 2, 1]), // true
  areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']), // true
  areArraysEqual(['1', 2, 3], [1, 2, 3]), // false
  areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]), // true
  areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]), // false
  areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]), // false
  areArraysEqual([1, 1, 2], [1, 2, 2]), // false
  areArraysEqual([1, 1, 1], [1, 1]), // false
  areArraysEqual([1, 1], [1, 1]));