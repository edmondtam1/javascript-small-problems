function objectsEqual(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  var obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;
  var i;

  for (i = 0; i < obj1Keys.length; i++) {
    value1 = obj1[obj1Keys[i]];
    if (obj2Keys.indexOf(obj1Keys[i]) === -1) return false;
    if (valueUnequal(value1, obj2[obj1Keys[i]])) return false;
  }

  return true;
}

function valueUnequal(val1, val2) {
  if (Number.isNaN(val1) || Number.isNaN(val2)) {
    return Number.isNaN(val1) !== Number.isNaN(val2);
  } else if (typeof val1 === 'object' || typeof val2 === 'object') {
    objectsEqual(val1, val2);
  } else {
    return val1 !== val2;
  }
}

console.log(objectsEqual({
  a: 'foo'
}, {
  a: 'foo'
})); // true
console.log(objectsEqual({
  a: 'foo',
  b: 'bar'
}, {
  a: 'foo'
})); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({
  a: 'foo',
  b: undefined
}, {
  a: 'foo',
  c: 1
})); // false
console.log(objectsEqual({
  a: {
    b: {
      e: 5,
      f: 6,
    },
    c: 2
  },
  d: 5,
}, {
  a: {
    b: {
      e: 5,
      f: 6,
    },
    c: 2
  },
  d: 5,
}))