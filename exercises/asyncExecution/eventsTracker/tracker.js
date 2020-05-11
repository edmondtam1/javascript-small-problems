var divRed = document.querySelector('#red');
var divBlue = document.querySelector('#blue');
var divOrange = document.querySelector('#orange');
var divGreen = document.querySelector('#green');

var tracker = (function() {
  var events = [];
  return {
    list: function() {
      return events.slice();
    },

    add: function(event) {
      events.push(event);
    },

    elements: function() {
      return events.map(function(event) {
        return event.target;
      });
    },

    clear: function() {
      events = [];
      return 0;
    }
  }
})();

function track(callback) {
  function isEventCalled(events, event) {
    return events.indexOf(event) !== -1;
  }

  return function(event) {
    if (!isEventCalled(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  }
}

divRed.addEventListener('click', track(function(event) {
  document.body.style.background = 'red';
  console.log(this);
}));

divBlue.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'blue';
  console.log(this);
}));

divOrange.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'green';
}));
// console.log('hi');