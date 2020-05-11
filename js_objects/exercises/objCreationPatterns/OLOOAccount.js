var Account = (function() {
  var CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  function anonymize() {
    var result = [];
    for (var i = 0; i < 16; i++) {
      result.push(getRandomChar());
    }
    return result.join('');
  }

  function getRandomChar() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  function isValidPassword(accountData, testPassword) {
    return accountData.password === testPassword;
  }

  function partialApplication(constructor, methodName, data, context) {
    return function(...args) {
      return constructor[methodName].apply(context, [data].concat(args));
    }
  }

  return {
    init: function(email, password, firstName, lastName) {
      var propName;
      var accountData = {
        email,
        password,
        firstName,
        lastName
      };
      this.displayName = anonymize();

      for (propName in Account) {
        if (typeof Account[propName] === 'function' && propName !== 'init') {
          this[propName] = partialApplication(Account, propName, accountData, this);
        }
      }


      return this;
    },

    reanonymize: function(accountData, password) {
      if (isValidPassword(accountData, password)) {
        this.displayName = anonymize();
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword: function(accountData, oldPassword, newPassword) {
      if (isValidPassword(accountData, oldPassword)) {
        accountData.password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName: function(accountData, password) {
      if (isValidPassword(accountData, password)) {
        return accountData.firstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName: function(accountData, password) {
      if (isValidPassword(accountData, password)) {
        return accountData.lastName;
      } else {
        return 'Invalid Password';
      }
    },

    email: function(accountData, password) {
      if (isValidPassword(accountData, password)) {
        return accountData.email;
      } else {
        return 'Invalid Password';
      }
    },
  }
})();

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
Account.test = function() {
  return 'hi'
};
console.log(fooBar.test());
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName('123456')); // logs 'foo'
console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc')) // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc'); // returns true
console.log(fooBar.displayName);
console.log(displayName === fooBar.displayName); // logs false

var bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc')); // logs 'Invalid Password' but should log foo.
console.log(fooBar.email('abc')); // 'Invalid Password' but should 'foo@bar.com'
console.log(bazQux.email('123456')); // 'Invalid Password' but should 'baz@qux.com'
Account.test2 = function() {
  return 'hi again!';
}

console.log(fooBar.test2());