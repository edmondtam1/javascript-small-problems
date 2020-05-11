function incrementProperty(obj, prop) {
  if (!obj[prop]) {
    obj[prop] = 0;
  }
  obj[prop] += 1;
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(
  incrementProperty(wins, 'susie'), // 5
  wins, // { steve: 3, susie: 5 }
  incrementProperty(wins, 'lucy'), // 1
  wins, // { steve: 3, susie: 5, lucy: 1 }
);