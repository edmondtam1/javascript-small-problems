function createObject(obj) {
  function Func() {
    this.a = 'hi';
  }
  Func.prototype = obj;
  console.log(new Func());
  return new Func();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
console.log(
  foo.isPrototypeOf(bar), // true
  bar.a, // true
  bar === foo,
  bar.prototype === foo.prototype,
  bar.prototype,
);