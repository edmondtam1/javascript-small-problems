function crunch(str) {
  // var result = '';

  // Iterative loop

  // for (var i = 0; i < str.length; i++) {
  //   if (result[result.length - 1] !== str[i]) {
  //     result += str[i];
  //   }
  // }

  // return result;

  // Regex solution

  return str.replace(/(.)\1*/gi, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee'), // "daily double"
  crunch('4444abcabccba'), // "4abcabcba"
  crunch('ggggggggggggggg'), // "g"
  crunch('a'), // "a"
  crunch('')
);