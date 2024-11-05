// src/components/TodoInput.js

import { useState } from 'react';

// Allows users to add new tasks to the list
const TodoInput = ({ onAddTask, isDarkMode }) => {
  const [text, setText] = useState('');

  // Function to handle adding a task
  const handleAddTask = () => {
    if (text.trim() !== '') {  // Ensure that the task isn't empty
      onAddTask(text.trim());
      setText(''); // Clear the input field after adding  
    }
  };

  return (
    <div className="flex items-center mb-4">
      {/* Input field for entering new tasks */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}  // Add task on Enter key press
        placeholder="Add a new task"
        className={`flex-1 px-4 py-2 rounded-lg shadow-md focus:outline-none ${
          isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-900 placeholder-gray-500'
        }`}
      />

      {/* Button to add the task */}
      <button
        onClick={handleAddTask}
        className={`ml-2 px-4 py-2 rounded-lg shadow-md font-semibold transition ${
          isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
