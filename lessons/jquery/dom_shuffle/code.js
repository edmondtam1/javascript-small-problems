$(function() {
  // can simplify by using $('element').prependTo('location')
  var $body = $("body"),
    $bodyHeader = $("body > header"),
    $bodyHeaderH1 = $("main > h1 > a").parent(),
    $article = $("article"),
    $figures = $("figure"),
    $figcaption0 = $($figures[0]).find('figcaption'),
    $figcaption1 = $($figures[1]).find('figcaption');

  $body.prepend($bodyHeader);
  $bodyHeader.prepend($bodyHeaderH1);

  $($figures[0]).append($figcaption1);
  $($figures[1]).append($figcaption0);
  for (var i = $figures.length - 1; i >= 0; i--) {
    $article.append($figures[i]);
  }

});