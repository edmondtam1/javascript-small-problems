function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// var imgCount = 0;
// var pngCount = 0;

// walk(document, function(node) {
//   if (node.nodeName === 'IMG') {
//     imgCount++;
//     var source = node.src;

//     if (source.slice(-3) === 'png') {
//       console.log(source.slice(-3));
//       pngCount++;
//     }
//   }
// });

// console.log(imgCount, pngCount);

walk(document, function(node) {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
})