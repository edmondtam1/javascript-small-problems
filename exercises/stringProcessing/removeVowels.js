function removeVowels(arr) {
  return arr.map(word => {
    return word.replace(/[aeiou]/gi, '');
  })
}

console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz']), // ["bcdfghjklmnpqrstvwxyz"]
  removeVowels(['green', 'YELLOW', 'black', 'white']), // ["grn", "YLLW", "blck", "wht"]
  removeVowels(['ABC', 'AEIOU', 'XYZ']), // ["BC", "", "XYZ"]
)