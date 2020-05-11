function compareVersions(version1, version2) {
  if (!validString(version1) || !validString(version2)) return null;
  var arr1 = parseVersion(version1);
  var arr2 = parseVersion(version2);
  var i;

  for (i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    arr1[i] = arr1[i] || 0;
    arr2[i] = arr2[i] || 0;
    if (arr1[i] > arr2[i]) {
      return 1;
    } else if (arr1[i] < arr2[i]) {
      return -1;
    }
  }

  return 0;
}

function validString(string) {
  return /^[0-9]+(\.[0-9]+)*$/gm.test(string);
}

function parseVersion(string) {
  // return string.split('.').map(Number);

  return string.split('.').map(num => {
    return Number(num);
  })
}

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// problem: comparing two strings comprised of numbers and dots
// each string represents a version number with descending value per dot

// test cases / examples

console.log(
  compareVersions('0.1', '1.0'), // returns -1
  compareVersions('', '1.0'), // returns null
  compareVersions('1.0 2', '1.0'), // returns null
  compareVersions('1.0 a', '1.0'), // returns null
  compareVersions('1.`', '1.0'), // returns null
  compareVersions('1.', '1.0'), // returns null
  compareVersions('0.1', '0.1.0'), // returns 0
  compareVersions('12.1', '1.3'), // returns 1
  compareVersions('1.2', '1.2.0.0'), // returns 0
  compareVersions('1.2', '1.18.2'), // returns -1
  compareVersions('1.18.2', '13.37'), // returns -1
  compareVersions('13.37', '1.37'), // returns 1
);

console.log(compareVersions('1', '1')); // 0
console.log(compareVersions('1.1', '1.0')); // 1
console.log(compareVersions('2.3.4', '2.3.5')); // -1
console.log(compareVersions('1.a', '1')); // null
console.log(compareVersions('.1', '1')); // null
console.log(compareVersions('1.', '2')); // null
console.log(compareVersions('1..0', '2.0')); // null
console.log(compareVersions('1.0', '1.0.0')); // 0
console.log(compareVersions('1.0.0', '1.1')); // -1
console.log(compareVersions('1.0', '1.0.5')); // -1


// data structure: form two arrays of integers from the string

// algorithm: compare the arrays one at a time, looping through the same array indexes
// at index i, compare each number and evaluate to be -1, 0 or 1. if it is -1 or 1, return this value
// if index i returns 0, compare index i + 1 until 