var numbers = [1, 2, 3, 4];

function makeCheckEven() {
  return function(val) {
    return val % 2 === 0;
  }
}

var checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]