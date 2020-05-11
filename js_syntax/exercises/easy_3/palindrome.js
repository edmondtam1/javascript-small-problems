function isPalindrome(str) {
  // var mid = Math.floor(str.length / 2);
  // var firstHalf = str.slice(0, mid);
  // var secondHalf;

  // if (str.length % 2 !== 0) {
  //   secondHalf = str.slice(mid + 1).split('').reverse().join('');
  // } else {
  //   secondHalf = str.slice(mid).split('').reverse().join('');
  // }

  // return firstHalf === secondHalf;

  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  str = str.toLowerCase().replace(/[^0-9a-zA-Z]/gi, '');
  return isPalindrome(str);
}

function isPalindromicNumber(num) {

  return (isPalindrome(String(num)))
}

console.log(
  isPalindrome('madam'), // true
  isPalindrome('Madam'), // false (case matters)
  isPalindrome("madam i'm adam"), // false (all characters matter)
  isPalindrome('356653'), // true
);

console.log(
  isRealPalindrome('madam'), // true
  isRealPalindrome('Madam'), // true (case does not matter)
  isRealPalindrome("Madam, I'm Adam"), // true (only alphanumerics matter)
  isRealPalindrome('356653'), // true
  isRealPalindrome('356a653'), // true
  isRealPalindrome('123ab321'), // false
);

console.log(
  isPalindromicNumber(34543), // true
  isPalindromicNumber(123210), // false
  isPalindromicNumber(22), // true
  isPalindromicNumber(034540), // true
);