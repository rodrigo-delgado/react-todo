const expect = require('expect')
const React= require('react')
const ReactDOM = require('react-dom')
const TestUtils = require('react-addons-test-utils')
const $ = require('jQuery')

const TodoSearch = require('TodoSearch')


describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })
  it('should call onSearch with entered input text', () => {
    const searchText = 'Dog'
    const spy = expect.createSpy()
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(false, 'Dog')
  })
  // it('should call onSearch with proper checked value', () => {
  //   const spy = expect.createSpy()
  //   const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
  //
  //   todoSearch.refs.showCompleted.ckecked = true
  //   TestUtils.Simulate.change(todoSearch.refs.showCompleted)
  //
  //   expect(spy).toHaveBeenCalledWith(true, '')
  //
  // })
})
