export interface Todo { id: string, name: string, completed: boolean }
export type TodoType = Todo
interface Title { name: string }
export type TodoTitle = Title

export type ListOfTodos = Todo[]
