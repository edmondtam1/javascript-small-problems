function makeBank() {
  var accounts = [];
  return {
    openAccount: function() {
      var num = accounts.length + 101;
      var newAccount = makeAccount(num);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

function makeAccount(number) {
  var balance = 0;
  var transactions = [];
  return {
    balance: function() {
      return balance;
    },
    number: function() {
      return number;
    },
    transactions: function() {
      return transactions;
    },
    deposit: function(value) {
      balance += value;
      transactions.push({
        type: 'deposit',
        amount: value,
      });
      return value;
    },

    withdraw: function(value) {
      // var oldBalance = balance;
      // balance = oldBalance - value < 0 ? 0 : oldBalance - value;
      // return oldBalance - balance;

      if (value > balance) {
        value = balance;
      }
      balance -= value;
      transactions.push({
        type: 'withdrawal',
        amount: value,
      });
      return value;
    },
  };
};

var bank = makeBank();
var account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
var secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [Object]
console.log(bank.accounts);