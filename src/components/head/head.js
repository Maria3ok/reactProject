import React from 'react'
import { nanoid } from 'nanoid'
import '../../App.css'

export default function Head(props) {

  const { addTodo } = props;

  //添加一个todo
  const add = (event) => {
    const { target, keyCode } = event;

    if (keyCode != '13') {
      return
    }
    else if (target.value == '') {
      alert('添加内容不能为空');
      return
    }
    const todo = { id: nanoid(), content: target.value, done: false, display: 'block' }
    addTodo(todo);
    target.value = ''
  }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input onKeyUp={add} className="new-todo" placeholder="What needs to be done?" autoFocus />
      </header>
    </div>
  )
}
