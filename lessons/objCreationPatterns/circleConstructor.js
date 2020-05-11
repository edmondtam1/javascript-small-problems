function Circle(radius) {
  // this.area = function() {
  //   return Math.PI * radius ** 2
  // };

  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius ** 2;
};

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27