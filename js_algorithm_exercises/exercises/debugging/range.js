function range(start, end) {
  var range = [];
  var element;

  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }


// Examples

console.log(range(10, 20));
console.log(range(5));