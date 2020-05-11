function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var length = inputForReversal.length;
  var i;

  for (i = 0; i < length; i += 1) {
    reversed[length - i - 1] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

var array = [1, 2, 3];
console.log(
  reverse('Hello'), // "olleH"
  reverse('a'), // "a"
  reverse([1, 2, 3, 4]), // [4, 3, 2, 1]
  reverse([]), // []


  reverse(array), // [3, 2, 1]
  array); // [1, 2, 3])