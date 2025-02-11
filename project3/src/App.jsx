import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [counterDisable, setCounterDisable] = useState(false);

  const handleCount = (e) => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(count);
      setCounterDisable(true);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(e) => handleCount(e)} disabled={counterDisable}>
          count is {count}
        </button>
        <button
          onClick={() => {
            setCount(0);
            setCounterDisable(false);
          }}
        >
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
