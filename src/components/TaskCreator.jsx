/* **************** Imports **************** */
import { useState } from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleNewTaskNameChange = (event) => setNewTaskName(event.target.value)

  const handleNewTaskSubmit = (event) => {
    event.preventDefault()

    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <div className='task-creator'>
      <h2>Task Creator</h2>
      <form>
        <label htmlFor='task-name'>Task Name</label>
        <input
          id='task-name'
          type='text'
          name='task-name'
          value={newTaskName}
          onChange={handleNewTaskNameChange}
          placeholder='Enter task name'
          required
        />
        <button type='submit' onClick={handleNewTaskSubmit}>
          Add Task
        </button>
      </form>
    </div>
  )
}

/* **************** Code Execution **************** */
export default TaskCreator
