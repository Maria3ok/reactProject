import React, { useState } from 'react';
import Head from './components/head/head';
import Body from './components/body/body';
import './App.css';


function App() {
  const arr = [
    { id: '01', content: '11', done: false, display: 'block', editing: false },
    { id: '02', content: '22', done: true, display: 'block', editing: false },
    { id: '03', content: '33', done: true, display: 'block', editing: false }
  ]
  const [todos, setTodos] = useState(arr);

  //添加一个todo
  const addTodo = (todo) => {
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  //更新一个todo的状态
  const updateTodo = (id, checked) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: checked }
      else { return todo }
    })
    setTodos(newTodos)
  }

  //删除一个todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return (todo.id != id)
    })
    setTodos(newTodos)
  }

  //正在编辑一个todo
  const editingTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: !todo.editing }

      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  //完成编辑一个todo
  const editTodo = (id, newContent) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: !todo.editing, content: newContent }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  //完成所有todo，或全部未完成
  const handleAll = () => {
    const remains = todos.filter((todo) => {
      return (todo.done === false)
    })
    if (remains.length === 0) {
      const newTodos = todos.map((todo) => {
        return { ...todo, done: false }
      })
      setTodos(newTodos)
    } else {
      const newTodos = todos.map((todo) => {
        return { ...todo, done: true }
      })
      setTodos(newTodos)
    }
  }

  //展示所有todo
  const all = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo, display: 'block' }
    })
    setTodos(newTodos)
  }

  //展示未完成的todo
  const active = () => {
    const newTodos = todos.map((todo) => {
      if (todo.done === false) {
        return { ...todo, display: 'none' }
      } else {
        return { ...todo, display: 'block' }
      }
    })
    setTodos(newTodos)
  }

  //展示已完成的todo
  const completed = () => {
    const newTodos = todos.map((todo) => {
      if (todo.done === false) {
        return { ...todo, display: 'block' }
      } else {
        return { ...todo, display: 'none' }
      }

    })
    setTodos(newTodos)
  }

  //清空已完成的todo
  const clearDone = () => {
    const newTodos = todos.filter((todo) => {
      return (todo.done === false)
    })
    setTodos(newTodos);

  }

  return (
    <div className="App">
      <section className="todoapp">
        <Head addTodo={addTodo} />
        <Body
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          all={all}
          active={active}
          completed={completed}
          clearDone={clearDone}
          handleAll={handleAll}
          editingTodo={editingTodo}
          editTodo={editTodo} />
      </section>
    </div>
  );
}

export default App;
