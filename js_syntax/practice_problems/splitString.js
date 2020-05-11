function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  var phrase = ''
  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(phrase);
      phrase = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      phrase += string[i];
    }
  }

  if (phrase) console.log(phrase);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello