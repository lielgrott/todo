import Title from './components/title/Title';
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/todoList/TodoList';
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App;
