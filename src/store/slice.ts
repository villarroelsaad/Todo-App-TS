import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Todo, type TodoId, type TodoType } from '../types'

const getAll = (): TodoType[] => {
  const data: TodoType[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key !== null) {
      const value = localStorage.getItem(key)
      if (value !== null) {
        try {
          const item: TodoType = JSON.parse(value)
          data.push(item)
        } catch (error) {
          console.error(`Error parsing ${value}:`, error)
        }
      }
    }
  }
  return data
}

const initialState: TodoType[] = getAll()

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    deleteTodo: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload
      localStorage.removeItem(id)
      return state.filter(todo => todo.id !== id)
    },
    removeAll: () => {
      localStorage.clear()
      return []
    },
    createTodo: (state, action: PayloadAction<Todo>) => {
      const id = crypto.randomUUID()
      const newTodo: TodoType = { id, ...action.payload, completed: false }
      localStorage.setItem(id, JSON.stringify(newTodo))
      return [...state, newTodo]
    },
    Completed: (state, action: PayloadAction<Pick<TodoType, 'id' | 'completed'>>) => {
      const { id, completed } = action.payload
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
    }
  }
})

export default todoSlice.reducer
export const { deleteTodo, createTodo, removeAll, Completed } = todoSlice.actions
