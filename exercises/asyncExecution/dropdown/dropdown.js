var linkedOptions = {
  classifications: {
    Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Turtle', 'Salmon'],
    Mammal: ['Bear', 'Whale'],
    Bird: ['Ostrich'],
  },
  animals: {
    Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle: ['Vertebrate', 'Cold-blooded'],
    Whale: ['Vertebrate', 'Warm-blooded'],
    Salmon: ['Vertebrate', 'Cold-blooded'],
    Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var filter1 = document.getElementById('animal-classifications');
  var filter2 = document.getElementById('animals');
  var clear = document.getElementById('clear');
  var classification;

  function setOptions(select, options) {
    select.options.length = 0;
    for (var i = 0; i < options.length; i++) {
      select.options[i] = new Option(options[i]);
    }
  }

  function setDefault(e) {
    if (e) {
      e.preventDefault();
    }
    setOptions(filter1, ['Classifications', 'Vertebrate', 'Warm-blooded',
      'Cold-blooded', 'Mammal', 'Bird'
    ]);
    setOptions(filter2, ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon',
      'Ostrich'
    ]);
  }

  clear.addEventListener('click', setDefault);

  filter1.addEventListener('change', function(e) {
    var selection = filter1.options[filter1.selectedIndex].value;
    if (selection === 'Classifications') {
      setDefault(e);
    } else {
      var animals = linkedOptions['classifications'][selection];
      setOptions(filter2, animals);
    }
  });

  filter2.addEventListener('change', function(e) {
    var selection = filter2.options[filter2.selectedIndex].value;
    if (selection === 'Animals') {
      setDefault(e);
    } else {
      setOptions(filter1, linkedOptions['animals'][selection]);
    }
  });

  setDefault();
});