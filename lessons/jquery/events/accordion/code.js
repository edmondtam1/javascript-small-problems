// $("form").on('submit', function(event) {
//   event.preventDefault();
//   var key = $("#key").val();
//   $(document).off('keypress').on('keypress', function(e) {
//     e.preventDefault();
//     $('a')
//     $('a').trigger('click');
//   });
// });

// function slideAccordion() {
//   $("#accordion").slideToggle();
// }

$(function() {
  $("form").on('submit', function(e) {
    e.preventDefault();
    var character = $("#key").val();

    $(document).off("keypress").on("keypress", function(event) {
      if (event.key !== character) return;

      $("a").trigger("click");
    });
  });

  $("a").on('click', function(e) {
    e.preventDefault();

    $("#accordion").slideToggle();
  });
});