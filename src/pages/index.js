// src/pages/index.js

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false, important: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to toggle the important status of a task
  const toggleTaskImportant = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, important: !task.important } : task
      )
    );
  };

  // Function to reorder tasks in the list
  const reorderTask = (index, direction) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const [movedTask] = newTasks.splice(index, 1);
      newTasks.splice(index + direction, 0, movedTask);
      return newTasks;
    });
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-background text-primary'} min-h-screen flex items-center justify-center transition-colors duration-300 font-sans`}>
      <div className={`container max-w-2xl mx-auto p-8 shadow-lg rounded-lg relative ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        
        {/* Toggle Dark Mode Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute top-4 right-4 text-2xl focus:outline-none"
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
        </button>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">To Do List</h1>
        <div className="flex justify-between items-center mb-4">
          <p className={`text-${isDarkMode ? 'gray-300' : 'gray-400'}`}>{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</p>
          <button
            onClick={() => setTasks([])}
            className={`text-${isDarkMode ? 'gray-300' : 'gray-400'}`}
          >
            Clear All
          </button>
        </div>

        <TodoInput onAddTask={addTask} />
        {/* List of Tasks */}
        <TodoList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTaskCompletion}
          onToggleImportant={toggleTaskImportant}
          onReorderTask={reorderTask}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </div>
  );
};

export default Home;
