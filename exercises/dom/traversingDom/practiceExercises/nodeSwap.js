function nodeSwap(first, second) {
  var firstE = document.getElementById(first);
  var secondE = document.getElementById(second);

  if (!isInvalid(firstE, secondE)) {
    // var firstClone = firstE.cloneNode(true);
    // var secondClone = secondE.cloneNode(true);

    // var firstParent = firstE.parentNode;
    // var secondParent = secondE.parentNode;

    // firstParent.replaceChild(secondClone, firstE);
    // secondParent.replaceChild(firstClone, secondE);
    // return true;

    var nextSib1 = firstE.nextElementSibling;
    var nextSib2 = secondE.nextElementSibling;

    if (nextSib1) {
      nextSib1.insertAdjacentElement('beforebegin', secondE);
    } else {
      firstE.parentNode.appendChild(secondE);
    }

    if (nextSib2) {
      nextSib2.insertAdjacentElement('beforebegin', firstE);
    } else {
      secondE.parentNode.appendChild(firstE);
    }
  }
}

function isInvalid(node1, node2) {
  return !node1 || !node2 || node1.contains(node2) || node2.contains(node1);
}