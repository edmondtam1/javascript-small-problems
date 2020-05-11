function transactionsFor(transactionId, transactionsArray) {
  return transactionsArray.filter(item => {
    return item.id === transactionId;
  });
}

function isItemAvailable(transactionId, transactionsArray) {
  var sum = transactionsFor(transactionId, transactionsArray).reduce((sum, curr) => {
    if (curr.movement === 'in') {
      return sum + curr.quantity;
    } else {
      return sum - curr.quantity;
    }
  }, 0);

  return sum > 0;
}

var transactions = [{
    id: 101,
    movement: 'in',
    quantity: 5
  },
  {
    id: 105,
    movement: 'in',
    quantity: 10
  },
  {
    id: 102,
    movement: 'out',
    quantity: 17
  },
  {
    id: 101,
    movement: 'in',
    quantity: 12
  },
  {
    id: 103,
    movement: 'out',
    quantity: 15
  },
  {
    id: 102,
    movement: 'out',
    quantity: 15
  },
  {
    id: 105,
    movement: 'in',
    quantity: 25
  },
  {
    id: 101,
    movement: 'out',
    quantity: 18
  },
  {
    id: 102,
    movement: 'in',
    quantity: 22
  },
  {
    id: 103,
    movement: 'out',
    quantity: 15
  },
];


console.log(
  transactionsFor(101, transactions)
  // returns
  // [ { id: 101, movement: "in",  quantity:  5 },
  //   { id: 101, movement: "in",  quantity: 12 },
  //   { id: 101, movement: "out", quantity: 18 }, ]
);

console.log(

  isItemAvailable(101, transactions), // false
  isItemAvailable(105, transactions), // true
);