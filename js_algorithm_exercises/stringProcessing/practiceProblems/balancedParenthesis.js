function isBalanced(string) {
  var count = 0;
  var i;

  for (i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      count++;
    } else if (string[i] === ')') {
      count--;
      if (count < 0) return false;
    }
  }

  return count === 0;
}

console.log(
  isBalanced('What (is) this?'), // true
  isBalanced('What is) this?'), // false
  isBalanced('What (is this?'), // false
  isBalanced('((What) (is this))?'), // true
  isBalanced('((What)) (is this))?'), // false
  isBalanced('Hey!'), // true
  isBalanced(')Hey!('), // false
  isBalanced('What ((is))) up('), // false
)