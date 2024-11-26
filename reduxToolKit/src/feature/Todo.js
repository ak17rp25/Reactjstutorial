import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id: nanoid(),
            title: "Buy groceries",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            state.todos = [...state.todos, {id: nanoid(), title: action.payload, completed: false}]
        },
        toggleTodo: (state,action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload? {...todo, completed:!todo.completed}: todo)
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        }
    }
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;

