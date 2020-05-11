var MAX_NUMBER = 9876543201;

function featured(num) {
  var i = nextMultipleOfSeven(num);
  for (i; i < MAX_NUMBER; i += 14) {
    if (isFeaturedNumber(i)) return i;
  }

  return 'There is no possible number that fulfills those requirements.';
}

function isFeaturedNumber(num) {
  var numString = String(num);
  var uniqueArray = [];
  var i;

  for (i = 0; i < numString.length; i++) {
    if (uniqueArray.includes(numString[i])) {
      return false;
    } else {
      uniqueArray.push(numString[i]);
    }
  }

  return true;
}

function nextMultipleOfSeven(num) {
  var i;

  for (i = num + 1; i < MAX_NUMBER; i++) {
    if (i % 7 === 0 && i % 2 === 1) {
      return i;
    }
  }
}

console.log(
  featured(12), // 21
  featured(20), // 21
  featured(21), // 35
  featured(997), // 1029
  featured(1029), // 1043
  featured(999999), // 1023547
  featured(999999987), // 1023456987
  featured(9876543201), // 1023456987
)