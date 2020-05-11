function greet(greeting, name) {
  console.log(`${capitalize(greeting)}, ${capitalize(name)}!`);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function greetingGenerator(func, greeting) {
  return function(name) {
    return func(greeting, name);
  }
}

greet('howdy', 'joe');
greet('good morning', 'Sue');

var sayHello = greetingGenerator(greet, 'Hello');
var sayHi = greetingGenerator(greet, 'Hi');

sayHello('Brandon');
sayHi('Sarah');