import { useEffect, useState } from 'react';

function Temporizador({ limit = 10 }) {
  const [count, setCount] = useState(0);
  const [pausa, setPausa] = useState(false);

  useEffect(() => {
    let idSetInterval;

    if (!pausa) {
      idSetInterval = setInterval(() => {
        setCount((prevCount) =>
          prevCount + 1 >= limit + 1 ? 0 : prevCount + 1
        );
        console.log('ewewe');
      }, 1000);
    }

    return () => clearInterval(idSetInterval);
  }, [pausa, limit]);

  useEffect(() => {
    if (count >= 11) setCount(0);
  }, [count]);

  const handlerPausa = () => {
    setPausa((prevPausa) => !prevPausa);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>Reiniciar</button>
      <button onClick={handlerPausa}>{pausa ? 'Reanudar' : 'Pausar'}</button>
    </div>
  );
}

export default Temporizador;
