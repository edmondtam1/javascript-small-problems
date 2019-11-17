function isXor(first, second) {
  return ((!!first && !second) || (!first && !!second));
}

console.log(isXor(false, true)); // true
console.log(isXor(false, 3));
console.log(isXor(null, ''));