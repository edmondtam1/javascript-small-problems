// function digitList(num) {
//   var arr = [];
//   var i;

//   while (num > 0) {
//     arr.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }

//   return arr;
// }

function digitList(num) {
  return String(num).split('').map((n) => Number(n));
}

console.log(
  digitList(12345), // [1, 2, 3, 4, 5]
  digitList(7), // [7]
  digitList(375290), // [3, 7, 5, 2, 9, 0]
  digitList(444), // [4, 4, 4]
)