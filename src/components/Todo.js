// 1) imports
import React from 'react'

function Todo (props) {
  // 2) logic
  function handleDeleteClick (e) {
    e.preventDefault()
    props.removeTaskById({ id: props.id, label: props.label, checked: props.checked })
  }

  return ( // * Note: Components must always return something...
    // 3) template
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={`todo-${props.id}`} type="checkbox" defaultChecked={props.checked} />
        <label className="todo-label" htmlFor={`todo-${props.id}`}>{props.label}</label>
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
