// function wordCount() {
//   var h2 = document.querySelectorAll('h2');
//   var result = [];

//   for (var i = 0; i < h2.length; i++) {
//     result.push(h2[i].textContent.split(' ').length);
//   }

//   return result;
// }

// console.log(wordCount());

// var toc1 = document.querySelectorAll('div#toc');

// var toc2 = document.getElementsByClassName('toc');
// var toc3 = document.getElementById('toc');

// console.log(toc1[0]);
// console.log(toc2[0]);
// console.log(toc3);

// // var linkArray = toc.children[1].children;
// // for (var i = 0; i < linkArray.length; i += 2) {
// //   console.log(linkArray[i]);
// //   linkArray[i].style.color = 'green';
// // }

// var links = document.querySelectorAll('.toc a');

// for (var i = 0; i < links.length; i += 2) {
//   links[i].style.color = 'green';
// }

// var thumbs = document.querySelectorAll('.thumbcaption');
// var result = [];

// for (var i = 0; i < thumbs.length; i++) {
//   result.push(thumbs[i].textContent.trim());
// }

// console.log(result);

var TAXONOMIC_RANKS = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
var td = document.querySelectorAll('.infobox td');
var regex = '/^(' + TAXONOMIC_RANKS.join('|') + ')/gi';
var obj = {};

for (var i = 0; i < td.length; i++) {
  var cell = td[i];

  // TAXONOMIC_RANKS.forEach(function(rank) {
  //   if (cell.textContent.indexOf(rank) !== -1) {
  //     link = cell.nextElementSibling.firstElementChild;
  //     obj[rank] = link.textContent;
  //   }
  // });
  var text = cell.textContent.trim();
  for (var j = 0; j < TAXONOMIC_RANKS.length; j++) {
    var rank = TAXONOMIC_RANKS[j];
    if (text.indexOf(rank) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      obj[rank] = link.textContent;
    }
  }
  // console.log(match);
  // if (!!match) {
  //   var neighbour = td[i].nextElementSibling.firstElementChild;
  //   console.log(neighbour);
  //   obj[match[0]] = neighbour.textContent;
  // }
}

console.log(obj);