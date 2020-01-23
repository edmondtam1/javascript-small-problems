function buyFruit(arr) {
  var i;
  return arr.map((fruits) => {
    return listOfFruits(fruits);
  }).flat();
}

function listOfFruits(arr) {
  var list = [];
  for (i = 0; i < arr[1]; i++) {
    list.push(arr[0]);
  }
  return list;
}

console.log(buyFruit([
  ['apple', 3],
  ['orange', 1],
  ['banana', 2]
]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]