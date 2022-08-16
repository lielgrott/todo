import React, { useState, useEffect } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import axios from 'axios';



function Todo({ todos, completeTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const [todo, setTodo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost/api/todo")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    });

    return todos.map((todo, index) => {
        <div className={todo.iscomplete ? 'todo-row-complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon' />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon' />
            </div>
        </div>
    })
}

export default Todo