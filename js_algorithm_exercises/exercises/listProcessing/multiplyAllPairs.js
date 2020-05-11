function multiplyAllPairs(arr1, arr2) {
  var result = [];

  arr1.forEach(first => {
    arr2.forEach(second => {
      result.push(first * second);
    })
  });

  return result.sort((num1, num2) => {
    return num1 - num2;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]