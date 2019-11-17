function shortLongShort(first, second) {
  if (first.length < second.length) {
    return first + second + first;
  } else {
    return second + first + second;
  }
}

console.log(shortLongShort('abc', 'defgh'), // "abcdefghabc"
  shortLongShort('abcde', 'fgh'), // "fghabcdefgh"
  shortLongShort('', 'xyz'), );