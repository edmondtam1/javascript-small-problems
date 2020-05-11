var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];

function countOccurrences(arr) {
  var obj = {};
  var i;

  for (i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 0;
    obj[arr[i]] += 1;
  }

  for (key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

countOccurrences(vehicles);