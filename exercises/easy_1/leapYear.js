function isLeapYear(num) {
  return (num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0) || (num <= 1752 && num % 4 === 0);
}

console.log(isLeapYear(2016), // true
  isLeapYear(2015), // false
  isLeapYear(2100), // false
  isLeapYear(2400), // true
  isLeapYear(240000), // true
  isLeapYear(240001), // false
  isLeapYear(2000), // true
  isLeapYear(1900), // false
  isLeapYear(1752), // true
  isLeapYear(1700), // false
  isLeapYear(1), // false
  isLeapYear(100), // false
  isLeapYear(400)); // true