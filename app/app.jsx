//Every react Component needs a render method
const React = require('react')
const ReactDOM = require('react-dom')
const {Provider} = require('react-redux')
//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

const TodoApp = require('TodoApp')

const actions = require('actions')
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

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
