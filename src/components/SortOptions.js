// src/components/SortOptions.js

// Dropdown for selecting sorting criteria
const SortOptions = ({ sortBy, setSortBy, isDarkMode }) => {
  return (
    <div className="flex justify-end mb-4">
      <label className="mr-2">Sort by:</label>
      
      {/* Dropdown to select sorting option */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={`p-1 border border-gray-300 rounded-lg focus:outline-none${
          isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <option value="">Select</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
        <option value="important">Important</option>
      </select>
    </div>
  );
};

export default SortOptions;
