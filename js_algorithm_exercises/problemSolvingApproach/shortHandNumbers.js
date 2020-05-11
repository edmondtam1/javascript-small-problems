function shortHand(string) {
  var resultArray = [];
  var stringArray = cleanString(string);

  stringArray.forEach((item, index) => {
    var isRange = [':', '-', '.'].includes(item[item.length - 1]);
    item = isRange ? removeRangeNotation(item) : item;
    if (index !== 0) {
      item = nextLargestNumber(item, resultArray[resultArray.length - 1]);
    }

    if (isRange) {
      var i;
      var nextNum = nextLargestNumber(removeRangeNotation(stringArray[index + 1]), item);
      for (i = item; i < nextNum; i++) {
        resultArray.push(Number(i));
      }
    } else {
      resultArray.push(Number(item));
    }
  });

  return resultArray;
}

function cleanString(string) {
  return string.split(', ').join(' ').match(/\d+(\:|\-|\.\.)?/g);
}

function removeRangeNotation(string) {
  return string.replace(/\D/g, '');
}

function nextLargestNumber(currentItem, prevItem) {
  var prevNum = Number(prevItem);
  var currNum = 0;
  var i;
  var startingIndex = Math.floor(prevNum / (10 ** String(currentItem).length));
  for (i = startingIndex; i < Infinity; i++) {
    currNum = Number(String(i) + currentItem);
    if (currNum > prevNum) return currNum;
  }
}

// problem: given an array of numbers in 'short-hand' notation
// key separators denoting a range of numbers: '-', ':', '..'
// separator denotating individual numbers: ','
// input: string of numbers or strings representing integers
// output: array of all integers represented by input

// test cases - no need for string validation

console.log(
  shortHand('1, 3, 7, 2, 4, 1'), // returns [1, 3, 7, 12, 14, 21]
  shortHand('1-3, 1-2'), // returns [1, 2, 3, 11, 12]
  shortHand('1:5:2'), // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  shortHand('104-2'), // returns [104, 105, 106, 107, 108, 109, 110, 111, 112]
  shortHand('104-02'), // returns [104, 105, ... , 201, 202]
  shortHand('545, 64:11'), // returns [545, 564, 565, ... , 610, 611]
  shortHand('545, 64..11'), // returns [545, 564, 565, ... , 610, 611]
  shortHand('5, 6..11..3, 2..2, 47..105'), // returns [...]
  shortHand('5, 5, 693:5:5:5:5'), // returns [...]
  shortHand('5234234234, 5:5:5:5:5:5'), // returns [...]
)

// data structure
// breaking down the string into its component numbers and symbols and enter into an array
// create an empty array to start with (resultArray)

// algo
// clean data
// form array comprising only of digits and range notation
// remove spaces and ','
// go through each item in the array
// if it is a number, check if the number is bigger than previous number
// if not bigger, find the next largest number that ends with this number (num)
// look for the next item: if it is '-', ':' or '..' then find the next number (nextNum)
//   loop through from num to nextNum and pass in all integers 
// if it is not a separator, push num to resultArray