//Every react Component needs a render method
const React = require('react')
const ReactDOM = require('react-dom')
const {Provider} = require('react-redux')
//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')
const TodoApp = require('TodoApp')
const actions = require('actions')
const store = require('configureStore').configure()
const TodoAPI = require('TodoAPI')

store.subscribe(() => {
  const state = store.getState()
  console.log('New state', state)
  TodoAPI.setTodos(state.todos)
})

const initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

//Load foundation
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,
    document.getElementById('app')
  )
