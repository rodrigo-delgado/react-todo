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

  describe('filterTodos', () => {
    const todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    },
    {
      id: 2,
      text: 'Other text here',
      completed: true
    },
    {
      id: 3,
      text: 'Some text here',
      completed: false
    }
    ]
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')

      expect(filteredTodos.length).toBe(3)
    })

    it('should return non-completed todos when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '')

      expect(filteredTodos.length).toBe(1)
    })

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos[0].completed).toBe(false)
    })

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some')
    })

    it('should filter todos by searchText if upper case', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'Some')

      expect(filteredTodos.length).toBe(2)
    })

    it('should return all todos if searchText is empty ', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')

      expect(filteredTodos.length).toBe(3)
    })
  })
})
