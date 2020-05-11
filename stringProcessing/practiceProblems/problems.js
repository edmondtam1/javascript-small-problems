var firstName;
var lastName;
var fullName;

firstName = 'Ed';
lastName = 'Tam';

fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

var charCode = language.charCodeAt(idx);
console.log(charCode);
console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';

console.log(a > b);

b = 'B';
console.log(a > b);

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));


console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';

var compoundSentence = `${fact1} and ${fact2.toLowerCase()}`;
console.log(compoundSentence);
console.log(fact1[0]);
console.log(fact2[0]);

var pi = (22 / 7).toString();
console.log(pi.lastIndexOf('14'));

var boxNumber = (356).toString();
console.log(boxNumber);

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = boxNumber.toString();
console.log(typeof boxNumber);

var name = prompt('What is your name?');
if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}