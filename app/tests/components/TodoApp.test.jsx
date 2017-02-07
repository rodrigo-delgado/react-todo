const expect = require('expect')
const React= require('react')
const ReactDOM = require('react-dom')
const {Provider} = require('react-redux')
const TestUtils = require('react-addons-test-utils')
const $ = require('jquery')

const configureStore = require('configureStore')
import {TodoApp} from 'TodoApp'
import TodoList from 'TodoList'



describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  } )
  it ('should render TodoList', () => {
    const store = configureStore.configure()
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    )
    const todoApp = TestUtils.scryRenderComponentsWithType(provider, TodoApp)[0]
    const TodoList = TestUtils.scryRenderComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })
})
