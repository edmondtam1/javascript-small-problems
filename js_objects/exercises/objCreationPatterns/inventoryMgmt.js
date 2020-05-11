// inventory management system
// item manager --> CRUD for items; item list; inStock; itemsInCategory
// report manager --> init; createReporter (returns fn); reportInStock

var ItemCreator = (function() {
  function isValidItem(itemName, itemCategory, itemQuantity) {
    return isValidName(itemName) && isValidCategory(itemCategory) && itemQuantity >= 0;
  }

  function isValidName(itemName) {
    return itemName.replace(/[ ]/g, '').length >= 5;
  }

  function isValidCategory(itemCategory) {
    return itemCategory.replace(/\s/g, '').length >= 5 && !/\s/g.test(itemCategory);
  }

  function generateSku(itemName, itemCategory) {
    return itemName.replace(/[ ]/g, '').slice(0, 3).toUpperCase() + itemCategory.slice(0, 2).toUpperCase();
  }

  return function(name, category, quantity) {
    if (isValidItem(name, category, quantity)) {
      return {
        skuCode: generateSku(name, category),
        name,
        category,
        quantity
      };
    } else {
      return {
        notValid: true,
      }
    }
  }
})();

var ItemManager = (function() {

  function getIndexFromSku(skuCode, itemList) {
    for (var i = 0; i < itemList.length; i++) {
      if (itemList[i].skuCode === skuCode) {
        return i;
      }
    }
    return -1;
  }

  return {
    items: [],

    getItem: function(skuCode) {
      return this.items[getIndexFromSku(skuCode, this.items)];
    },

    create: function(name, category, quantity) {
      var item = ItemCreator(name, category, quantity);
      if (item.notValid) {
        return false;
      } else {
        this.items.push(item);
        return true;
      }
    },

    update: function(skuCode, updates) {
      Object.assign(this.getItem(skuCode), updates);
    },

    delete: function(skuCode) {
      var index = getIndexFromSku(skuCode, this.items);
      if (index >= 0) this.items.splice(index, 1);
    },

    inStock: function() {
      return this.items.filter(item => {
        return item.quantity > 0;
      });
    },

    itemsInCategory: function(category) {
      return this.items.filter(item => {
        return item.category === category;
      });
    },

    list: function() {
      return this.items;
    }
  }
})();

var ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  createReporter: function(skuCode) {
    return (function() {
      var item = this.items.getItem(skuCode);
      return {
        itemInfo: function() {
          Object.keys(item).forEach(key => {
            console.log(`${key}: ${item[key]}`);
          })
        }
      }
    }).bind(this)();
  },

  reportInStock: function() {
    console.log(this.items.inStock().map(item => {
      return item.name;
    }).join(','));
  },
};

console.log(
  ItemManager.create('asdf  ', 'hi', 3), // false
  ItemManager.create('asdf e', 'h ithere', 3), // false
  ItemManager.create('asdf e', ' hithere ', 3), // false
  ItemManager.create('basket ball', 'sports', 0), // valid item
  ItemManager.create('asd', 'sports', 0),
  ItemManager.create('soccer ball', 'sports', 5), // valid item
  ItemManager.create('football', 'sports'),
  ItemManager.create('football', 'sports', 3), // valid item
  ItemManager.create('kitchen pot', 'cooking items', 0),
  ItemManager.create('kitchen pot', 'cooking', 3), // valid item
  ItemManager.items,
);

// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', {
  quantity: 0
});
console.log('---');
console.log(
  ItemManager.inStock(), );
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
console.log(

  // logs football,kitchen pot
  ItemManager.itemsInCategory('sports'),
  // returns list with the item objects for basket ball, soccer ball, and football
  ItemManager.delete('SOCSP'),
  ItemManager.items,
);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', {
  quantity: 10
});
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10