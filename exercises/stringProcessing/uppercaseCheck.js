function isUppercase(str) {
  return !/[a-z]+/.test(str);
}

console.log(
  isUppercase('t'), // false
  isUppercase('T'), // true
  isUppercase('Four Score'), // false
  isUppercase('FOUR SCORE'), // true
  isUppercase('4SCORE!'), // true
  isUppercase(''), // true
)