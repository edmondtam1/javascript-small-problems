function makeCountry(name, continent, visited) {
  if (visited === undefined) visited = false;
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      var newString;
      if (this.visited) {
        newString = `I have visited ${this.name}.`
      } else {
        newString = `I haven't visited ${this.name}.`
      }
      return `${this.name} is located in ${this.continent}. ${newString}`;
    },
    visitCountry: function() {
      this.visited = true;
    },
  }
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(
  chile.getDescription(), // "The Republic of Chile is located in South America."
  canada.getDescription(), // "Canada is located in North America."
  southAfrica.getDescription(), // "The Republic of South Africa is located in Africa."
);

canada.visitCountry();

console.log(canada.getDescription());