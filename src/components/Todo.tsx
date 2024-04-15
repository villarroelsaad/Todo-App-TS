import React from 'react'
import { type Todo as TodoType } from '../types'
import { useTodosAction } from '../hooks/useTodoActions'

export const Todo: React.FC<TodoType> = ({ id, name, completed }) => {
  const { onRemoveTodo, onCompleted } = useTodosAction()

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompleted({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className='todos'>
      <label className='label1'>
        <input
          type="checkbox"
          className='input'
          checked={completed}
          onChange={handleChangeCheckbox}
        />
        <span></span>
      </label>
      <label className='label'>{name}</label>
      <button className='destroy' onClick={() => onRemoveTodo(id)}>×</button>
    </div>
  )
}
