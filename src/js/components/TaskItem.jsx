import React, { useState } from "react";

const TaskItem = ({ label, onDelete }) => {
 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className="list-group-item d-flex justify-content-between align-items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "50px" }}
    >
      {label}
      
    
      {isHovered && (
        <span 
          className="text-danger" 
          onClick={onDelete}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          X
        </span>
      )}
    </li>
  );
};

export default TaskItem;