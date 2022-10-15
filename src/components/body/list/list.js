import React from 'react'
import '../../../App.css'

export default function List(props) {
    const { todo, updateTodo, deleteTodo, editingTodo, editTodo } = props;

    //改变todo状态
    const changeCheck = (id) => {
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    }

    //删除一个todo
    const del = (id) => {
        return () => {
            deleteTodo(id)
        }
    }

    //正在编辑一个todo
    const edit = (id) => {
        return () => {
            editingTodo(id)

        }

    }

    //完成编辑一个todo
    const finishEdit = (id, e) => {
        const { keyCode, target, type } = e
        if (type === 'keyup') {
            if (keyCode === 13) {
                return (editTodo(id, e.target.value))
            }
        } else if (type === 'blur' && todo.editing === true) {
            return (editTodo(id, target.value))
        }

    }

    return (
        <div>
            <li onBlur={(e) => finishEdit(todo.id, e)} onKeyUp={(e) => finishEdit(todo.id, e)} id='123' data-id="1665281004993" style={{ display: todo.display }} className={todo.editing ? 'editing' : todo.done ? 'completed' : ''}>
                <div className="view" onDoubleClick={edit(todo.id)}>
                    <input className="toggle" type="checkbox" checked={todo.done} onChange={changeCheck(todo.id)} />
                    <label>{todo.content}</label>
                    <button className="destroy" onClick={del(todo.id)}></button>
                </div>
                <input className='edit' defaultValue={todo.content} />
            </li>
        </div>
    )
}
