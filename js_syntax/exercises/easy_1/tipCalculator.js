var bill = Number(prompt('What is the bill? '));
var tipPercentage = Number(prompt('What is the tip percentage? ') / 100);

console.log(`The tip is \$${(bill * tipPercentage).toFixed(2)}`);
console.log(`The total is \$${(bill * (1 + tipPercentage)).toFixed(2)}`);