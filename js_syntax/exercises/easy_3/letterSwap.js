function swap(str) {
  return str.split(' ').map(function (word) {
    if (word.length > 1) {
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    } else {
      return word;
    }
  }).join(' ');
}

console.log(
  swap('Oh what a wonderful day it is'), // "hO thaw a londerfuw yad ti si"
  swap('Abcde'), // "ebcdA"
  swap('a'), // "a"
);