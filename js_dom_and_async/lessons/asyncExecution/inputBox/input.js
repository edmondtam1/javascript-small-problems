var cursorInterval;
var focusedTextfield;

document.addEventListener('DOMContentLoaded', function() {
  var textfield = document.querySelector('div.text-field');

  textfield.addEventListener('click', function(e) {
    e.stopPropagation();
    focusedTextfield = textfield;
    textfield.classList.add('focused');

    cursorInterval = cursorInterval || setInterval(function() {
      textfield.classList.toggle('cursor');
    }, 500);
  });
});

document.addEventListener('keydown', function(e) {
  if (focusedTextfield) {
    var content = document.querySelector('div.text-field .content');
    if (e.key === 'Backspace') {
      content.textContent = content.textContent.slice(0, content.textContent.length - 1);
    } else if (e.key.length === 1) {
      content.textContent += e.key;
    }
  }
});

document.addEventListener('click', function(e) {
  var textfield = document.querySelector('div.text-field');
  if (focusedTextfield) {
    textfield.classList.remove('cursor', 'focused');
    clearInterval(cursorInterval);
    focusedTextfield = null;
  }
});