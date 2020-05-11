const birthstones = {
  January: "garnet",
  February: "amethyst",
  March: "aquamarine or bloodstone",
  April: "diamond",
  May: "emerald",
  June: "pearl, moonstone, or alexandrite",
  July: "ruby",
  August: "peridot",
  September: "sapphire",
  October: "opal or tourmaline",
  November: "topaz or citrine",
  December: "turqouise, zircon, or tanzanite",
}

function validateCcNumber(num) {
  var odd_total = 0;
  var even_total = 0;
  num = num.split("").reverse();
  for (var i = 0, len = num.length; i < len; i++) {
    if (i % 2 == 1) {
      num[i] = (+num[i] * 2) + "";
      if (num[i].length > 1) {
        num[i] = +num[i][0] + +num[i][1];
      } else {
        num[i] = +num[i];
      }
      odd_total += num[i];
    } else {
      even_total += +num[i];
    }
  }

  return (odd_total + even_total) % 10 === 0
}

$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("opened");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("opened");
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var validNumber = validateCcNumber(cc_number);
    $(this).find(".success").toggle(validNumber);
    $(this).find(".error").toggle(!validNumber);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
      $stone = $("#birthstone");

    $stone.text(`Your birthstone is ${birthstones[month]}`);
  });
});