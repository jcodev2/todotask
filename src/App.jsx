/* **************** Imports **************** */
import { useState, useEffect } from 'react'
import Container from './components/Container'
import TaskBanner from './components/TaskBanner'
import TaskCreator from './components/TaskCreator'
import TaskRow from './components/TaskRow'
import VisibilityControl from './components/VisibilityControl'
import taskItemsObject from './utilities/data/task'

/* **************** Variables **************** */

/* **************** Functions **************** */
function App() {
  const [userName, setUserName] = useState('jeancarlo')
  const [taskItems, setTaskItems] = useState(taskItemsObject)
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    const localStorageTask = localStorage.getItem('task')
    if (localStorageTask) {
      setTaskItems(JSON.parse(localStorageTask))
    } else {
      localStorage.setItem('task', JSON.stringify(taskItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  const taskTableRows = (taskItems, doneValue) => {
    return (
      <TaskRow
        taskItems={taskItems}
        toggleTask={toggleTask}
        doneValue={doneValue}
      />
    )
  }
  const toggleTask = (taskId) => {
    const newTaskItems = taskItems.map((item) => {
      if (item.id === taskId) {
        return { ...item, done: !item.done }
      }
      return item
    })
    setTaskItems(newTaskItems)
  }
  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      const newTask = {
        id: taskItems.length + 1,
        name: taskName,
        done: false
      }
      setTaskItems([...taskItems, newTask])
    }
  }

  return (
    <>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <table className='task-table'>
          <thead className='task-header'>
            <tr>
              <th>Task</th>
              <th>Done</th>
            </tr>
          </thead>
          {taskTableRows(taskItems, false)}
        </table>
        <div className='task-completed'>
          <VisibilityControl
            isChecked={showCompleted}
            onChange={(checked) => setShowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <div className='task-completed'>
            <table className='task-table'>
              <thead className='task-header'>
                <tr>
                  <th>Task</th>
                  <th>Done</th>
                </tr>
              </thead>
              {taskTableRows(taskItems, true)}
            </table>
          </div>
        )}
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default App
