

import React from "react";
import "../CSS/Todoitems.css";

const TodoItems = ({ tasks, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className="todo-item">
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItems;



