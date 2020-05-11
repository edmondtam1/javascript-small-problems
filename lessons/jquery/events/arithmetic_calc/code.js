$(function() {
  $("form").on('submit', function(e) {
    e.preventDefault();
    var first = $("#first").val();
    var second = $("#second").val();
    var operator = $("#operator").val();
    var answer = $("#answer");
    if (!first || !second) {
      answer.text("Please enter valid inputs!");
      return;
    }
    var statement = first + ' ' + operator + ' ' + second;
    answer.text(`${eval(statement)}`);
  });
});