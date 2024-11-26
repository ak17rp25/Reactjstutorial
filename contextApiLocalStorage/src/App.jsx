import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    console.log(todos);
    const newTodo = { id: Date.now(), todo, completed: false };
    settodos([...todos, newTodo]);
    
  };

  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prev) => (prev.id === id ? todo : prev)));
  };

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prev) => prev.id !== id));
  };

  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : prev
      )
    );
  };

  useEffect(() => {
    const todosItem = localStorage.getItem("todos");
    console.log(todosItem);
    if (todosItem && todosItem.length > 0 ) {
      settodos(JSON.parse(todosItem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
