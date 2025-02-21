import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(7);

  const updateCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={updateCount}>Incrementar</button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrementar
        </button>
      </div>
      <p>{count}</p>
    </>
  );
}

export default App;
