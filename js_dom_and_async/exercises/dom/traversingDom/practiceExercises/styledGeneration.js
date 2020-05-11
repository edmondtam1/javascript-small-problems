function colorGeneration(generation) {
  var parents = [document.body];
  var elements = [];
  var current = 0;

  while (current < generation) {
    parents = getAllChildrenOf(parents);
    current++;
  }

  if (parents) color(parents);
}

function getAllChildrenOf(parents) {
  return parents.map(function(parent) {
    return [].slice.call(parent.children);
  }).reduce(function(collection, children) {
    return collection.concat(children);
  }, []);
}

function color(list) {
  for (var i = 0; i < list.length; i++) {
    list[i].classList.add('generation-color');
  }
}