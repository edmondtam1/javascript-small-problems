function copyProperties(obj1, obj2) {
  var count = 0;
  for (var prop in obj1) {
    obj2[prop] = obj1[prop];
    count += 1;
  }
  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(
  copyProperties(hal, sal), // 2
  sal, // { model: 9000, enabled: true }
);