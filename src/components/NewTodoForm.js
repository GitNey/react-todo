import React from 'react'
// enable React.js state capabilities within single components
import { useState } from 'react' // useState hook


// remember that props passed to components can only be read, they cannot be updated
function NewTodoForm (props) {
  // state pieces for this component
  const [taskLabel, setTaskLabel] = useState('Use hooks!')
  /**
   * Here we:
   * 1) Set the initial taskLabel value to 'Use hooks!'
   * 2) We define a function setTaskLabel responsible for updating taskLabel state
   * 3) useState() returns these two things, so we are using array destruction to capture them both in separate variables
   */
  
  // event handler function invoked on JSX
  function handleSubmit (e) {
    e.preventDefault()
    props.addNewTask(taskLabel)
    setTaskLabel('') // reset our task label
  }

  function handleTaskLabelChange (e) {
    e.preventDefault()
    setTaskLabel(e.target.value)
    window.console.log(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={taskLabel}
        onChange={handleTaskLabelChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  )
}

export default NewTodoForm