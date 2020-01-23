var bands = [{
    name: 'sunset rubdown',
    country: 'UK',
    active: false
  },
  {
    name: 'women',
    country: 'Germany',
    active: false
  },
  {
    name: 'a silver mt. zion',
    country: 'Spain',
    active: true
  },
];

function processBands(data) {
  return data.map((element) => {
    processName(element);
    processCountry(element);
    return element;
  });
}

function processCountry(element) {
  element.country = 'Canada';
}

function processName(element) {
  var regex = /[.]/gi;
  element['name'] = element['name'].replace(regex, '').split(' ').map((word) => {
    return capitalizeLetter(word);
  }).join(' ');
}

function capitalizeLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]