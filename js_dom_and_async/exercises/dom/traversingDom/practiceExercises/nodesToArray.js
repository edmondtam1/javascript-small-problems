// 1. check if current node has children
// 2. if has children, add [current, [children...]]
// 3. if no children, add [current, []]
// 4. repeat process for children with children

// function nodesToArr() {
//   var result = [document.body.nodeName, formatNodes([].slice.call(document.body.children))];
//   var currentParent = result[1];

//   while (anyChildren(currentParent)) {

//   }

//   console.log(result);
// }

// function formatNodes(array) {
//   return array.map(function(element) {
//     return [element];
//   });
// }

// function anyChildren(node) {
//   return node.children.length > 0;
// }

function nodesToArr() {
  function getChildren(parent) {
    return [parent.nodeName, Array.from(parent.children).map(getChildren)];
  }

  return getChildren(document.body);
}