var expect = require('expect')

var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist()
  })
  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos')
    })
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }]
      TodoAPI.setTodos(todos)

      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })

    it('should not set invalid todos array', () => {
    var badTodos = {a:'Bad Data'}
    TodoAPI.setTodos(badTodos)

    expect(localStorage.getItem('todos')).toBe(null)
  })
})
  describe('getTodos', () => {
    //test when is not data stored (invalid data)
    it('should return an empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos()
      expect(actualTodos).toEqual([])
    })

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }]

      localStorage.setItem('todos', JSON.stringify(todos))
      var actualTodos = TodoAPI.getTodos()

      expect(actualTodos).toEqual(todos)
    })
  })
})
