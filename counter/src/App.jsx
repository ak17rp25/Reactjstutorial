
import { useState } from "react"
function App() {
  const [counter, setcounter] = useState(0)
  const incrementMethod =(e)=>{
    e.preventDefault();
    if(counter < 20){
      setcounter(counter+1)
    }
    
  }
  const decrementMethod =(e)=>{
    e.preventDefault();
    if(counter > 0){
      setcounter(counter-1)
    }
    
  }
  return (
    <>
    <h1>Counter</h1>
    <h1>Counter Value with hooks{counter}</h1>
    <button onClick={incrementMethod}> Increment</button>
    <button onClick ={decrementMethod}> Decrement</button>
    </>
  )
}

export default App
