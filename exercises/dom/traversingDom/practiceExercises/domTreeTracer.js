function domTreeTracer(id) {
  var node = document.getElementById(id);
  if (id === 1) {
    return [
      [node.nodeName]
    ];
  } else {
    var siblingNames = [];
    // use node.parentNode.children to avoid check that nodeType === 1
    var siblings = node.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i];
      if (sibling.nodeType === 1) {
        siblingNames.push(sibling.nodeName);
      }
    }
    return [siblingNames].concat(domTreeTracer(Number(node.parentNode.getAttribute('id'))));
  }
}