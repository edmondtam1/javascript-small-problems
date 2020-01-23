function User(first, last) {
  // var obj = {};
  // obj.first = first;
  // obj.last = last;
  // obj.name = (obj.first + ' ' + obj.last).trim();
  // return obj;

  // if (this.constructor !== User) {
  if (!this instanceof User) {
    return new User(first, last);
  }

  this.first = first;
  this.last = last;
  this.name = (this.first + ' ' + this.last).trim();
  return this;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe