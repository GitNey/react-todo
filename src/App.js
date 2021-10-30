// Top-level import statements
import Todo from './components/Todo.js'

// App-code
function App(props) {
  /**
   * Rendering w/ Iteration:
   * To render our array of objects, we have to turn each into a <Todo /> component.
   * JS gives us an array method for transforming data into something else: Array.prototype.map()
   */
  const taskList = props.tasks.map(
    /**
     * Unique Keys:
     * Now that React is rendering out tasks out of an array, it has to keep track of which one is which in order
     * to render them properly. React tries to do its own guesswork to keep track of things, but we can help with
     * specifying a key value attribute prop on our component.
     * 
     * YOU SHOULD ALWAYS PASS A UNIQUE KEY TO ANYTHING YOU RENDER W/ ITERATION. (Reactivity)
     */
    task => <Todo id={task.id} label={task.label} checked={task.checked} key={task.id} />
  )
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Form element, with input type text for writing out new task, and a button to submit the task. */}
      <form>
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
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      {/* An array of buttons to be used for filtering of the list. */}
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        {/* Accessibility features, tells screen readers when button is pressed... */}
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
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
        {/* <Todo id={1} checked={true} label={"Eat"} />
        <Todo id={2} checked={false} label={"Learn React.js"} />
        <Todo id={3} checked={false} label={"Do 100 push-ups"} /> */}
      </ul>
    </div>
  )
}

// Export statement
export default App;
