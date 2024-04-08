import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, name, completed, onRemoveTodo, onCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompleted({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className='todos'>
      <label className='label1'>
          <input type="checkbox"
              className='input'
              checked={completed}
        onChange={handleChangeCheckbox}
        />
        <span></span>
      </label>
          <label className='label'>{name}</label>
          <button
          className='destroy'
          onClick={() => { onRemoveTodo(id) }}
      > ×
        </button>
    </div>
  )
}
