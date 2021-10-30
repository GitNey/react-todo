// Top-level import statements
import Todo from './components/Todo.js'
import NewTodoForm from './components/NewTodoForm.js'
import FilterButton from './components/FilterButton.js'
import { nanoid } from 'nanoid'

import { useState } from 'react'


// App-code
function App(props) {
  const [tasks, setTasks] = useState(props.tasks)
  /**
   * Rendering w/ Iteration:
   * To render our array of objects, we have to turn each into a <Todo /> component.
   * JS gives us an array method for transforming data into something else: Array.prototype.map()
   */
  const taskList = tasks.map(
    /**
     * Unique Keys:
     * Now that React is rendering out tasks out of an array, it has to keep track of which one is which in order
     * to render them properly. React tries to do its own guesswork to keep track of things, but we can help with
     * specifying a key value attribute prop on our component.
     * 
     * YOU SHOULD ALWAYS PASS A UNIQUE KEY TO ANYTHING YOU RENDER W/ ITERATION. (Reactivity)
     */
    task => 
      <Todo
        id={task.id}
        label={task.label}
        checked={task.checked}
        key={task.id}
        removeTaskById={removeTaskById}
      />
  )
    
  function addNewTask (label) {
    window.console.log('Adding task...')
    const newList = tasks.concat({
      id: nanoid(),
      label,
      checked: false
    })
    setTasks(newList)
  }

  function removeTaskById (task) {
    window.console.log(task, tasks)
    const inList = tasks.find(_task => task.id === _task.id)
    // window.console.log('idx:', idx)
    if (inList) {
      const newList = tasks.filter(_task => task.id !== _task.id)
      setTasks(newList)
    }
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Form element, with input type text for writing out new task, and a button to submit the task. */}
      {
       /** 
       * Componentizing the rest of the app...
       * Remembering that compoennts are either obvious UI chunks, or reusable pieces of UI, or both...
       * we can make two more components: 
       */
      }
      <NewTodoForm addNewTask={addNewTask} />
      {/* An array of buttons to be used for filtering of the list. */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      {/* Amount of remaining tasks. */}
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      {/* 3 initial state tasks in an unordered list element. */}
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  )
}

// Export statement
export default App;
