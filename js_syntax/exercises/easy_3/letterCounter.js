function wordSizes(str) {
  var result = {};

  for (word of str.split(' ')) {
    if (word === '') continue;
    var length = String(word.replace(/[^a-z]/gi, '').length);
    if (!result[length]) {
      result[length] = 0;
    }

    result[length] += 1;
  }

  return result;
}

// console.log(
//   wordSizes('Four score and seven.'), // { "3": 1, "4": 1, "5": 1, "6": 1 }
//   wordSizes('Hey diddle diddle, the cat and the fiddle!'), // { "3": 5, "6": 1, "7": 2 }
//   wordSizes("What's up doc?"), // { "2": 1, "4": 1, "6": 1 }
//   wordSizes(''), // {}
// )

console.log(
  wordSizes('Four score and seven.'), // { "3": 1, "4": 1, "5": 2 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'), // { "3": 5, "6": 3 }
  wordSizes("What's up doc?"), // { "5": 1, "2": 1, "3": 1 }
  wordSizes(''), // {}
);