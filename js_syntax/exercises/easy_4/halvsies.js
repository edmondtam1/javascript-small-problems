function halvsies(arr) {
  var arr1 = [];
  var mid;

  mid = Math.ceil(arr.length / 2);
  arr1 = arr.splice(0, mid);

  return [arr1, arr];
}

console.log(
  halvsies([1, 2, 3, 4]), // [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]), // [[1, 5, 2], [4, 3]]
  halvsies([5]), // [[5], []]
  halvsies([]), // [[], []]
);