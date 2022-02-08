/* **************** Imports **************** */

/* **************** Variables **************** */

/* **************** Functions **************** */
const VisibilityControl = ({ isChecked, onChange }) => {
  return (
    <div>
      <input
        id='isChecked'
        type='checkbox'
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor='isChecked'>Show Completed Tasks</label>
    </div>
  )
}

/* **************** Code Execution **************** */
export default VisibilityControl
