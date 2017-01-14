//Every react Component needs a render method
const React = require('react')
const ReactDOM = require('react-dom')
//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')
const TodoApp = require('TodoApp')



//Load foundation
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
  )
