function rollCall(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function rollCallReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

rollCall(['Steve', 'Martha', 'Pat']);
rollCallReverse(['Steve', 'Martha', 'Pat']);