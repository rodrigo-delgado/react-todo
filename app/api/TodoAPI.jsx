const $ = require('jquery')

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos')
    var todos = []

    try {
      todos = JSON.parse(stringTodos)
    } catch (e) {

   }
   return $.isArray(todos) ? todos : []
 },
 filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos

   filteredTodos = filteredTodos.filter((todo) => {
     return !todo.completed || showCompleted
   })
   //Filter by searchText

   //sort todos with non-competed first
   return filteredTodos
 }
}
