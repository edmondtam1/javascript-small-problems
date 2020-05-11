function extend(destination) {
  [].slice.apply(arguments).forEach(arg => {
    Object.getOwnPropertyNames(arg).forEach(prop => {
      destination[prop] = arg[prop];
    });
  });

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x); // => 1
object.sayHello(); // => Hello, Joe