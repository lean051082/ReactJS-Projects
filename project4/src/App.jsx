import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [rnd, setRnd] = useState(0);
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);

  const getRnd = () => {
    const newRnd = Math.floor(
      Math.random() * (maxRange - minRange + 1) + Number(minRange)
    );
    setRnd(newRnd);
  };

  const getMinRange = (e) => {
    const inputMinValue = e.target.value;
    setMinRange(inputMinValue);
  };

  const getMaxRange = (e) => {
    const inputMaxValue = e.target.value;
    setMaxRange(inputMaxValue);
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
      <h1>Random Generator</h1>
      <div className="card">
        <h2>Random Range</h2>
        <label>Min:</label>
        <input type="number" onChange={(e) => getMinRange(e)} />
        <label>Max:</label>
        <input type="number" onChange={(e) => getMaxRange(e)} />
      </div>
      <div className="card">
        <button onClick={getRnd}>Generate random</button>
        <p>{rnd}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
