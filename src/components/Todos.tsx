import { type TodoType, type ListOfTodos, type TodoTitle } from '../types'
import { Todo } from './Todo'
import { Create } from './Create'

interface Props {
  todos: ListOfTodos
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: (id: string) => void
  onRemoveAll: () => void
  onCreate: ({ name }: TodoTitle) => void
}

export const Todos: React.FC<Props> = ({ todos, onCreate, onRemoveTodo, onCompleted, onRemoveAll }) => {
  return (
<>
    <ul className='container'>
          <div>
        <h1 className='title'>Todo App</h1>
        <Create createTodo={onCreate}/>
        </div>
          {todos.map(todo => (
            <li key={todo.id}
              className={todo.completed ? 'complete' : 'todo'}>
                  <Todo
                      key={todo.id}
                      id={todo.id}
                      name={todo.name}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
                onCompleted={onCompleted}
              />

              </li>
          ))}
          <button className='Remove-completed' onClick={onRemoveAll}>Delete all</button>
      </ul>

    </>
  )
}
