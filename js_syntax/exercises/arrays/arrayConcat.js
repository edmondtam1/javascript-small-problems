function concat() {
  var newArr = [];

  for (var i = 0; i < arguments.length; i++) {
    var currentArg = arguments[i];

    if (Array.isArray(currentArg)) {
      for (var j = 0; j < currentArg.length; j++) {
        newArr[newArr.length] = currentArg[j];
      }
    } else {
      newArr[newArr.length] = currentArg;
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]), // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  concat([1, 2], 'a', ['one', 'two']), // [1, 2, "a", "one", "two"]
  concat([1, 2], ['three'], 4)); // [1, 2, "three", 4]