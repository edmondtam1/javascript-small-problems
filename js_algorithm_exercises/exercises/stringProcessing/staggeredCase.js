function staggeredCase(string) {
  var count = 0;
  return string.split('').map((char) => {
    if (/[a-z]/i.test(char)) {
      if (count % 2 === 0) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }

      count++;
      return char;
    } else {
      return char;
    }
  }).join('');
}

console.log(
  staggeredCase('I Love Launch School!'), // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS'), // "AlL_CaPs"
  staggeredCase('ignore 77 the 444 numbers'), // "IgNoRe 77 ThE 444 NuMbErS"
);