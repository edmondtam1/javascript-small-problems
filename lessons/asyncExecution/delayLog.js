// function delayLog() {
//   for (var i = 1; i <= 10; i++) {
//     printNumber(i);
//   }
// }

// function printNumber(num) {
//   setTimeout(function() {
//     console.log(num);
//   }, num * 1000);
// }

// setTimeout(function() { // 1
//   console.log('Once'); // 5
// }, 1000);

// setTimeout(function() { // 2
//   console.log('upon'); // 7
// }, 3000);

// setTimeout(function() { // 3
//   console.log('a'); // 6
// }, 2000);

// setTimeout(function() { // 4
//   console.log('time'); // 8
// }, 4000);

// function afterNSeconds(callback, duration) {
//   setTimeout(callback, duration * 1000);
// }

// function logStuff(phrase) {
//   console.log(phrase);
// }

// afterNSeconds(logStuff, 1);

function startCounting() {
  var num = 1;
  var id = setInterval(function() {
    console.log(num);
    num++;
  }, 1000);
  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

var count = startCounting();