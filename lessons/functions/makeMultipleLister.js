function makeMultipleLister(num) {
  return function() {
    if (num < 1 || num > 100) {
      return;
    } else {
      var i;
      for (i = num; i < 100; i += num) {
        console.log(i);
      }
    }
  }
}

var fifteen = makeMultipleLister(15);
fifteen();
var twenty = makeMultipleLister(20);
twenty();