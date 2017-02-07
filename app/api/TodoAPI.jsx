const $ = require('jquery')

module.exports = {
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
