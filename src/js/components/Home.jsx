import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import TaskFooter from "./TaskFooter";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center display-1 opacity-25 mb-0" style={{ color: "#EAD7D7" }}>
        todos
      </h1>
      
      <div className="card shadow-sm border-0 rounded-0">
        <ul className="list-group list-group-flush">
          
          <TaskInput onAddTask={addTask} />
          
          
          <TodoList tasks={tasks} onDeleteTask={deleteTask} />
        </ul>
        
       
        <TaskFooter count={tasks.length} />
      </div>
    </div>
  );
};

export default Home;