import React from 'react'
import List from './list/list';
import Foot from './foot/foot'
import '../../App.css'

export default function Body(props) {
  const { todos, updateTodo, deleteTodo, all, active, completed, clearDone, handleAll, editingTodo, editTodo } = props;

  //完成所有todo，或全部未完成
  const showList = () => {
    handleAll()
  }

  return (
    <div>
      <section style={{ display: { todos } ? 'block' : 'none' }} className="main">
        <input onClick={showList} id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id='todoList' className="todo-list" style={{ display: 'block' }}>
          {
            todos.map((todo) => {
              return <List todo={todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} editingTodo={editingTodo} editTodo={editTodo}></List>
            })
          }
        </ul>
        <Foot todos={todos} all={all} active={active} completed={completed} clearDone={clearDone} />
      </section>
    </div>
  )
}
