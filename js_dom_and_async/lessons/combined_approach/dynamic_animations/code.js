$(function() {
  // include function to create new object from $.serializeArray();

  $('form').submit(function(e) {
    e.preventDefault();
    var inputs = $(':input').serializeArray();
    this.reset();

    var shape = inputs.filter(function(obj) {
      return obj.name === "shape_type";
    })[0].value;

    var $el = $("<div></div>");
    $el.data("coords", inputs.slice(1));
    $el.hide().addClass(shape).css({
      top: `${inputs[2].value}px`,
      left: `${inputs[1].value}px`,
    }).appendTo($('#canvas')).show();
  });

  $('#animate').click(function(e) {
    e.preventDefault();
    $('#canvas div').each(function(i) {
      $(this).stop();
      $(this).css({
        top: `${$(this).data('coords')[1].value}px`,
        left: `${$(this).data('coords')[0].value}px`,
      });
      $(this).animate({
        top: `${$(this).data('coords')[3].value}px`,
        left: `${$(this).data('coords')[2].value}px`,
      }, 1000);
    });
  });

  $('#stop').click(function(e) {
    e.preventDefault();
    $('#canvas div').each(function(i) {
      $(this).stop();
    });
  });
});

// [
//   {
//     "name": "shape_type",
//     "value": "square"
//   },
//   {
//     "name": "start_x",
//     "value": "1"
//   },
//   {
//     "name": "start_y",
//     "value": "2"
//   },
//   {
//     "name": "end_x",
//     "value": "3"
//   },
//   {
//     "name": "end_y",
//     "value": "4"
//   }
// ]