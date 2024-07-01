// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Component/navbar';
// function App() {
//   return (
//    <>
//    <Navbar/>
   
   
//    </>
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div id="todoList">
      <h1>Simple To-Do List</h1>
      <input
        type="text"
        id="taskInput"
        placeholder="Enter task..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button id="addTaskBtn" onClick={addTask}>
        Add Task
      </button>
      <button id="Clear" onClick={clearAll}>
        Clear All
      </button>
      <ul id="tasksList">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
