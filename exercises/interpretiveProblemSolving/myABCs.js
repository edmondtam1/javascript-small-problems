function isBlockWord(string) {
  var spellingBlocks = {
    'bo': false,
    'xk': false,
    'dq': false,
    'cp': false,
    'na': false,
    'gt': false,
    're': false,
    'fs': false,
    'jw': false,
    'hu': false,
    'vi': false,
    'ly': false,
    'zm': false,
  }

  var blockArray = Object.keys(spellingBlocks);
  var i;
  var j;
  if (typeof string !== 'string') return false;

  for (i = 0; i < string.length; i++) {
    for (j = 0; j < blockArray.length; j++) {
      if (blockArray[j].includes(string[i].toLowerCase())) {
        if (spellingBlocks[blockArray[j]]) {
          return false;
        } else {
          spellingBlocks[blockArray[j]] = true;
          continue;
        }
      }
    }
  }
  return true;
}

// problem: check whether a string can be formed without using more than 1 letter from an "alphabet pair"
// an alphabet pair is a problem-defined combination of letters:
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// test cases

console.log(
  // happy paths
  isBlockWord('BATCH'), // true
  isBlockWord('BUTCH'), // false
  isBlockWord('jest'), // true
  isBlockWord(''), // true
  isBlockWord('bo'), // false
  isBlockWord('floW'), // true
  isBlockWord('APPLE'), // false
  isBlockWord('apple'), // false
  isBlockWord('apPLE'), // false
  isBlockWord('Box'), // false

  // edge cases
  isBlockWord([]), // false
  isBlockWord(123), //false

)

// data structure + algo
// object for letter blocks
// looping through object keys to find which letter matches
// changing object key's value to true => it has been used
// if it has been used and the key is used again, return false
// once all characters have been looped through and no duplicates found, return true