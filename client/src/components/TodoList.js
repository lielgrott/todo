import Todo from './Todo';
import axios from 'axios';
import { useState, useEffect } from 'react';

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [isUpdating, setUpdating] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3000/api/todo")
            .then((res) => setTodo(res.data))
            .catch((err) => console.log(err));
    }, [todo.length]);
    const deleteTodo = (_id) => {
        axios.delete("http://localhost:3000/api/todo/" + _id)
            .then((res) => {
                console.log(res.data)
                setTodo(todo)
            })
            .catch((err) => console.log(err))
    }

    const updateTodo = (_id, title, description) => {
        setUpdating(_id)
    }
    return (
        <div className='list'>
            {todo.map(item => <Todo
                key={item._id}
                text={item.title}
                description={item.description}
                remove={() => deleteTodo(item._id)}
                update={() => updateTodo(item._id, item.text, item.description)} />)}
        </div>
    )
}

export default TodoList