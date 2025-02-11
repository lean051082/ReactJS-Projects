import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*
Aprender a usar useEffect para mejorar la eficiencia y evitar problemas con el setInterval
*/
function getDate() {
  const date = new Date();

  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function App() {
  const [date, setDate] = useState(getDate());
  setInterval(updateDate, 1000);
  function updateDate() {
    setDate(getDate());
  }

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
      <h1>Date project</h1>
      <div className="card">
        <p>{date}</p>
      </div>
    </>
  );
}

export default App;
