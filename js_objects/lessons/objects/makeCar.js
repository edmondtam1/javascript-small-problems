function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate: accelRate,
    brakeRate: brakeRate,
    brake: function() {
      var newSpeed = this.speed - this.brakeRate;
      this.speed = newSpeed < 0 ? 0 : newSpeed;
    },
    accelerate: function() {
      this.speed += this.accelRate;
    },
  }
}

var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
// = 8
sedan.brake();
console.log(sedan.speed);

var coupe = makeCar(12, 4);
coupe.accelerate();
console.log(coupe.speed);
// = 12

var hatchback = makeCar(9, 6);