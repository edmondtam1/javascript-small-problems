function wordCount(str) {
  var obj = {};
  var words = str.split(' ');

  for (word of words) {
    if (!obj[word]) {
      obj[word] = 0;
    }
    obj[word] += 1;
  }

  return obj;
}

console.log(wordCount('box car cat bag box')); // { box: 2, car: 1, cat: 1, bag: 1 }