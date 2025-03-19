import { getCharacterArray } from '../data.js';
import Letter from './Letter';

export default function TypeContainer({ gameState }) {
  return (
    <div className="phrase-container">
      {getCharacterArray(gameState.selectedPhrase).map((char, index) => {
        return (
          <Letter key={index} letterClass={gameState.letterClassArray[index]}>
            {char}
          </Letter>
        );
      })}
    </div>
  );
}
