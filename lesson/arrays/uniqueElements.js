function uniqueElements(arr) {
  var set = new Set();

  for (var i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) set.add(arr[i]);
  }

  return Array.from(set);
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));