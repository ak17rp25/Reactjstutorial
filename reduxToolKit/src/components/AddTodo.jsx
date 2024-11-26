import {useState} from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../feature/Todo";
const AddTodo = ()=>{

    const dispatch = useDispatch()
    const [todo, settodo] = useState("");
    const addTodoData = (e)=>{
        e.preventDefault();
        dispatch(addTodo(todo));
        settodo("");
    }
    return(
        <>
        <form onSubmit={addTodoData}>
            <input type ="text"
            placeholder="Add Your Todo"
            value= {todo}
            onChange={(e)=>settodo(e.target.value)}
            ></input>
            <button type="submit">Add Todo</button>
        </form>
        </>
    )
}

export default AddTodo;