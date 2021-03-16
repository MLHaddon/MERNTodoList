import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Card from './components/Card';
import React, { useState } from 'react';
import './App.css';

function App() {
  const initial = {
    desc: "",
    isCompleted: false
  };
  const [task, setTask] = useState(initial);
  const [tasks, setTasks] = useState([]);

  const handleFormChange = e => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setTasks(oldTasks => [...oldTasks, task]);
    setTask(initial);
  };

  const handleTaskClick = (idx) => {
    tasks[idx].isCompleted ? 
    tasks[idx].isCompleted = false : 
    tasks[idx].isCompleted = true;
    console.log(tasks[idx]);
    setTasks(oldTasks => [...oldTasks.slice(0, idx), ...oldTasks.slice(idx + 1), ...oldTasks.slice(idx, idx + 1)]);
  }

  const handleDeleteTask = (idx) => {
    setTasks(oldTasks => [...oldTasks.slice(0, idx), ...oldTasks.slice(idx + 1)]);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
            <Form 
              inputs={task}
              handleChange={handleFormChange}
              handleSubmit={handleFormSubmit}
            />
        </header>
        <div className="d-flex m-2 flex-row justify-content-evenly">
          {
            tasks.map((c, i) => <Card 
              desc={c.desc}
              isCompleted={c.isCompleted}
              key={i}
              idx={i}
              handleItemClick={handleTaskClick}
              handleDeleteClick={handleDeleteTask}
            />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
