function makeList() {
  var todos = [];
  return {
    add: function(todo) {
      todos.push(todo);
      console.log(`${todo} added!`);
    },

    remove: function(todo) {
      var todoIndex = todos.indexOf(todo);
      if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        console.log(`${todo} removed!`);
      } else {
        console.log(`That ${todo} does not exist.`);
      }
    },

    list: function() {
      if (todos.length === 0) {
        console.log('The todo list is empty.');
      } else {
        console.log(todos.join('\n'));
      }
    },
  }
}

var list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn