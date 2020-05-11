function indexOf(firstString, secondString) {
  var index = -1;

  if (secondString.length === 0) return index;

  for (var i = 0; i <= firstString.length - secondString.length; i++) {
    if (firstString[i] === secondString[0]) {

      var flag = true;

      for (var j = 0; j < secondString.length; j++) {
        if (firstString[i + j] !== secondString[j]) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }
      if (flag) {
        index = i;
        break;
      }
    }
  }

  console.log(index);
}

function lastIndexOf(firstString, secondString) {
  var index = -1;

  if (secondString.length === 0) return index;

  for (var i = 0; i <= firstString.length - secondString.length; i++) {
    if (firstString[i] === secondString[0]) {

      var flag = true;

      for (var j = 0; j < secondString.length; j++) {
        if (firstString[i + j] !== secondString[j]) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }
      if (flag) {
        index = i;
      }
    }
  }

  console.log(index);
}

indexOf('Some strings', 's'); // 5
indexOf('Blue Whale', 'Whale'); // 5
indexOf('Blue Whale', 'Blute'); // -1
indexOf('Blue Whale', 'leB'); // -1

lastIndexOf('Some strings', 's'); // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale'); // 19
lastIndexOf('Blue Whale, Killer Whale', 'all'); // -1