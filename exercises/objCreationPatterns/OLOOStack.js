var Stack = {
  push: function(value, data) {
    data.push(value);
  },

  pop: function(data) {
    return data.pop();
  },

  print: function(data) {
    console.log(data.toString());
  },

  init: function() {
    var data = [];

    var handler = {
      get: (self, prop) => {
        // get prototype of target object
        var proto = Object.getPrototypeOf(self);

        // boolean on whether target owns this property
        var selfHasOwnProp = Object.prototype.hasOwnProperty.call(self, prop);

        // boolean on whether target can access this property
        var selfHasProp = self[prop] !== undefined;
        console.log('***', self, proto, selfHasOwnProp, selfHasProp);
        // console.log('data: ' + data);

        if (!selfHasOwnProp && selfHasProp) {
          return (...args) => proto[prop].apply(self, args.concat([data]));
        } else {
          console.log(`${self} and ${prop}`);
          return self[prop];
        }
      }
    }

    return new Proxy(this, handler);
  },
};

var stack1 = Object.create(Stack).init();
var stack2 = Object.create(Stack).init();
var stack1Proto = Object.getPrototypeOf(stack1);
var stack2Proto = Object.getPrototypeOf(stack2);

// Stack instances have their own separate data
stack1.push('a');
stack1.push('b');
stack2.push(1);
stack1.print(); // logs 'a,b'
stack2.print(); // logs '1'

// Stack instance data is private
console.log(stack1.data === undefined); // logs true
console.log(stack1Proto.data === undefined); // logs true

// Stack instances have Stack as prototype
console.log(stack1Proto === stack2Proto); // logs true
console.log(stack1Proto === Stack); // logs true

// Behaviour is defined on Stack prototype, not on instances
console.log(!stack1.hasOwnProperty('print')); // logs true
console.log(!stack2.hasOwnProperty('print')); // logs true
console.log('Stack prototype ' + Object.getOwnPropertyNames(Stack));
console.log(Stack.hasOwnProperty('print')); // logs true

// Can set properties on Stack instances
stack1.name = 'Stack 1';
console.log(stack1.name); // logs 'Stack 1'

// Can change existing method on Stack prototype
Stack.print = function() {
  console.log('Changed existing method');
}
stack2.print(); // logs 'Changed existing method'

// Can attach new method to Stack prototype that uses data parameter
Stack.length = function(data) {
  return data.length;
}
console.log(stack1.length()); // logs 2 (stack1 has two elements)
console.log(stack2.length()); // logs 1 (stack2 has one element)