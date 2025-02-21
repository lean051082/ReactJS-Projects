import { useState } from "react";
import "./Alternador.css";

function Alternador() {
  const [encendido, setEncendido] = useState(false);

  const updateEncendido = () => {
    setEncendido((prevEncendido) => !prevEncendido);
  };
  return (
    <button
      onClick={updateEncendido}
      className={encendido ? "luz" : "oscuridad"}
    >
      {encendido ? "Encendido" : "Apagado"}
    </button>
  );
}

export default Alternador;
