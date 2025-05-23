import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center border-b py-2"
        >
          {task}
          <button
            onClick={() => deleteTask(index)}
            className="text-red-500"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
