// function isValidEmail(email) {
//   var arr = email.split('@');
//   if (arr.length !== 2) return false;
//   return validateLocalName(arr[0]) && validateDomainName(arr[1]);
// }

// function validateLocalName(string) {
//   var localNameRegex = /^[a-z0-9]+$/gi
//   return localNameRegex.test(string);
// }

// function validateDomainName(string) {
//   var elements = string.split('.');
//   if (elements.length <= 1) return false;
//   return elements.every(word => {
//     return /^[a-z]+$/gi.test(word);
//   })
// }

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/gi.test(email);
}

console.log(
  isValidEmail('Foo@baz.com.ph'), // returns true
  isValidEmail('Foo@mx.baz.com.ph'), // returns true
  isValidEmail('foo@baz.com'), // returns true
  isValidEmail('foo@baz.ph'), // returns true
  isValidEmail('HELLO123@baz'), // returns false
  isValidEmail('foo.bar@baz.to'), // returns false
  isValidEmail('foo@baz.'), // returns false
  isValidEmail('foo_bat@baz'), // returns false
  isValidEmail('foo@bar.a12'), // returns false
  isValidEmail('foo_bar@baz.com'), // returns false
  isValidEmail('foo@bar.....com'), // returns false
  isValidEmail('asdf123@asdfasdf.com')
);