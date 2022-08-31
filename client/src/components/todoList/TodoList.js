import Todo from '../todo/Todo';
import axios from 'axios';
import { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isUpdating, setUpdating] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/api/todo')
            .then((res) => setTodos(res.data))
            .catch((err) => console.log(err));
    }, [todos.length]);
    const deleteTodo = (_id) => {
        axios.delete('http://localhost:3000/api/todo/' + _id)
            .then((res) => {
                console.log(res.data)
                todos.filter((todo)=>{
                    return todo._id!==_id;
                })
                console.log(todos)
                setTodos(todos)
            })
            .catch((err) => console.log(err))
    }

    const updateTodo = (_id, title, description) => {
        setUpdating(_id)
    }
    return (
        <div className='list'>
            {todos.map(item => <Todo
                key={item._id}
                title={item.title}
                description={item.description}
                remove={() => deleteTodo(item._id)}
                update={() => updateTodo(item._id, item.title, item.description)} />)}
        </div>
    )
}

export default TodoList