// function shallowCopy(object) {
//   var copy = Object.create(Object.getPrototypeOf(object));

//   Object.getOwnPropertyNames(object).forEach(name => {
//     copy[name] = object[name];
//   });

//   return copy;
// }

function shallowCopy(object) {
  var result = Object.create(Object.getPrototypeOf(object));
  var prop;

  for (prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      result[prop] = object[prop];
    }
  }

  return result;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};
bar.d = {
  e: 'hi'
};

var baz = shallowCopy(bar);
console.log(baz.a); // => 1
baz.say(); // => c is 3
console.log(baz);
console.log(
  baz.hasOwnProperty('a'), // false
  baz.hasOwnProperty('b')); // false