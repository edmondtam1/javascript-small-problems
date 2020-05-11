function checkGoldbach(num) {
  if (num % 2 === 1 || num < 4) {
    console.log(null);
    return;
  }

  for (var i = 2; i <= num / 2; i++) {
    if (!isPrime(i)) {
      continue;
    } else if (isPrime(num - i)) {
      console.log(`${i} ${num - i}`)
    }
  }
}

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

checkGoldbach(100);