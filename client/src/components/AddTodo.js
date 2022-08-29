import { useState, useEffect } from 'react';
import axios from 'axios';


function AddTodo() {
    const [text, setText] = useState('');

    const addUpdateTodo = () => {
        axios.post("http://localhost:3000/api/todo", { title: text })
            .then((res) => {
                setText("")
            })
            .catch((err) => console.log(err))

    }

    return (
        <div>
            <input
                type='text'
                placeholder='Add a todo'
                value={text}
                name='text'
                className='todo-input'
                onChange={(e) => setText(e.target.value)}
            />
            <button className='todo-btn' onClick={addUpdateTodo}>
                Add Todo
            </button>
        </div>
    )
}

export default AddTodo