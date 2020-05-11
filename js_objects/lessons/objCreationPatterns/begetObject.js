var foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function Func() {};
  Func.prototype = this;
  return new Func();
}

var bar = foo.begetObject();
console.log(
  foo.isPrototypeOf(bar)); // true