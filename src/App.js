import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
        <AddTodo></AddTodo>
        <TodoList></TodoList>
    </div>
  );
}

export default App;
