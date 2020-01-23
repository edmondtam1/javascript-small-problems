function fridayThe13ths(year) {

  var count = 0;
  var i;

  // 12 months in a year
  for (i = 1; i <= 12; i++) {
    var date = new Date(`${i}/13/${year}`);
    if (date.getDay() === 5) count += 1;
  }

  return count;
}

console.log(
  fridayThe13ths(1986), // 1
  fridayThe13ths(2015), // 3
  fridayThe13ths(2017), // 2
)

// data structures & algo
// date object for the year
// count = 0
// loop through months of the year and see if the 13th is a friday
// if true add to count
// return count