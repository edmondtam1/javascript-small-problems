function twice(num) {
  var numString = String(num);
  var mid = Math.floor(numString.length / 2);

  if (numString.substring(0, mid) !== numString.substring(mid, numString.length)) {
    return num * 2;
  } else {
    return num;
  }
}

console.log(twice(37), // 74
  twice(44), // 44
  twice(334433), // 668866
  twice(444), // 888
  twice(107), // 214
  twice(103103), // 103103
  twice(3333), // 3333
  twice(7676)); // 7676)