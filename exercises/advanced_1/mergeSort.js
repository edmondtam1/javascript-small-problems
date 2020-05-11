function mergeMultiple() {
  if (arguments.length === 0) return undefined;
  var resultArray = [];
  var args = [...arguments];
  var totalLength = args.map(arg => {
    return arg.length;
  }).reduce((acc, length) => {
    return acc + length;
  });

  var i;
  for (i = 0; i < totalLength; i++) {
    var nextNum = getNextNum(args);
    resultArray[i] = nextNum;
  }

  return resultArray;
}

function getNextNum(arrays) {
  var values = arrays.map(array => {
    return array[0];
  });

  var minIndex = values.reduce((minIndex, curr, index, array) => {
    // ignore undefined values
    if (array[minIndex] === undefined) return index;
    return curr < array[minIndex] ? index : minIndex;
  }, 0);

  return arrays[minIndex].shift();
}

function merge(arr1, arr2) {
  var resultArray = [];
  var copy1 = arr1.slice();
  var copy2 = arr2.slice();

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] < copy2[0]) {
      resultArray.push(copy1.shift());
    } else {
      resultArray.push(copy2.shift());
    }
  }

  return resultArray.concat(copy1.length === 0 ? copy2 : copy1);

}

function mergeSortOneArray(arr) {
  // break clause
  if (Object.keys(arr).length === 0) return [];
  if (Object.keys(arr).length === 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var first = arr.slice(0, mid);
  var second = arr.slice(mid);

  first = mergeSortOneArray(first);
  second = mergeSortOneArray(second);

  return mergeMultiple(first, second);
}

// test cases

console.log(
  // mergeSort([]), //
  mergeSort([9, 5, 7, 1]), // [1, 5, 7, 9]
  mergeSort([5, 3]), // [3, 5]
  mergeSort([6, 2, 7, 1, 4]), // [1, 2, 4, 6, 7]

  mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']),
  // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]),
  // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
);

// console.log(
//   merge([1, 5, 9], [2, 6, 8]), // [1, 2, 5, 6, 8, 9]
//   merge([1, 5, 9], [1, 1, 2, 6, 8]), // [1, 1, 1, 2, 5, 6, 8, 9]
//   merge([1, 1, 3], [2, 2]), // [1, 1, 2, 2, 3]
//   merge([], [1, 4, 5, ]), // [1, 4, 5]
//   merge([1], [1, 4, 5, 6]), // [1, 1, 4, 5, 6]
//   merge([1, 4, 5], []), // [1, 4, 5]
// );

console.log(
  mergeMultiple([1, 5, 9], [2, 6, 8], [3, 4, 7, 9, 10]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]
  mergeMultiple([1, 5, 9], [1, 1, 2, 6, 8]), // [1, 1, 1, 2, 5, 6, 8, 9]
  mergeMultiple([1, 1, 3], [2, 2]), // [1, 1, 2, 2, 3]
  mergeMultiple([], [1, 4, 5, ]), // [1, 4, 5]
  mergeMultiple([1], [1, 4, 5, 6]), // [1, 1, 4, 5, 6]
  mergeMultiple([1, 4, 5], []), // [1, 4, 5]
  mergeMultiple([1, 4, 5], [2], [3], [6, 9], [10, 14], [1, 2, 3]), // [1, 1, 2, 2, 3, 3, 4, 5, 6, 9, 10, 14]
);

// example for array size 4

function mergeSort(array) {
  var subArray1;
  var subArray2;

  // "the bottom" - always comes first for recursion
  if (array.length === 1) {
    return array;
  }

  // do something
  // dividing the array into two
  subArray1 = array.slice(0, array.length / 2);
  subArray2 = array.slice(array.length / 2);

  // return value from the bottom is saved in this variable
  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  // recurse at the end
  console.log(subArray1, subArray2);
  return merge(subArray1, subArray2);
}

// mergeSort([1, 2, 3, 4])
// sub1 = [1, 2]
// sub2 = [3, 4]
// mergeSort1([1, 2])
// sub11 = [1]
// sub12 = [2]
// return merge (sub11, sub12)
// sub1 = sorted(sub11, sub12)
// mergeSort2([3, 4])
// sub21 = [3]
// sub22 = [4]
// return merge2(sub21, sub22)
// sub 2 = sorted(sub21, sub22)
// return merge(sub1, sub2)