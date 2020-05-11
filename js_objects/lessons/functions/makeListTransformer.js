function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(
  timesTwo([1, 2, 3, 4]), // [2, 4, 6, 8]
);