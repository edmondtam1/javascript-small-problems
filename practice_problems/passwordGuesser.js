// Need to work out how to take input 

var password = 'password';
var failedAttempts = 0;
var guess;

do {
  guess = prompt('What is the password:');

  if (guess === password) {
    break;
  }

  failedAttempts += 1;
} while (failedAttempts < 3);

if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}

// var password = 'password';
// var failedAttempts = 0;
// var guess;

// var prompt = require('prompt');

// prompt.start();

// function getInput() {
//   prompt.get('input', function (err, result) {
//     if (err) {
//       console.log(err);
//       return null;
//     }
//     return result.input;
//   });
// }

// while (failedAttempts < 3) {
//   console.log('What is your password: ')
//   guess = getInput();

//   if (guess === password) {
//     break;
//   } else {
//     failedAttempts += 1;
//   }
// }

// if (failedAttempts === 3) {
//   console.log('You have been denied access.');
// } else {
//   console.log('Welcome in!');
// }

// prompt.stop();

// var password = 'password';
// var failedAttempts = 0;
// var guess = 'start';

// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'What is your password: '
// });

// rl.prompt();

// rl.on('line', (line) => {
//   while (failedAttempts < 3) {
//     if (line.trim() === password) {
//       console.log('You have successfully logged in.')
//       rl.close();
//     } else {
//       console.log('Please try again.')
//       failedAttempts++;
//       if (failedAttempts === 3) rl.close();
//       rl.prompt();
//     }
//   }
// }).on('close', () => {
//   if (failedAttempts === 3) {
//     console.log('You have been locked out.');
//   } else {
//     console.log('Have a great day!');
//   }
//   process.exit(0);
// });