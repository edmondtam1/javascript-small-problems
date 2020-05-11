// function fizzBuzz() {
//   var i;
//   for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }
// }

function fizzBuzz() {
  var i;
  var message;

  for (i = 1; i <= 100; i++) {
    message = '';

    if (i % 5 == 0) {
      message += 'Fizz';
    }

    if (i % 3 == 0) {
      message += 'Buzz';
    }

    console.log(message || i);
  }
}

fizzBuzz();