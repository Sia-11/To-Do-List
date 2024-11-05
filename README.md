# To-Do List Application

This is a simple and intuitive To-Do List application built using React, Tailwind CSS, and Next.js. Below is a brief overview of the application features, folder structure, and where to find specific code files for each functionality.

## Project Overview
This app allows users to:
- Add, edit, and delete tasks
- Mark tasks as important or complete
- Sort and reorder tasks
- Persist data locally

## Main Features and Files
Here are the key files to check for each feature in the project:

- **Task List Management**
  - **File:** `src/components/TodoList.js`
  - **Purpose:** Contains code for displaying, editing, and deleting tasks, as well as handling task completion and importance toggling.
  
- **Task Sorting Options**
  - **File:** `src/components/SortOptions.js`
  - **Purpose:** Includes sorting functionality, allowing tasks to be sorted by completed, incomplete, and importance status.

- **New Task Input Feature**
  - **File:** `src/components/TodoInput.js`
  - **Purpose:** Allows users to add new tasks to the list. 
  
- **Main Application Layout**
  - **File:** `src/pages/index.js`
  - **Purpose:** The main layout of the application, combining all components.

## Folder Structure
Here’s a high-level view of the file structure to help you locate the files:

my-todo-app/
│
├── public/               # Public assets (images, icons, etc.)
│   └── favicon.ico
│
├── src/                  # Source files for the application
│   ├── components/       # Reusable components
│   │   ├── TodoInput.js            # Input component for adding tasks
│   │   ├── TodoList.js             # Displays the list of tasks
│   │   ├── SortOptions.js          # Sorting options for tasks
│   │   └── DarkModeToggle.js       # Dark mode toggle feature
│   │
│   ├── pages/            # Page components for routing
│   │   └── index.js               # Main page layout for the app
│   │
│   ├── styles/           # Stylesheets (CSS files)
│   │   └── styles.css             # Main styles for the application
│   │
│   ├── utils/            # Utility functions (if any)
│   │   └── helper.js              # Helper functions for tasks
│   │
│   └── App.js            # Main application component
│
├── package.json          # Project dependencies and scripts
├── README.md             # Documentation for the project
└── .gitignore            # Files and folders to ignore in version control




## Running the Project
To run the project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.

Happy exploring!
