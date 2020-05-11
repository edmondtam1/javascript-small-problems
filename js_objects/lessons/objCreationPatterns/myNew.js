function neww(constructor, args) {
  var obj = Object.create(constructor.prototype); // create a new object using the constructor's prototype object
  var result = constructor.apply(obj, args); // returns undefined because the Person function has no explicit return

  return typeof result === 'object' ? result : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
console.log(john);
john.greeting(); // => Hello, John Doe
john.constructor; // Person(firstName, lastName) {...}