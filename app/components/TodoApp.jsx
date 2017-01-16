const React = require('react')
//node universal unique random id generator
const uuid = require('node-uuid')

const TodoList = require('TodoList')
const AddTodo = require('AddTodo')
const TodoSearch = require('TodoSearch')
var TodoAPI = require('TodoAPI')



const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos)
  },
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  },
  //this functions adds a new brand item
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        //use spread operator
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    const {todos} = this.state
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

module.exports = TodoApp
