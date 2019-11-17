function isEmpty(value) {
  var type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (type === 'object') {
    console.log(Object.keys(value));
    // if (Array.isArray(value) && Object.keys(value).length === 0) return true;
    return Object.keys(value).length === 0;
  }
}

var a = []
a[-1] = 2
a.length = 0;
console.log(a);
console.log(Object.keys(a).length);
// current test cases
console.log(
  isEmpty({}), // true
  isEmpty({
    name: 'Janice'
  }), // false

  isEmpty(''), // true
  isEmpty('Janice'), // false

  isEmpty([]), // true
  isEmpty(['Janice']), // false
  isEmpty(a),
);