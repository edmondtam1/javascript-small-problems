function arrayConcat(arr) {
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    result += String(arr[i]);
  }

  return result;
}