//Every react Component needs a render method
const React = require('react')
const ReactDOM = require('react-dom')
//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

const TodoApp = require('TodoApp')

const actions = require('actions')
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())
//Load foundation
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
  )
