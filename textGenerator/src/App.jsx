import { useState, useCallback, useEffect,useRef } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [isNoRequired, setIsNoRequired] = useState(false);
  const [isSpCharRequired, setIsSpCharRequired] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(password);
  const generatePassword = useCallback(() => {
    let randomPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNoRequired) {
      str += "0123456789";
    }
    if (isSpCharRequired) {
      str += "!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/~`";
    }
    for (let i = 0; i < length; i++) {
      randomPassword += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(randomPassword);
  }, [length, isNoRequired, isSpCharRequired, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);
  
  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordToClipBoard}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNoRequired}
            id="numberInput"
            onChange={() => {
              setIsNoRequired((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isSpCharRequired}
            id="characterInput"
            onChange={() => {
              setIsSpCharRequired((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

