import React from "react";
import TaskItem from "./TaskItem";

const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <li className="list-group-item text-muted fst-italic">
          No hay tareas, añadir tareas
        </li>
      ) : (
        tasks.map((task, index) => (
          <TaskItem 
            key={index} 
            label={task} 
            onDelete={() => onDeleteTask(index)} 
          />
        ))
      )}
    </>
  );
};

export default TodoList;