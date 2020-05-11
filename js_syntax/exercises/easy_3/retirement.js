var rSync = require('readline-sync');

var currentAge = rSync.question('What is your age?');
var retirementAge = rSync.question('When would you like to retire?');
var date = new Date();
var dateDiff = retirementAge - currentAge;
var currentYear = date.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${dateDiff + currentYear}.`);
console.log(`You have only ${dateDiff} years of work to go!`);