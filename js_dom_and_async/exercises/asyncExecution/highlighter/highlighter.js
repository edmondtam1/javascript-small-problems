document.addEventListener('DOMContentLoaded', function() {
  var articles = document.querySelectorAll('article');
  var main = document.querySelector('main');
  var nav = document.querySelector('ul');

  function highlight(e) {
    var element;
    clearHighlights();

    if (e.currentTarget.tagName === 'A') {
      var id = e.currentTarget.getAttribute('href').slice(1);
      element = document.getElementById(id);
    } else {
      element = document.querySelector('main');
    }
    element.classList.add('highlight');
  }

  function clearHighlights() {
    var highlighted = document.querySelector('.highlight');
    if (highlighted) {
      highlighted.classList.remove('highlight');
    }
  }

  nav.addEventListener('click', highlight);
  document.addEventListener('click', highlight);

  main.addEventListener('click', function(e) {
    e.preventDefault();
    var article = e.target;
    if (article.tagName !== 'ARTICLE') article = article.parentNode;
    if (article.tagName === 'ARTICLE') {
      e.stopPropagation();
      clearHighlights();
      article.classList.add('highlight');
    }
  });
});