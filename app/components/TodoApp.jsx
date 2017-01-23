const React = require('react')
//node universal unique random id generator
const uuid = require('node-uuid')
const moment = require('moment')

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
const TodoSearch = require('TodoSearch')
const TodoAPI = require('TodoAPI')



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

  //this functions adds a new brand item
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        //use spread operator
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
    const {todos, showCompleted, searchText} = this.state
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div>
        <h1 className="page-title">Just Do It</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large 5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList />
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
