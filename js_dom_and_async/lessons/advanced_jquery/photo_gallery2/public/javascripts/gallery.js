$(function() {
  var templates = {},
    photos;

  function ajaxFail(xhr, status, errorThrown) {
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
  });

  $("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  var slideshow = {
    $el: $("#slideshow"),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find("figure:visible"),
        $prev = $current.prev("figure");

      if (!$prev.length) {
        $prev = this.$el.find("figure").last();
      }
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr("data-id"));
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find("figure:visible"),
        $next = $current.next("figure");

      if (!$next.length) {
        $next = this.$el.find("figure").first();
      }
      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr("data-id"));
    },
    renderPhotoContent: function(idx) {
      $("[name=photo_id]").val(idx);
      renderPhotoInformation(+idx);
      getCommentsFor(idx);
    },
    bind: function() {
      // attach click events to next/prev anchors
      this.$el.find("a.prev").on("click", this.prevSlide.bind(this));
      this.$el.find("a.next").on("click", this.nextSlide.bind(this));

    },
    init: function() {
      this.bind();
    }
  };

  $.ajax({
      url: "/photos",
      dataType: "json",
    })
    .done(function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      slideshow.init();
      getCommentsFor(photos[0].id);
    })
    .fail(ajaxFail)

  $("section > header").on("click", ".actions a", function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var photo_index = slideshow.$el.find("figure:visible").index();
    var current_photo = photos[photo_index];

    $.ajax({
        url: $e.attr("href"),
        type: "post",
        data: "photo_id=" + $e.attr("data-id"),
      })
      .done(function(json) {
        $e.text(function(i, txt) {
          return txt.replace(/\d+/, json.total);
        });
        current_photo[$e.attr("data-property")] = json.total;
      })
      .fail(ajaxFail);
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var $f = $(this);
    $.ajax({
        url: $f.attr("action"),
        type: $f.attr("method"),
        data: $f.serializeArray(),
      })
      .done(function(json) {
        $("#comments ul").append(templates.photo_comment(json));
        $f[0].reset();
      })
      .fail(ajaxFail);
  });

  function renderPhotos() {
    $("#slides").html(templates.photos({
      photos: photos,
    }));
  }

  function renderPhotoInformation(idx) {
    var photo = photos.filter(function(item) {
      return item.id === idx;
    })[0];
    $("section > header").html(templates.photo_information(photo));
  }

  function getCommentsFor(idx) {
    $.ajax({
        url: `/comments`,
        data: `photo_id=${idx}`,
      })
      .done(function(comments_json) {
        $("#comments ul").html(templates.photo_comments({
          comments: comments_json,
        }));
      })
  }
});






// function ajaxFail(xhr, status, errorThrown) {
//   console.log("Error: " + errorThrown);
//   console.log("Status: " + status);
//   console.dir(xhr);
// }

// function updateComments(photo_id) {
//   $.ajax({
//       url: `/comments?photo_id=${photo_id}`,
//       dataType: "json",
//     })
//     .done(function(comments) {
//       Handlebars.registerPartial('comment', templates.photo_comment);
//       $("#comments > ul").html(templates.photo_comments({
//         comments: comments
//       }));
//     })
//     .fail(ajaxFail)
// }

// function replaceWithNextPhoto(next_bool) {
//   var $current_fig = $("#slides").find(":visible");
//   console.log($current_fig);

//   if (next_bool) {
//     // var $next_fig = $current_fig.next();
//     $current_fig.fadeOut(500);
//     console.log($current_fig.next());
//     if ($current_fig.next()) {
//       $current_fig.next().fadeIn(500);
//     } else {
//       $current_fig.parent().first().fadeIn(500);
//     }
//   } else {
//     $current_fig.fadeOut(500);
//     $current_fig.prev().fadeIn();
//     updateComments(photos[$current_fig.prev().index()]);
//   }
// }

// $("script[type='text/x-handlebars']").each(function(i) {
//   var $tmpl = $(this);
//   templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
// });

// $.ajax({
//     url: "/photos",
//     dataType: "json",
//   })
//   .done(function(json) {
//     photos = json;
//     updateComments(photos[0].id);
//     $("#slides").html(templates.photos({
//       photos: photos
//     }));
//     $("section > header").html(templates.photo_information(photos[0]));
//   })
//   .fail(ajaxFail);

// $("a.prev, a.next").on("click", function(e) {
//   e.preventDefault();
//   $el = $(e.target);
//   if ($el.hasClass('next')) {
//     replaceWithNextPhoto(true);
//   } else {
//     replaceWithNextPhoto(false);
//   }

// });