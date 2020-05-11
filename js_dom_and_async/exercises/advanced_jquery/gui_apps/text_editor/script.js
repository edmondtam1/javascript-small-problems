$(function() {
  var App = {
    button_tmpl: Handlebars.compile($("#icon_tmpl").html()),
    $input: $("#text_input"),
    imgs: {
      bold: "public/icons/icons8-bold-50.png",
      italic: "public/icons/icons8-italic-50.png",
      underline: "public/icons/icons8-underline-50.png",
      strikeThrough: "public/icons/icons8-strikethrough-50.png",
      createLink: "public/icons/icons8-edit-link-50.png",
      insertUnorderedList: "public/icons/icons8-list-50.png",
      insertOrderedList: "public/icons/icons8-numbered-list-50.png",
      justifyLeft: "public/icons/icons8-align-left-50.png",
      justifyRight: "public/icons/icons8-align-right-50.png",
      justifyCenter: "public/icons/icons8-align-center-50.png",
      justifyFull: "public/icons/icons8-align-justify-50.png",
    },
    displayButtons: function() {
      var $buttons = $("#buttons");
      for (var name in this.imgs) {
        $buttons.append(this.button_tmpl({
          name: name,
          path: this.imgs[name],
        }));
      }
    },
    renderBtnStates: function(e) {
      e.preventDefault();
      Object.keys(this.imgs).forEach(format => {
        if (document.queryCommandState(format)) {
          $(`#${format}`).css({
            'backgroundColor': 'white'
          });
        } else {
          $(`#${format}`).css({
            'backgroundColor': 'transparent'
          });
        };
      })

    },
    clearInput: function(e) {
      e.preventDefault();
      e.target.textContent = "";
    },
    handleEvents: function() {
      this.$input.one("focus", this.clearInput);
      $("button").each(function(_, btn) {
        $(btn).on("click", function(e) {
          e.preventDefault();
          var $b = $(e.currentTarget);
          var methodName = $b.attr("id");
          if (methodName === "createLink") {
            var link = prompt("Enter the link you want to insert:");
            if (link === null) return;
            document.execCommand(methodName, false, link);
          } else {
            document.execCommand(methodName);
          }
          $("#text_input").focus();
        });
      });

      $("main").on("click", this.renderBtnStates.bind(this));
    },
    init: function() {
      this.displayButtons();
      this.handleEvents();
    }
  }

  App.init();
});