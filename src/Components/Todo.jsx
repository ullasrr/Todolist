
import React, { useState } from "react";
import TodoItems from "./Todoitems";
import "../CSS/Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TodoItems tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Todo;
