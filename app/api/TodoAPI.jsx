const $ = require('jquery')

module.exports = {
  setTodos: function (todos) {
    //convert the object into an array usimg jquery
    if ($.isArray(todos)) {
    //convert the array into a string
    //localStorage CANNOT save your data if is Object or Array
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getTodos: function () {
    //grab the items from localStorage
    var stringTodos = localStorage.getItem('todos')
    var todos = []

    try {
    //convert our string into an array
      todos = JSON.parse(stringTodos)
    } catch (e) {

   }
   //ternary operater if is true give me an array else give me an empty array
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

//check on the dev tools localStorage.getItem('todos')
