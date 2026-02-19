import React from "react";

const TaskFooter = ({ count }) => {
  return (
    <div className="card-footer text-muted bg-white border-top-0 py-2 px-3 shadow-sm" 
         style={{ fontSize: "14px", fontWeight: "300" }}>
      {count === 0 
        ? "No items left" 
        : `${count} ${count === 1 ? "item" : "items"} left`}
    </div>
  );
};

export default TaskFooter;