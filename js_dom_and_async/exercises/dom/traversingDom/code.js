function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// var html = document.childNodes[1]; // skip doctype
// var body = html.lastChild; // skip head and text nodes
// var heading = body.childNodes[1]; // skip text node

// heading.style.color = 'red';
// heading.style.fontSize = '48px';

// var count = 0;

// walk(document, function(node) {
//   if (node.nodeName === 'P') {
//     count += 1;
//   }
// });

// console.log(count);

// var words = [];

// walk(document, function(node) {
//   if (node.nodeName === 'P') {
//     var str = node.firstChild.data.trim();
//     words.push(str.split(' ')[0]);
//   }
// });

// console.log(words);

// walk(document, function(node) {

// });

var first = true;
// var body = document.lastChild.lastChild.childNodes;
// for (var i = 0; i < body.length; i++) {
//   if (body[i].nodeName === 'P' && first === true) {
//     first = false;
//   } else if (body[i].nodeName === 'P') {
//     body[i].classList.add('stanza');
//     console.log(body[i].classList);
//   }
// }

walk(document, function(node) {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});