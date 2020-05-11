function century(num) {
  var centuryNum = Math.floor((num - 1) / 100) + 1;
  var suffix = '';
  if (centuryNum % 100 > 10 && centuryNum % 100 < 20) {
    suffix = 'th';
  } else if (centuryNum % 10 === 1) {
    suffix = 'st';
  } else if (centuryNum % 10 === 2) {
    suffix = 'nd';
  } else if (centuryNum % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return centuryNum + suffix;
}

console.log(
  century(2000), // "20th"
  century(2001), // "21st"
  century(1965), // "20th"
  century(256), // "3rd"
  century(5), // "1st"
  century(1), // "1st"
  century(10103), // "102nd"
  century(1052), // "11th"
  century(1127), // "12th"
  century(11201) // "113th"
);