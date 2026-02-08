import { useState, useEffect } from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContextProvider";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos((prev) => [...prev,{id:Date.now(),...todo}]);
  }

  const UpdateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
  }

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
  }

  //using local storage to persist data
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
    
  }, []);
  //add todos to local storage whenever todos state changes-

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContextProvider value={{todos, addTodos, DeleteTodo, UpdateTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8 bg-cover bg-center">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              > <TodoItem todo={todo} /></div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
