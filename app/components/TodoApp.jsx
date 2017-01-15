const React = require('react')
const TodoList = require('TodoList')
const AddTodo = require('AddTodo')
const TodoSearch = require('TodoSearch')
//node universal unique random id generator
const uuid = require('node-uuid')


const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Go out for dinner'
        },
        {
          id: uuid(),
          text: 'Clean the car'
        }
      ]
    }
  },
  //this functions adds a new brand item
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        //use spread operator
        ...this.state.todos,
        {
          id: uuid(),
          text: text
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

module.exports = TodoApp
