$(function() {

  var todo_items = [{
      id: 1,
      title: 'Homework'
    },
    {
      id: 2,
      title: 'Shopping'
    },
    {
      id: 3,
      title: 'Calling Mom'
    },
    {
      id: 4,
      title: 'Coffee with John '
    }
  ];

  var App = {
    // get templates (3)
    // render todos
    // set contextmenu handler
    // set confirm_prompt handler
    // set delete handler

    todos: todo_items,
    templates: {},
    $todo_list: $("#todo_list"),
    getTemplates: function() {
      $(`[type="text/x-handlebars"]`).each(function(i, v) {
        this.templates[v.id] = Handlebars.compile($(v).html());
      }.bind(this));
    },
    renderTodos: function() {
      this.$todo_list.html(this.templates.todos({
        todos: this.todos,
      }));
    },
    removeTodo: function(id) {
      this.todos = this.todos.filter(function(todo) {
        return todo.id !== id;
      });
      this.hidePrompt();
      this.renderTodos();
    },
    showPrompt: function(id) {
      var todo = this.todos.filter(function(todo) {
        return todo.id === +id;
      })[0];
      $("html").append(this.templates.confirm_prompt(todo));
      this.$confirm = $(".confirm_prompt");
      this.bindPromptEvents();
    },
    bindPromptEvents: function() {
      $('.confirm_no, .overlay').one('click', this.hidePrompt.bind(this));
      this.$confirm.find('.confirm_yes').one(
        'click',
        this.handleConfirmYes.bind(this)
      );
    },
    hidePrompt: function() {
      $(".confirm_prompt, .overlay").remove();
    },
    handleConfirmYes: function(e) {
      e.preventDefault();
      this.removeTodo(+this.$confirm.attr("data-id"));
    },
    hideContext: function() {
      $(".context_menu").remove();
    },
    appendContext: function(id, e) {
      this.hideContext();
      var $menu = $(this.templates.context_menu({
        id: id,
      })).css({
        "top": e.pageY + 'px',
        "left": e.pageX + 'px',
      });
      $("body").append($menu);
    },
    contextHandler: function() {
      this.$todo_list.on("contextmenu", "li", function(e) {
        e.preventDefault();
        this.appendContext($(e.target).attr("data-id"), e);
        this.contextOptionsHandler();
      }.bind(this));
    },
    contextOptionsHandler: function() {
      $(".context_menu").on("click", "li", function(e) {
        e.preventDefault();
        this.hideContext();
      }.bind(this));
      $(".context_menu").on("click", ".remove", function(e) {
        this.showPrompt($(e.target).closest(".context_menu").attr("data-id"));
      }.bind(this));
    },
    init: function() {
      this.getTemplates();
      this.renderTodos();
      this.contextHandler();
    }
  }

  App.init();

});