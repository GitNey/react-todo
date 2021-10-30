// 1) imports
import React from 'react'
import { useState } from 'react'

function Todo (props) {
  // 2) logic
  const [checked, setChecked] = useState(props.checked)

  function handleDeleteClick (e) {
    e.preventDefault()
    props.removeTaskById({ id: props.id, label: props.label, checked: props.checked })
  }

  function handleTaskChecked (e) {
    const val = (e.target.value)
    if (val === 'on') {
      setChecked('off')
    } else {
      setChecked('on')
    }
  }

  return ( // * Note: Components must always return something...
    // 3) template
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={`todo-${props.id}`} type="checkbox" onChange={handleTaskChecked} value={checked} />
        <label className="todo-label" htmlFor={`todo-${props.id}`}>          
          { checked === 'on' ? <strike>{props.label}</strike> : props.label }
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.label}</span>
        </button>
        <button type="button" className="btn btn__danger" onClick={handleDeleteClick}>
          Delete <span className="visually-hidden">{props.label}</span>
        </button>
      </div>
    </li>
  )
}

// 4) export
export default Todo
