import { useState } from 'react';
import { KEYBOARD_KEYS } from '../constants/constants';

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  function changeHandler(e) {
    setPlayerName(e.target.value);
  }

  function keyDownHandler(e) {
    if (e.key === KEYBOARD_KEYS.KEY_ENTER) {
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
