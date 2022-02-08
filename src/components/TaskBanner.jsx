/* **************** Imports **************** */
import ReactConfetti from 'https://cdn.skypack.dev/react-confetti'
import upperCaseFirstLetter from '../utilities/functions/upperCaseFirstLetter'

/* **************** Variables **************** */

/* **************** Functions **************** */
const TaskBanner = ({ userName, taskItems }) => {
  const upperCaseUserName = upperCaseFirstLetter(userName)
  const taskCount = taskItems.filter((item) => !item.done).length

  return (
    <>
      <div className='task-banner'>
        <h1>{upperCaseUserName}'s Task List</h1>
        <div className='task-count'>
          <p>
            {taskCount === 1
              ? `${taskCount} task remaining`
              : `${taskCount} tasks remaining`}
          </p>
          {taskCount === 0 && (
            <ReactConfetti
              numberOfPieces={200}
              recycle={false}
              width={window.innerWidth}
              height={window.innerHeight}
            />
          )}
        </div>
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default TaskBanner
