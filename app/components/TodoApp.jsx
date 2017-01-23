const React = require('react')
//node universal unique random id generator
const uuid = require('node-uuid')
const moment = require('moment')

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'



const TodoApp = React.createClass({

  render: function () {

    return (
      <div>
        <h1 className="page-title">Just Do It</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large 5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
