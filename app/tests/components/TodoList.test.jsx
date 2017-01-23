const expect = require('expect')
const React= require('react')
const {Provider} = require('react-redux')
const ReactDOM = require('react-dom')
const TestUtils = require('react-addons-test-utils')
const $ = require('jquery')

import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })
  it('should render one Todo component for each todo item', () => {
    const todos =
  [
    {
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },
    {
      id: 2,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }
  ]
  const provider = TestUtils.renderIntoDocument(
     <Provider store={store}>
       <ConnectedTodoList/>
     </Provider>
   );
   const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
   const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

  expect(todosComponents.length).toBe(todos.length)
 })
 //  it('should render empty message if no todos', () => {
 //   var todos = []
 //   var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
 //   var $el = $(ReactDOM.findDOMNode(todoList)
 //
 //  expect($el.find('.container__message').length).toBe(1)
 // })
})
