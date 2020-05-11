function railFenceEncoder(string, railNum) {
  if (string.length === 0) return '';
  var resultArray = generateRailEncoder(string, railNum);
  var result = '';
  var i;

  for (i = 0; i < railNum; i++) {
    var j;
    for (j = 0; j < resultArray.length; j++) {
      if (resultArray[j][i] !== '.') result += resultArray[j][i];
    }
  }

  return result;
}

function generateRailEncoder(string, railNum) {
  var resultArray = [];
  var i;

  for (i = 0; i < string.length; i++) {
    var tempArray = new Array(railNum).fill('.');
    tempArray[getEncodePosition(i, railNum)] = string[i];
    resultArray.push(tempArray);
  }

  return resultArray;
}

function railFenceDecoder(string, railNum) {
  if (string.length === 0) return '';
  var resultArray = generateRailDecoder(string, railNum);
  var result = '';
  var i;
  var j;
  for (j = 0; j < string.length; j++) {
    for (i = 0; i < resultArray.length; i++) {
      if (resultArray[i][j] !== '.') result += resultArray[i][j];
    }
  }

  return result;
}

function generateRailDecoder(string, railNum) {
  var resultArray = [];
  var i = 0;
  var j;

  for (j = 0; j < railNum; j++) {
    var tempArray = new Array(string.length).fill('.');
    var decodePositions = getDecodePosition(j, railNum, string.length);
    for (position of decodePositions) {
      tempArray[position] = string[i];
      i++;
    }
    resultArray.push(tempArray);
    if (i >= string.length) break;
  }

  return resultArray;
}

function getDecodePosition(railRow, railNum, stringLength) {
  var positions = [];
  var pos = railRow;
  if (railNum === 1) {
    var i;
    for (i = 0; i < stringLength; i++) {
      positions.push(i);
    }
    return positions;
  }

  while (pos < stringLength) {
    positions.push(pos);
    pos += (railNum - 1) * 2;
  }

  if (!(railRow === 0 || railRow === (railNum - 1))) {
    pos = railRow + (railNum - 1 - railRow) * 2;
    while (pos < stringLength) {
      positions.push(pos);
      pos += (railNum - 1) * 2;
    }
  }

  return positions.sort((num1, num2) => {
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    } else {
      return 0;
    }
  });
}

function getEncodePosition(index, railNum) {
  if (railNum === 1) return 0;
  var remainder = index % ((railNum - 1) * 2);
  if (remainder > (railNum - 1)) {
    return 2 * (railNum - 1) - remainder;
  } else {
    return remainder;
  }
}

// problem: rail fence cipher
// both encoding and decoding take a string message and # of rails
// input: string message, # of rails
// output: string message, # of rails

// test cases

console.log(
  railFenceEncoder('One rail, only one rail', 1), // returns 'One rail, only one rail'
  railFenceEncoder('XOXOXOXOXOXOXOXOXO', 2), // returns 'XXXXXXXXXOOOOOOOOO'
  railFenceEncoder('WEAREDISCOVEREDFLEEATONCE', 3), // returns 'WECRLTEERDSOEEFEAOCAIVDEN'
  railFenceEncoder('WEAREDIS', 3), // returns 'WEERDSAI'
  railFenceEncoder('THEDEVILISINTHEDETAILS', 3), // returns 'TEITELHDVLSNHDTISEIIEA'
  railFenceEncoder('THEDEVILISINTHEDETAILS', 6), // returns 'TILHSNISEITADLHTEIEEVD'
  railFenceEncoder('EXERCISES', 4), // returns 'ESXIEECSR'
  railFenceEncoder('ESXIEECSR', 4), // returns 'ECSESXERI'
  railFenceEncoder('More rails than letters', 24), // returns 'More rails than letters'
  railFenceDecoder('', 4), // returns ''
  railFenceDecoder('ABCDEFGHIJKLMNOP', 1), // returns 'ABCDEFGHIJKLMNOP'
  railFenceDecoder('XXXXXXXXXOOOOOOOOO', 2), // returns 'XOXOXOXOXOXOXOXOXO'
  railFenceDecoder('TEITELHDVLSNHDTISEIIEA', 3), // returns 'THEDEVILISINTHEDETAILS'
  railFenceDecoder('TILHSNISEITADLHTEIEEVD', 6), // returns 'THEDEVILISINTHEDETAILS'
  railFenceEncoder(railFenceDecoder('WEAREDISCOVEREDFLEEATONCE', 3), 3), // returns 'WEAREDISCOVEREDFLEEATONCE'
  railFenceDecoder(railFenceEncoder('WEAREDISCOVEREDFLEEATONCE', 3), 3) // returns 'WEAREDISCOVEREDFLEEATONCE'
)

// data structure
// convert string to array of vertical sub-arrays
// convert sub-arrays to string based on their index
// return string

// algo
// take number of rails (railNum) and use it to create array of num-sized arrays with string.length
// fill each sub-array with a dot or a letter from string based on the sub-array's position
//   for eg, x-axis position of 3 and railNum of 4 means letter goes into sub-array index of 2
//   x-axis position of 6 and railNum of 3 means letter goes into sub-array index of 1

// 0 1 2 3 4 --> x-axis
// 0 0 0 0 0
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// y-axis