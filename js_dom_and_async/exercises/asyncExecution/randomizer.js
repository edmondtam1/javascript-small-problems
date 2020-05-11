function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function callback4() {
  console.log('callback4');
}

function callback5() {
  console.log('callback5');
}

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }

function randomizer(callbacks) {
  var seconds = 1;
  var callbacks = [].slice.call(arguments);
  // shuffleArray(callbacks);

  var maxDuration = 2 * callbacks.length;
  var timeLogger = setInterval(function() {
    console.log(seconds);
    seconds++;

    if (seconds > maxDuration) {
      clearInterval(timeLogger);
    }
  }, 1000);

  for (var i = 0; i < callbacks.length; i++) {
    var callTime = (Math.floor(Math.random() * maxDuration) + 1) * 1000;
    setTimeout(callbacks[i], callTime);
  }
}

randomizer(callback1, callback2, callback3, callback4, callback5);