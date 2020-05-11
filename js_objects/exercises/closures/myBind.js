function myBind(func, context) {
  var partialArgs = [].slice.apply(arguments, [2]);

  return function() {
    var newArgs = [].slice.apply(arguments);
    var combinedArgs = partialArgs.concat(newArgs);
    return func.apply(context, combinedArgs);
  }
}

var hi = {
  name: 'abc',
}

function sayHi() {
  console.log(this.name);
  console.log(arguments);
}

var sayAbc = myBind(sayHi, hi);

sayAbc();

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15