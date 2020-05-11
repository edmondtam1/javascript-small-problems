// function binarySearch(array, searchItem) {
//   var low = 0;
//   var mid;
//   var high = array.length - 1;

//   while (low <= high) {
//     var mid = low + Math.floor((high - low) / 2);
//     if (array[mid] === searchItem) {
//       return mid;
//     } else if (array[mid] < searchItem) {
//       low = mid + 1;
//     } else if (array[mid] > searchItem) {
//       high = mid - 1;
//     }
//   }

//   return -1;
// }

function binarySearch(array, searchItem, low = 0, high = array.length - 1) {
  var mid = low + Math.floor((high - low) / 2);

  // "the bottom"
  if (high < low) return -1;

  // also "the bottom"
  if (array[mid] === searchItem) {
    return mid;
  } else if (array[mid] < searchItem) { // do something
    low = mid + 1;
  } else if (array[mid] > searchItem) {
    high = mid - 1;
  }

  // do something each iteration and recurse
  return binarySearch(array, searchItem, low, high);
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
console.log(
  binarySearch(yellowPages, 'Pizzeria'), // 7
  binarySearch(yellowPages, 'Apple Store'), // 0

  binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77), // -1
  binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89), // 7
  binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5), // 1

  binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'), // -1
  binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'), // 6

)