import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  createTodo: ({ name }: TodoTitle) => void
}

export const Create: React.FC<Props> = ({ createTodo }) => {
  const [inputValue, setInpuValue] = useState('')

  const handlesubmit = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault()
    createTodo({ name: inputValue })
    setInpuValue('')
  }
  return (
      <form onSubmit={handlesubmit}>
      <input
        className='search'
          value={inputValue}
          type="text"
          onChange = {(e) => { setInpuValue(e.target.value) }}
          placeholder = "Add a task"
        autoFocus
        required
      />
      <hr />
        </form>
  )
}
