import { useState } from 'react'
import { useTodosAction } from '../hooks/useTodoActions'

export const Create: React.FC = () => {
  const [inputValue, setInpuValue] = useState('')
  const { onCreate } = useTodosAction()

  const handlesubmit = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onCreate({ name: inputValue })
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
