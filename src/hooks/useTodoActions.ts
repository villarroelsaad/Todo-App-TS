import { createTodo, Completed, deleteTodo, removeAll } from '../store/slice'
import { useAppDispatch } from './store'
import { type Todo, type TodoType, type TodoId } from '../types'

export const useTodosAction = (): any => {
  const dispatch = useAppDispatch()

  const onCreate = (name: Todo): void => {
    dispatch(createTodo(name))
  }
  const onCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    dispatch(Completed({ id, completed }))
  }
  const onRemoveTodo = (id: TodoId): void => {
    dispatch(deleteTodo(id))
  }
  const onRemoveAll = (): void => {
    dispatch(removeAll())
  }
  return { onCreate, onCompleted, onRemoveTodo, onRemoveAll }
}
