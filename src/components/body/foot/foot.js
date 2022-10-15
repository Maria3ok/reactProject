import React, { useState } from 'react'
import '../../../App.css'

export default function Foot(props) {
  const { todos, all, active, completed, clearDone } = props
  const num = todos.reduce((pre, todo) => { return pre + (todo.done ? 0 : 1) }, 0)
  const [selected, setSelected] = useState(0)

  //按状态展示todo
  const show = (k) => {
    return () => {
      switch (k) {
        case 0:
          all()
          break;
        case 1:
          active()
          break;
        case 2:
          completed()
          break;
        default: break;
      }
      setSelected(k)
    }
  }

  //清空已完成的todo
  const clearComplete = () => {
    return () => {
      clearDone()
    }
  }

  return (
    <div>
      <footer className="footer">

        <span className="todo-count">{num > 1 ? (num + 'items left') : (num + 'item left')} </span>

        <ul className="filters">
          <li>
            <a onClick={show(0)} href="#/" className={selected === 0 ? 'selected' : ''}>All</a>
          </li>
          <li>
            <a onClick={show(1)} href="#/active" className={selected === 1 ? 'selected' : ''}>Active</a>
          </li>
          <li>
            <a onClick={show(2)} href="#/completed" className={selected === 2 ? 'selected' : ''}>Completed</a>
          </li>
        </ul>
        <button onClick={clearComplete()} className="clear-completed">Clear completed</button>
      </footer>
    </div>
  )
}
