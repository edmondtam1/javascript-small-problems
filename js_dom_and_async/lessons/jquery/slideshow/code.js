$(function() {
  var $figure = $('figure'),
    $thumbs = $('img');

  $('img').on('mouseover', function(e) {
    $(e.target).css('cursor', 'grab');
  });

  function highlightImg(e) {
    e.preventDefault();
    if (!$(e.target).is('img')) return;
    var $e = $(e.target).clone().off('mouseover');

    $figure.find('img').fadeOut(400, function() {
      this.remove();
      $e.hide().prependTo($figure).fadeIn(400);
    });
    $thumbs.removeClass('highlight');
    $(e.target).addClass('highlight');
  }

  $thumbs.on('click', highlightImg);
});