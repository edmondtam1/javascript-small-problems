function swapName(str) {
  var names = str.split(' ');
  // return names.reverse().join(', ');

  lastName = names.pop();
  return lastName + ', ' + names.join(' ');
}

console.log(
  swapName('Joe Easd Roberts') // "Roberts, Joe"
)