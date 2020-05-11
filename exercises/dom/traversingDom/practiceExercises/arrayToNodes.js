// algo
// take array and look at first item
// if second item in array is empty, create <></> syntax
// add html to result


function arrayToNodes(array) {
  var parent = document.createElement(array[0]);
  var children = array[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (var i = 0; i < children.length; i++) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }

  return parent;
}

// examples

var nodes1 = ["BODY", [
  ["HEADER", []],
  ["MAIN", []],
  ["FOOTER", []]
]];
arrayToNodes(nodes1);
// returns
// <body>
//  <header></header>
//  <main></main>
//  <footer></footer>
// </body>

var nodes2 = ["BODY", [
  ["DIV", [
    ["DIV", []],
    ["DIV", [
      ["DIV", []]
    ]]
  ]],
  ["DIV", []],
  ["DIV", [
    ["DIV", []],
    ["DIV", []],
    ["DIV", []]
  ]]
]];

// returns
{
  /* <body>
    <div>
      <div></div>
      <div>
        <div></div>
      </div>
    </div>
    <div></div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </body> */
}