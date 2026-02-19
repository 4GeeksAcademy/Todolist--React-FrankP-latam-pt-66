import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <li className="list-group-item">
      <input
        type="text"
        className="form-control border-0"
        placeholder="¿Qué falta por hacer?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

export default TaskInput;