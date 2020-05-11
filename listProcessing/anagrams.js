function anagram(word, list) {
  var wordLetters = letterCounts(word);
  return list.filter((nextWord) => {
    var letters = letterCounts(nextWord)
    return equivalentObjects(letters, wordLetters);
  })
}

function letterCounts(word) {
  return word.split('').reduce((obj, curr) => {
    if (!obj[curr]) obj[curr] = 0;
    obj[curr] += 1;
    return obj;
  }, {});
}

function equivalentObjects(obj1, obj2) {
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (var i = 0; i < keys1.length; i++) {
    if (obj1[keys1[i]] !== obj2[keys1[i]]) return false;
  }

  return true;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']), // [ "inlets" ]
  anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]