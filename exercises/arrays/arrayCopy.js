var myArray = [1, 2, 3, 4];
var myOtherArray = [];

// Alternative 1
for (var i = 0; i < myArray.length; i++) {
  myOtherArray[myOtherArray.length] = myArray[i];
  // myOtherArray.push(myArray[i]); 
}

myArray.pop();
console.log(myArray);

myArray = [1, 2];
console.log(myOtherArray);

// Alternative 2
myOtherArray = myArray.slice();
myArray.pop();
console.log(myArray);

myArray = [1, 2];
console.log(myOtherArray);