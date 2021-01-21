import React, {useState, useEffect} from 'react'
import List from './List'
import AddTodo from './AddTodo'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo){
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <AddTodo addFn={addTodo}/>
      <List list={todos}/>
    </div>
  );
}

export default App;
