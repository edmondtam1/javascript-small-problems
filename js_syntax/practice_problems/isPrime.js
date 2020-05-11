function isPrime(num) {
  var i;

  if (num <= 1 || (num % 2 === 0)) {
    return false;
  }

  for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(13));
console.log(isPrime(27));
console.log(isPrime(991));