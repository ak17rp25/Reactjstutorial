import { useState } from "react";
function App() {
  const [color, setcolor] = useState('green');
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}} >
      <div className="fixed flex flex-wrap inset-2 justify-center bottom-12">
        <button onClick={() => setcolor('red')}>Red</button>
        <button onClick={() => setcolor('blue')}>Blue</button>
        <button onClick={() => setcolor('green')}>Green</button>
      </div>
    </div>
   
  );
}

export default App;
