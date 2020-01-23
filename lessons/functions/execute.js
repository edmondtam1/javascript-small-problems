function execute(func, operand) {
  return func(operand);
}

console.log(
  execute(function(number) {
    return number * 2;
  }, 10), // 20

  execute(function(string) {
    return string.toUpperCase();
  }, 'hey there buddy'), // "HEY THERE BUDDY"
);