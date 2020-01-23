function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

var elements = [];

function getElementsByTagName(node) {
  // console.log(node);
  if (node.nodeName === 'P') {
    elements.push(node);
  }

  return elements;
}

walk(document, getElementsByTagName);
console.log(elements);

elements.forEach(function(e) {
  e.classList.add('article-text');
})