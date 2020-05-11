function newStack() {
  var stack = [];

  return {
    push: function(value) {
      stack.push(value);
    },

    pop: function() {
      return stack.pop();
    },

    printStack: function() {
      stack.forEach(value => console.log(value));
    }
  }
}

var stack = newStack();

stack.push('hi');
stack.push('there');
stack.push('dude');
stack.pop();
stack.printStack();