var invoices = {
  unpaid: [],
};

invoices.add = function(name, amount) {
  this.unpaid.push({
    name: name,
    amount: amount,
  });
};

invoices.totalDue = function() {
  return this.unpaid.reduce(sum, 0);
}

invoices.paid = [];

invoices.payInvoice = function(name) {
  var i;
  var unpaid = [];

  for (i = 0; i < this.unpaid.length; i++) {
    if (this.unpaid[i].name === name) {
      this.paid.push(this.unpaid[i]);
    } else {
      unpaid.push(this.unpaid[i]);
    }
  }

  this.unpaid = unpaid;
};

invoices.totalPaid = function() {
  return this.paid.reduce(sum, 0);
}

function sum(acc, curr) {
  return acc + curr.amount;
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalDue());
console.log(invoices.totalPaid());