import { useDispatch,useSelector } from "react-redux";
import { deleteTodo } from "../feature/Todo";

const Todo = ()=>{
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    return(<>

    {todos.map(todo=>(
        <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={()=>dispatch(deleteTodo(todo.id))} />
            {todo.title}
        </div>
    ))}
    </>)
}
export default Todo;