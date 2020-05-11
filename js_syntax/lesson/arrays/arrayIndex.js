function arrayIndex(searchTerm, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i;
    }
  }

  return -1;
}

console.log(arrayIndex('hi', ['h', 'i', 'hi']),
  arrayIndex('b', [1, 2, 3])
);