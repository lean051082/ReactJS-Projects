import { useRef, useState } from 'react';

export default function Player() {
  const inputName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleSetName() {
    setPlayerName(inputName.current.value);
    inputName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
