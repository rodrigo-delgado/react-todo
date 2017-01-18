const expect = require('expect')
const React= require('react')
const ReactDOM = require('react-dom')
const TestUtils = require('react-addons-test-utils')
const $ = require('jquery')

const TodoList = require('TodoList')
const Todo = require('Todo')

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })
  it('should render one Todo component for each todo item', () => {
    const todos =
  [
    {
      id: 1,
      text: 'Do something'
    },
    {
      id: 2,
      text: 'Check mail'
    }
  ]
  const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
  const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

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
