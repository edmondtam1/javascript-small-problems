function roomSize() {
  var SQMETRES_TO_SQFT = 10.7639;
  var length = prompt('Enter the length of the room in metres: ')
  var width = prompt('Enter the width of the room in metres: ')
  var areaInMetres = (length * width).toFixed(2);

  console.log(`The area of the room is ${areaInMetres} square metres (${(areaInMetres * SQMETRES_TO_SQFT).toFixed(2)} square feet).`)
}

roomSize();