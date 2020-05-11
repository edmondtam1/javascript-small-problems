function sliceTree(start, end) {
  var startElement = document.getElementById(start);
  var endElement = document.getElementById(end);

  if (start > end || !startElement || !endElement) {
    return undefined;
  }

  var result = [];

  while (endElement !== startElement) {
    if (endElement.nodeName === 'BODY') return undefined;
    result.unshift(endElement.nodeName);
    endElement = endElement.parentElement;
  }
  if (endElement === startElement) {
    result.unshift(endElement.nodeName);
    return result;
  }

  return undefined;
}

console.log(
  sliceTree(1, 4),
  // ["ARTICLE", "HEADER", "SPAN", "A"]
  sliceTree(1, 76),
  // undefined
  sliceTree(2, 5),
  // undefined
  sliceTree(5, 4),
  // undefined
  sliceTree(1, 23),
  // ["ARTICLE", "FOOTER"]
  sliceTree(1, 22),
  // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
  sliceTree(11, 19),
  // ["SECTION", "P", "SPAN", "STRONG", "A"]
);