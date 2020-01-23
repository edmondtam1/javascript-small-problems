function myReduce(array, func, initial) {
  var value;
  var index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(function (element) {
    value = func(value, element);
  });

  return value;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest), // 1
  myReduce([5, 12, 15, 1, 6], sum, 10), // 49
  myReduce([1], sum, 1)); // 2