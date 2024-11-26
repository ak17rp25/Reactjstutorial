import { store } from "./app/store"
import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"
import { Provider } from "react-redux"

function App() {

  return (
    <Provider store ={store} >
    <h1>Learn About Redux Tool Kit</h1>
    <AddTodo></AddTodo>
    <Todo></Todo>
    </Provider>
  )
}

export default App
