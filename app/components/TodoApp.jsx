const React = require('react')
const TodoList = require('TodoList')
const AddTodo = require('AddTodo')



const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Go out for dinner'
        },
        {
          id: 4,
          text: 'Clean the car'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert('new todo ' + text)
  },
  render: function () {
    const {todos} = this.state
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

module.exports = TodoApp
