function reverseWords(str) {
  var words = str.split(' ');

  words.map((word) => {
    if (word.length >= 5) word.split('').reverse().join('');
  })

  return words.join(' ');
}

console.log(
  reverseWords('Professional'), // "lanoisseforP"
  reverseWords('Walk around! the block'), // "Walk dnuora the kcolb"
  reverseWords('Launch School'), // "hcnuaL loohcS"
)