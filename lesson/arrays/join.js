function join(arr, str) {
  var result = '';

  for (var i = 0; i < arr.length - 1; i++) {
    result += String(arr[i]) + str;
  }

  if (arr) result += arr[arr.length - 1];

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '), // 'brick truck wha'
  join([1, 2, 3], ' and '));