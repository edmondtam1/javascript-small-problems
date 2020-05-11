function logInBox(str, width) {
  var MAX_WIDTH = 100;
  var contentWidth;

  // Width has to be at least 5
  if (width > 4) {
    contentWidth = width - 4;
  } else if (str.length > MAX_WIDTH - 4) {
    contentWidth = MAX_WIDTH - 4;
  } else {
    contentWidth = Math.max(1, str.length);
  }

  logTopRow(contentWidth);
  logSecondRow(contentWidth);

  for (var i = 0; i < Math.ceil(str.length / contentWidth); i++) {
    rowText = str.substring(i * contentWidth, (i + 1) * contentWidth);
    rowText = rowText.padEnd(contentWidth, ' ');
    console.log('| ' + rowText + ' |');
  }

  logSecondRow(contentWidth);
  logTopRow(contentWidth);
}

function logTopRow(width) {
  console.log('+-' + '-'.repeat(width) + '-+');
}

function logSecondRow(width) {
  console.log('| ' + ' '.repeat(width) + ' |');

}

logInBox('hi', 9);
logInBox('hi there what are you up to', 50);
logInBox('To boldly go where no one has gone before.', 10); // Narrow banner width, separating the last word from the full stop`