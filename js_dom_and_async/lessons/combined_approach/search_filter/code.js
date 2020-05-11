$(function() {
  var items = [{
    "title": "The Legend of Zelda: Majora's Mask 3D",
    "id": 1,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 2,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 3,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 4,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 5,
    "category": "Xbox One"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 6,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 7,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 8,
    "category": "Xbox One"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 9,
    "category": "PlayStation 4"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 10,
    "category": "Xbox One"
  }];

  var categories = [];

  function categoriseItems() {
    var $games = $("#games"),
      $category = $("#categories");

    for (var item of items) {
      var category = item.category;
      if (!categories.includes(category)) {
        categories.push(category);
      }

      var el = `<li id="${item.id}" data-category="${item.category}" data-title="${item.title}">${item.title} for ${item.category}</li>`;
      $games.append(el);
    }

    categories.sort();

    ;
    categories.forEach(function(category) {
      var el = `<input type="checkbox" name="category" value="${category}" checked>${category}</input><br>`;
      $category.append(el);
    });
  }

  categoriseItems();

  $("li").mouseover(function() {
    var $li = $(this);
    $li.addClass('highlight');
  });

  $("li").mouseleave(function() {
    var $li = $(this);
    $li.removeClass('highlight');
  });

  $("#categories").change(function(e) {
    var category = e.target.value;
    $("li").each(function(i) {
      if ($(this).attr('data-category') === category) {
        $(this).toggle();
      }
    });
  });

});