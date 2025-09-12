import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      setInput(''); //need to figure this line
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 flex-1"
      />
      <button className="bg-blue-500 text-white px-4 py-2">Add</button>
    </form>
  );
}

export default TaskForm;
