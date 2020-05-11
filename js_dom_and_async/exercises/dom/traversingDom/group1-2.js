// walk approach

// function walk(node, callback) {
//   callback(node);

//   var i;
//   for (i = 0; i < node.childNodes.length; i++) {
//     walk(node.childNodes[i], callback);
//   }
// }

// var p = [];
// walk(document, function(node) {
//   if (node.nodeName === 'P') {
//     p.push(node);
//   }
// });

// console.log(p);

// getElementsByTagName

var paragraphs = document.getElementsByTagName('p');

// depends on whether this is a live list: HTMLCollection or NodeList!!
// var paraArray = [].slice.call(paragraphs);

// paraArray.forEach(function(para) {
//   para.classList.add('article-text');
// });

for (var i = 0; i < paragraphs.length; i++) {
  var para = paragraphs[i];
  console.log(para);
  console.log(para.parentNode.classList.contains('intro'));
  if (para.parentNode.classList.contains('intro')) {
    para.classList.add('article-text');
  }
}

// var intros = document.getElementsByClassName('intro');
// for (var i = 0; i < intros.length; i++) {
//   var paragraphs = intros[i].getElementsByTagName('p');
//   for (var p = 0; p < paragraphs.length; p++) {
//     paragraphs[p].classList.add('article-text');
//   }
// }