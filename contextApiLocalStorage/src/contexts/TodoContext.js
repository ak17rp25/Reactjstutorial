import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Task 1", completed: false }],
  addTodo :(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{},

});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);
