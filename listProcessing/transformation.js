function myMap(array, func) {
  var result = [];
  array.forEach((value, index, array) => {
    result.push(func(value, index, array));
  })

  return result;
}

var plusOne = function (n) {
  return n + 1;
};

console.log(myMap([1, 2, 3, 4], plusOne)); // [ 2, 3, 4, 5 ]