// function foo(list) {
//   var map = list.map(function (word) {
//     return word.match(/[aeiou]/gi) || [];
//   })
//   console.log(map);
//   return map.reduce(function (acc, letterList) {
//     return acc + letterList.length;
//   }, 0);
// }

// function foo(list) {
//   return list.map(function (word) {
//     return word.match(/[aeiou]/gi) || [];
//   }).reduce(function (acc, letterList) {
//     return acc + letterList.length;
//   }, 0);
// }


// console.log(foo(['cart', 'truck', 'cart', 'train']));
// console.log(foo(['apple', 'banana', 'orange']));

// var text = 'asdf asdf sdfdfdj jdf df sdf';

// console.log(text.match(/\S+/g));

var str = 'asdf_erer_bcEEEnb_pqow asdf';

console.log(str.match(/[A-z]+/g));