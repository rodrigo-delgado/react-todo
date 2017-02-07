var expect = require('expect')
var actions = require('actions')

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    var res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Any kind of text'
    }
    var res = actions.addTodo(action.text)

    expect(res).toEqual(action)
  })

  it('should generate add todos action object', () => {
    const todos = [{
      id: '111',
      test: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 303030
    }]
    const action = {
      type: 'ADD_TODOS',
      todos
    }
    const res = actions.addTodos(todos)

    expect(res).toEqual(action)
  })

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted()
    expect(res).toEqual(action)
  })

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {complete: false}
    }
    var res = actions.updateTodo(action.id, action.updates)

    expect(res).toEqual(action)
  })
})
