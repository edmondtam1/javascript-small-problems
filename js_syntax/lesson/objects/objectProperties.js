function objectHasProperty(obj, property) {
  var keys = Object.keys(obj);
  return keys.indexOf(property) !== -1;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(
  objectHasProperty(pets, 'dog'), // true
  objectHasProperty(pets, 'lizard'), // false
  objectHasProperty(pets, 'mice'), // true
);