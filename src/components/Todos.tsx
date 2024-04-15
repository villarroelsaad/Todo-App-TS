import { Todo } from './Todo'
import { Create } from './Create'
import { useTodosAction } from '../hooks/useTodoActions'
import { useAppSelector } from '../hooks/store'
import { type TodoType } from '../types'

export const Todos: React.FC<TodoType> = () => {
  const todos = useAppSelector((state) => state.todos)
  const { onRemoveAll } = useTodosAction()
  return (
<>
    <ul className='container'>
          <div>
        <h1 className='title'>Todo App</h1>
          <Create />
        </div>
          {todos.map(todo => (
            <li key={todo.id}
              className={todo.completed ? 'complete' : 'todo'}>
                  <Todo
                      key={todo.id}
                      id={todo.id}
                      name={todo.name}
                completed={todo.completed}
              />
              </li>
          ))}
        <button className='Remove-completed' onClick={onRemoveAll}>Delete all</button>
      </ul>

    </>
  )
}
