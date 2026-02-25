# TodoList Application

A modern, responsive todo list application built with React and Vite. Manage your daily tasks efficiently with a clean and intuitive user interface. Your todos are automatically saved to local storage so you never lose your tasks.

## Features

- ✅ **Add Tasks** - Easily create new todos with descriptions
- ✏️ **Edit Tasks** - Update existing todos
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- ✓ **Mark Complete** - Toggle task completion status
- 💾 **Local Storage** - Persist todos across browser sessions
- 🎨 **Tailwind CSS** - Beautiful, responsive UI design
- ⚡ **Vite** - Lightning-fast development and build performance
- 🔍 **ESLint** - Code quality and consistency

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite (with rolldown)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Storage**: Browser LocalStorage
- **Code Quality**: ESLint

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx       # Form to add new todos
│   ├── TodoItem.jsx       # Individual todo item component
├── context/
│   └── TodoContextProvider.jsx  # Global context for state management
├── App.jsx                # Main application component
├── App.css                # Application styles
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## Installation

1. **Clone or download** the project files
2. **Navigate** to the project directory:
   ```bash
   cd TodoList
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Getting Started

### Development Server
Run the development server with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check code quality and consistency:
```bash
npm run lint
```

## How to Use

1. **Add a Todo**
   - Type your task in the input field
   - Press Enter or click the Add button
   - Your todo appears in the list

2. **Mark as Complete**
   - Click the checkbox next to a todo to mark it complete
   - Completed todos will show a visual indicator

3. **Edit a Todo**
   - Click the edit button (if available) on any todo
   - Modify the text and save

4. **Delete a Todo**
   - Click the delete button to remove a todo
   - Deleted todos are permanently removed

5. **Persistence**
   - All todos are automatically saved to your browser's local storage
   - Your todos will still be there when you close and reopen the app

## Key Components

### App.jsx
Main component that manages todo state and provides CRUD operations:
- `addTodos()` - Add a new todo
- `UpdateTodo()` - Update an existing todo
- `DeleteTodo()` - Remove a todo
- `toggleComplete()` - Mark todo as complete/incomplete

### TodoForm.jsx
Component for user input, handles adding new todos to the list.

### TodoItem.jsx
Individual todo item component displaying a single todo with action buttons.

### TodoContextProvider.jsx
Context provider for global state management using React Context API.

## Data Structure

Each todo object contains:
```javascript
{
  id: number,           // Unique identifier (timestamp)
  title: string,        // Todo title/description
  completed: boolean    // Completion status
}
```

## Browser Compatibility

This application works with all modern browsers that support:
- LocalStorage API
- ES6+ JavaScript features
- CSS Grid and Flexbox

## Future Enhancements

- Add todo categories/tags
- Implement due dates and reminders
- Add priority levels
- Dark mode toggle
- Export/import todo lists
- TodoList sharing feature

## License

This project is open source and available for personal and educational use.

## Author

Created by Ankush Mondal
