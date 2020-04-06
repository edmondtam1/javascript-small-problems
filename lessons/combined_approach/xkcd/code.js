$(function() {
  var speed = 250,
    delay = 1500,
    $blinds = $('[id^=blind]'),
    data = {};

  function animateBlinds() {
    $blinds.each(function(i) {
      var $blind = $($blinds.eq(i)),
        height = $blind.css('height');

      data[i] = {
        top: $blind.css('top'),
        height: height
      };

      $blind.delay(delay * (i + 1)).animate({
        top: '+=' + height,
        height: 0,
      }, speed)
    });
  }

  animateBlinds();

  $('a').click(function(e) {
    e.preventDefault();
    $blinds.finish();
    $blinds.each(function(i) {
      $blinds.eq(i).css({
        top: data[i].top,
        height: data[i].height,
      });
    });
    animateBlinds();
  });
});