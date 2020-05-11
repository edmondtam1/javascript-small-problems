function minilang(string) {
  var stack = [];
  var register = 0;
  var commands = string.split(' ').reverse(); // can use a forEach loop instead, no need to reverse()

  while (commands.length > 0) {
    var nextAction = commands.pop();
    if (/^\d*$/g.test(nextAction)) {
      register = Number(nextAction);
    } else if (nextAction === 'PRINT') {
      console.log(register);
    } else if (nextAction === 'PUSH') {
      stack.push(register);
    } else if (nextAction === 'ADD') {
      register += stack.pop();
    } else if (nextAction === 'SUB') {
      register -= stack.pop();
    } else if (nextAction === 'MULT') {
      register *= stack.pop();
    } else if (nextAction === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (nextAction === 'MOD') {
      register = Math.floor(register % stack.pop());
    } else if (nextAction === 'POP') {
      register = stack.pop();
    } else {
      return new Error('Invalid token');
    }
  }
}


// examples

console.log(
  minilang('PRINT'),
  // 0

  minilang('PRINT 3 PUSH PRINT ADD PRINT asdf'),
  // 0 3 6

  minilang('5 PUSH 3 MULT PRINT'),
  // 15

  minilang('5 PRINT PUSH 3 PRINT ADD PRINT'),
  // 5
  // 3
  // 8

  minilang('5 PUSH POP PRINT'),
  // 5

  minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'),
  // 5
  // 10
  // 4
  // 7

  minilang('3 PUSH PUSH 7 DIV MULT PRINT'),
  // 6

  minilang('4 PUSH PUSH 7 MOD MULT PRINT'),
  // 12

  minilang('-3 PUSH 5 SUB PRINT'),
  // 8

  minilang('6 PUSH'),
  // (nothing is printed because the `program` argument has no `PRINT` commands)
)

// data structure
// array for commands
// array for stack
// number for register

// algo
// split the commands into the commandArray
// loop through each and identify if:
// it is a number => place as register
// PUSH => push register value onto stack, do not modify register
// ADD/SUB/MULT/DIV/MOD => pop a value from stack and operate on register, store result as integer on register
// POP => pop stack and put value on register
// PRINT => print the register value