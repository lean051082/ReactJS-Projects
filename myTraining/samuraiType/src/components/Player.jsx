import { useState } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  function changeHandler(e) {
    console.log(e.target.value);
    setPlayerName(e.target.value);
  }

  function keyDownHandler(e) {
    if (e.key === 'Enter') {
      setIsEditMode(false);
    }
  }
  return (
    <div className="input-container">
      {isEditMode && (
        <input
          type="text"
          placeholder="Escribe tu nombre..."
          value={playerName}
          onChange={(e) => changeHandler(e)}
          onKeyDown={(e) => keyDownHandler(e)}
        />
      )}
      {!isEditMode && <label>{playerName}</label>}
    </div>
  );
}
