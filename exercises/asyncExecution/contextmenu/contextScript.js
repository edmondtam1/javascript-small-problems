document.addEventListener('DOMContentLoaded', function() {
  var main = document.querySelector('main');
  var section = document.querySelector('#sub');

  main.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('main');
  });
  section.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    alert('sub');
  });

});