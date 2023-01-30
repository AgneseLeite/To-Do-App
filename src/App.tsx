import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  // for the input we need text state
  // here: value, and function that allows to change this value
  const [inputText, setInputText] = useState('');
  // we need an array of objects. new state:
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
          <h1>Today's agenda:</h1>
      </header>
      <Form 
          inputText={inputText}
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText} 
          />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App
