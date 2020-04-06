function oneDeath(numInfected, lethality) {
  var pNoDeath = 1;

  for (var i = 0; i < numInfected; i++) {
    if (pNoDeath < 0.5) {
      return i;
    }

    pNoDeath *= (1 - lethality);
  }

  return 'No majority likelihood of death';
}

function iterateDeaths(lethality) {
  for (var i = 1; i < 100000; i++) {
    if (oneDeath(i, lethality) !== 'No majority likelihood of death') {
      return i;
    }
  }
}

console.log(iterateDeaths(0.02));
console.log(iterateDeaths(0.03));
console.log(iterateDeaths(0.04));