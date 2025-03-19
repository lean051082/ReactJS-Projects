import { useState } from 'react';

export default function Player({
  name,
  symbol,
  highlightPlayer,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(name);
  const [editMode, setEditMode] = useState(false);

  const changeEditMode = () => {
    setEditMode(true);
    setPlayerName('');
  };

  const changeName = (e) => {
    setPlayerName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditMode(false);
      onChangeName(symbol, playerName);
    }
  };
  return (
    <li className={highlightPlayer ? 'active' : ''}>
      <span className="player">
        {!editMode && <span className="player-name">{playerName}</span>}
        {editMode && (
          <input
            value={playerName}
            onChange={changeName}
            onKeyDown={handleKeyDown}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeEditMode} disabled={editMode}>
        Edit
      </button>
    </li>
  );
}
