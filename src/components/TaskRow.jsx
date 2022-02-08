/* **************** Imports **************** */
import upperCaseFirstLetter from '../utilities/functions/upperCaseFirstLetter'

/* **************** Variables **************** */

/* **************** Functions **************** */
const TaskRow = ({ taskItems, toggleTask, doneValue }) => {
  return (
    <>
      <tbody className='task-body'>
        {taskItems
          .filter((item) => item.done === doneValue)
          .map((item) => (
            <tr key={item.id}>
              <td className={`task-name ${item.done ? 'done' : ''}`}>
                {upperCaseFirstLetter(item.name)}
              </td>
              <td>
                <input
                  type='checkbox'
                  checked={item.done}
                  onChange={() => toggleTask(item.id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </>
  )
}

/* **************** Code Execution **************** */
export default TaskRow
