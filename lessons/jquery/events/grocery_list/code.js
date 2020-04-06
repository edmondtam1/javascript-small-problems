$(function() {
  $("form").on('submit', function(e) {
    e.preventDefault();
    var name = $(this).find("#name").val(),
      quantity = Number($(this).find("#quantity").val()) || 1;

    if (!name) return;
    $(`<li name=${name}>${quantity} ${name}</li>`).appendTo($("#list"));
    this.reset();
  });
});