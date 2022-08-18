import './App.css';
import Todo from './components/Todo';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  },[todo.length]);

  const addUpdateTodo = () => {
    if (isUpdating === "") {
      axios.post("http://localhost:3000/api/todo", { title: text })
        .then((res) => {
          setTodo([res.data])
          setText("")
          setUpdating("")
        })
        .catch((err) => console.log(err))
    }
  }

  const deleteTodo = (_id) => {
    axios.delete("http://localhost:3000/api/todo/"+_id)
    .then((res)=>{console.log(res.data)
      setTodo(todo)})
    .catch((err)=>console.log(err))
  }

  const updateTodo = (_id, title, description) => {
    setUpdating(_id)
    setText(text)
  }

  return (
    <div className='todo-app'>
      <div className='container'>
        <div className='top'>
          <h1>Todo App</h1>
          <input
            type='text'
            placeholder='Add a todo'
            value={text}
            name='text'
            className='todo-input'
            onChange={(e) => setText(e.target.value)}
          />
          <button className='todo-btn' onClick={addUpdateTodo}>Add Todo
          </button>
        </div>
        <div className='list'>
          {todo.map(item => <Todo
            key={item._id}
            text={item.title}
            description={item.description}
            remove={() => deleteTodo(item._id)}
            update={() => updateTodo(item._id, item.text, item.description)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
