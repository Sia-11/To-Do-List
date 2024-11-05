// src/components/TodoList.js

import { useState } from 'react';
import { FaEdit, FaStar } from 'react-icons/fa';
import SortOptions from './SortOptions';

// Manages and displays the list of tasks
const TodoList = ({ tasks, onDeleteTask, onToggleTask, onToggleImportant, onReorderTask, onEditTask, editingTaskId, setEditingTaskId, sortBy, setSortBy }) => {
  const [editText, setEditText] = useState(''); // Temporary edit text state

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (taskId) => {
    onEditTask(taskId, editText);
    setEditingTaskId(null);
  };
  
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'completed') return b.completed - a.completed;
    if (sortBy === 'incomplete') return a.completed - b.completed;
    if (sortBy === 'important') return b.important === a.important ? 0 : b.important ? 1 : -1;
    return 0;
  });

  // Function to handle reordering tasks
  const handleReorder = (index, direction) => {
    if ((index === 0 && direction === -1) || (index === tasks.length - 1 && direction === 1)) return;
    onReorderTask(index, direction);
  };

  return (
    <div>
      {/* SortOptions component for task sorting */}
      <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      <div className="space-y-2">
        {sortedTasks.map((task, index) => (
          <div key={task.id} className="flex items-center p-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
            
            {/* Task Number */}
            <span className="mr-3 text-gray-500">{index + 1}.</span>

            {/* Custom Checkbox */}
            <span
              onClick={() => onToggleTask(task.id)}
              className={`w-6 h-6 flex items-center justify-center mr-2 rounded-full border-2 cursor-pointer ${
                task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
              }`}
            >
              {task.completed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>

            {/* Editable Text or Task Text */}
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 px-2 py-1 rounded border border-gray-300"
              />
            ) : (
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {task.text}
              </span>
            )}

            {/* Important Task Icon */}
            <span onClick={() => onToggleImportant(task.id)} className="mr-2 cursor-pointer">
              <FaStar className={`h-5 w-5 ${task.important ? 'text-yellow-500' : 'text-gray-300'}`} />
            </span>

            {/* Edit Icon */}
            {editingTaskId === task.id ? (
              <button onClick={() => saveEdit(task.id)} className="text-blue-500 ml-2">
                Save
              </button>
            ) : (
              <FaEdit onClick={() => startEditing(task)} className="text-gray-500 cursor-pointer mx-2" />
            )}

            {/* Reorder Buttons */}
            <button onClick={() => handleReorder(index, -1)} className="text-gray-400 mx-1">↑</button>
            <button onClick={() => handleReorder(index, 1)} className="text-gray-400 mx-1">↓</button>

            {/* Delete Button */}
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

