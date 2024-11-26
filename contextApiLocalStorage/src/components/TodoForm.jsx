import { useState } from "react";
import { TodoContext } from "../contexts";
import { useTodoContext } from "../contexts";

const TodoForm = () => {
    const [todosData,setTodosData] = useState('');
    const {addTodo} = useTodoContext(TodoContext);
    const addNewTodo = (e) => {
        console.log(todosData);
        e.preventDefault();
        addTodo(todosData);
    };

  return (
    <>
      <form className="flex" onSubmit={addNewTodo}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value = {todosData}
          onChange={(e)=> setTodosData(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
