//Every react Component needs a render method
const React = require('react')
const ReactDOM = require('react-dom')
const {Provider} = require('react-redux')
//Below is es6 object destructuring
const { hashHistory} = require('react-router')

const actions = require('actions')
const store = require('configureStore').configure()
import firebase from 'app/firebase/'
import router from 'app/router/'


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos')
  } else {
    hashHistory.push('/')
  }
})


store.dispatch(actions.startAddTodos())

//Load foundation
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')


  ReactDOM.render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById('app')
  )
