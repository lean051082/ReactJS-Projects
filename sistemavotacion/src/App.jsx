import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Votacion from "./Votacion";

function App() {
  const [count, setCount] = useState(0);

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
      <h1>Sistema de votación</h1>
      <div className="card">
        <Votacion
          question={"Cual es tu lenguaje favorito?"}
          answers={["JavaScript", "Python", "Java", "C#"]}
        />
      </div>
    </>
  );
}

export default App;
