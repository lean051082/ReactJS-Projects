import { use, useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const estilo = {
    color: contador > 0 ? "green" : contador < 0 ? "red" : "black",
  };

  return (
    <div>
      <h2>Contador</h2>
      <p style={estilo}>{contador}</p>
      <button onClick={() => setContador(() => contador + 1)}>
        Incrementar
      </button>
      <button
        onClick={() => setContador(() => contador - 1)}
        disabled={contador == 0 ? true : false}
      >
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
