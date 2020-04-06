document.addEventListener('DOMContentLoaded', function() {
  // function delegateEvent(parentElement, selector, eventType, callback) {
  //   if (!parentElement) return undefined;
  //   var selectedChildren = findChildren(parentElement, selector.toUpperCase());

  //   console.log(selectedChildren);
  // }

  function delegateEvent(parentElement, selector, eventType, callback) {
    if (!parentElement) return undefined;

    parentElement.addEventListener(eventType, function(e) {
      targets = parentElement.querySelectorAll(selector);

      for (var i = 0; i < targets.length; i++) {
        if (targets[i] === e.target) callback(e);
      }
    });

    return true;
  }




  // test cases

  // Possible elements for use with the scenarios
  var element1 = document.querySelector('table');
  var element2 = document.querySelector('main h1');
  var element3 = document.querySelector('main');

  var callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };

  // console.log(delegateEvent(element1, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));
  console.log(delegateEvent(element2, 'p', 'click', callback));
});