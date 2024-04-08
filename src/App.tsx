/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { type TodoTitle, type Todo as TodoType } from './types'

const App = (): JSX.Element => {
  function getAll (): TodoType[] {
    const data: TodoType[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const pass = localStorage.key(i)
      if (pass) {
        const value = localStorage.getItem(pass)
        if (value) {
          try {
            const item: TodoType = JSON.parse(value)
            data.push(item)
          } catch (error) {
            console.error(`Error ${value} :`, error)
          }
        }
      }
    }
    return data
  }

  const mockTodos: TodoType[] = getAll()

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    localStorage.removeItem(id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodo)
  }

  const onRemoveAll = (): void => {
    const newTodos = todos.filter(todo => todo === '<>')
    localStorage.clear()
    setTodos(newTodos)
  }

  const handleCreate = ({ name }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      name,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    localStorage.setItem(newTodo.id, JSON.stringify(newTodo))
    console.log(newTodos)
    setTodos(newTodos)
  }

  return (

    <Todos
      onCreate={handleCreate}
      onRemoveTodo={handleRemove}
      todos={todos}
      onCompleted={handleCompleted}
      onRemoveAll={onRemoveAll}
    />

  )
}

export default App
