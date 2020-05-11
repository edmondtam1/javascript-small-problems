var inventory;

(function() {
  var last_id = 0,
    collection = [];

  inventory = {
    setDate: function() {
      var date = new Date();
      $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $("#inventory_item").remove();
      this.template = Handlebars.compile($i_tmpl.html());
    },
    add: function() {
      last_id++;
      var item = {
        id: last_id,
        name: "",
        stock_number: "",
        quantity: 1,
      };
      collection.push(item);
      return item;
    },
    remove: function(idx) {
      collection = collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id === id) return collection[i];
      }
    },
    update: function($item) {
      var id = this.findId($item),
        item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
        $item = $(this.template(item));

      $("#inventory").append($item);
    },
    findParent: function(e) {
      return $(e.target).closest("tr");
    },
    findId: function($item) {
      return +$item.find("input[type=hidden]").val();
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();
      this.remove(this.findId($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);
      this.update($item);
    },
    bindEvents: function() {
      $("#add_item").on("click", this.newItem.bind(this));
      $("#inventory").on("click", "a.delete", this.deleteItem.bind(this));
      $("#inventory").on("blur", ":input", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

$(inventory.init.bind(inventory));