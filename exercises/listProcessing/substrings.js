function substringsAtStart(string) {
  return string.split('').map((_, idx) => {
    return string.slice(0, idx + 1);
  });
}

function substrings(string) {
  return string.split('').map((_, index) => {
    return string.slice(index, string.length);
  }).map(string => {
    return substringsAtStart(string);
  }).flat();
}

function palindromes(string) {
  return substrings(string).filter(value => {
    return value.length > 1 && value === value.split('').reverse().join('');
  })
}

// console.log(
//   substringsAtStart('abc'), // ["a", "ab", "abc"]
//   substringsAtStart('a'), // ["a"]
//   substringsAtStart('xyzzy'), // ["x", "xy", "xyz", "xyzz", "xyzzy"]
// );

// console.log(
//   substrings('abcde')

//   // returns
//   // [ "a", "ab", "abc", "abcd", "abcde",
//   //   "b", "bc", "bcd", "bcde",
//   //   "c", "cd", "cde",
//   //   "d", "de",
//   //   "e" ]
// );

console.log(
  palindromes('abcd'), // []
  palindromes('madam'), // [ "madam", "ada" ]

  palindromes('hello-madam-did-madam-goodbye'),
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo" ]

  palindromes('knitting cassettes'),
  // returns
  // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
);