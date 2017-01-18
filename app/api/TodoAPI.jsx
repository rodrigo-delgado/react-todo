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
//filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
//we want to retunr items with showCompleted of false
//if a item is not completed we want to show it
     return !todo.completed || showCompleted
  })
//Filter by searchText
  filteredTodos = filteredTodos.filter((todo) => {
    var text = todo.text.toLowerCase()
    return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1
  })
//sort todos with non-completed first
  filteredTodos.sort((a, b) => {
    if (!a.completed === false && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1
    } else {
      return 0
    }
  })

   return filteredTodos
 }
}

//check on the dev tools localStorage.getItem('todos')
